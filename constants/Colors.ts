/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

//const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#1C1C1C', // Texto oscuro para contraste en fondo claro
    textButton: '#1C1C1C',
    textHolder: 'Black',
    background: '#FFFFFF', // Fondo blanco
    containerUser: '#F5F5F5', // Fondo gris claro para contenedores
    headerBackground: '#FFFFFF', // Fondo blanco para el header
    tint: '#EC713D', // Color de acento (naranja)
    icon: '#757575', // Iconos grises
    iconSettings: '#1C1C1C', // Icono de ajustes oscuro
    randomIcon: '#EC713D', // Icono de random naranja
    search: '#F0F0F0', // Fondo gris claro para la barra de búsqueda
    border: 'black', // Borde gris claro
    tabIconDefault: '#757575', // Iconos de pestañas por defecto grises
    tabIconSelected: '#EC713D', // Icono de pestaña seleccionada naranja
  },
  dark: {
    text: '#ECEDEE',
    textButton: 'black',
    textHolder: 'Black',
    background: '#030303',
    containerUser: '#2C2C2C',
    headerBackground: 'rgb(1,1,1)',
    tint: tintColorDark,
    icon: '#9BA1A6',
    iconSettings: 'white',
    randomIcon: 'white',
    search: 'white',
    border: 'white',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
