import React, { useContext, useState, useEffect } from "react";
import { View, Text, Switch, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { Colors } from "@/constants/Colors"; // Asegúrate de tener los colores definidos en este archivo

import { ThemeContext } from "@/context/themeContext";

const SettingsScreen = () => {

  const { theme, toggleTheme, isDarkMode } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isDarkMode);

  useEffect(() => {
    setIsEnabled(isDarkMode);
  }, [isDarkMode]);

  return (
    
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Settings</Text>

      {/* Account Settings */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Account</Text>
      <SettingsItem title="Profile" icon="person" theme={theme} />
      <SettingsItem title="Privacy" icon="lock-closed" theme={theme} />
      <SettingsItem title="Security" icon="shield" theme={theme} />

      {/* Notifications */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Notifications</Text>
      <SettingsItem title="Push Notifications" icon="notifications" theme={theme} isSwitch />
      <SettingsItem title="Message Alerts" icon="chatbox" theme={theme} isSwitch />

      {/* Preferences */}
      <Text style={[styles.sectionTitle, { color: theme.text }]}>Preferences</Text>
      <SettingsItem title="Dark Mode" icon="moon" theme={theme} isSwitch switchValue={theme === theme.dark} onToggle={toggleTheme} />
    
      <SettingsItem title="Language" icon="globe" theme={theme} />
    </ScrollView>
   
  );
};

const SettingsItem = ({ title, icon, theme, isSwitch, switchValue, onToggle }) => {
    return (
      <View style={[styles.itemContainer, { borderBottomColor: theme.border }]}>
        <View style={styles.itemTextContainer}>
          <Ionicons name={icon} size={24} color={theme.text} style={styles.icon} />
          <Text style={[styles.itemText, { color: theme.text }]}>{title}</Text>
        </View>
        {isSwitch ? <Switch value={switchValue} onValueChange={onToggle} trackColor={{ false: "#666", true: "#FFF" }} thumbColor="#FFF" /> : null}
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  itemTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SettingsScreen;

