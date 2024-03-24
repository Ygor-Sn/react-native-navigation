import React, {useCallback, useContext, useMemo, useState} from 'react';
import {useColorScheme} from 'react-native';
import {
  Provider as PaperProvider,
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperDefaultTheme
} from 'react-native-paper';
import {
  NavigationContainer,
  Theme as NavigationTheme,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { MD3Theme as PaperTheme } from 'react-native-paper';



export type Theme = NavigationTheme &
  PaperTheme & {
    // add here extra theme props
  };

const lightTheme: Theme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: 'rgb(214 200 112)',
    surface: 'rgb(214 200 112)',
    onPrimary: 'rgb(55 49 0)',
    primaryContainer: 'rgb(80 71 0)',
    onPrimaryContainer: 'rgb(243 228 137)',
    secondary: 'rgb(207 199 162)',
  },
  roundness: 24,
};

const darkTheme: Theme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    primary: '#d6c870',
    surface: 'rgb(214, 200, 112)',
    onPrimary: 'rgb(55, 49, 0)',
    primaryContainer: 'rgb(80, 71, 0)',
    onPrimaryContainer: 'rgb(243, 228, 137)',
    secondary: 'rgb(207, 199, 162)',
  },
  roundness: 24,
};

export type ThemeType = 'dark' | 'light';

export interface ThemeContextValue {
  theme: Theme;
  themeType: ThemeType;
  isDarkTheme: boolean;
  toggleThemeType: () => void;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: lightTheme,
  themeType: 'light',
  isDarkTheme: false,
  setThemeType: () => {},
  toggleThemeType: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = useState<ThemeType>(colorScheme || 'light');

  const toggleThemeType = useCallback(() => {
    setThemeType(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const isDarkTheme = useMemo(() => themeType === 'dark', [themeType]);
  const theme = useMemo(
    () => (isDarkTheme ? darkTheme : lightTheme),
    [isDarkTheme],
  );

  return (
      // <PaperProvider theme={theme}>
      <PaperProvider theme={PaperDarkTheme}>
        <ThemeContext.Provider
          value={{
            theme,
            themeType,
            isDarkTheme,
            setThemeType,
            toggleThemeType,
          }}>
          {children}
        </ThemeContext.Provider>
      </PaperProvider>
  );
};