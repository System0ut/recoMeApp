import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors"; // Ajusta la ruta según tu proyecto

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Colors.dark);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) {
          setTheme(JSON.parse(savedTheme));
        } else {
          const colorScheme = Appearance.getColorScheme();
          setTheme(colorScheme === "dark" ? Colors.dark : Colors.light);
        }
      } catch (error) {
        console.log("Error loading theme:", error);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === Colors.light ? Colors.dark : Colors.light;
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem("theme", JSON.stringify(newTheme));
    } catch (error) {
      console.log("Error saving theme:", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
