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
  roundness: 24,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: '#815512',
    onPrimary: '#FFFFFF',
    primaryContainer: '#FFDDB7',
    onPrimaryContainer: '#2A1700',
    secondary: '#705B41',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#FCDEBC',
    onSecondaryContainer: '#281805',
    tertiary: '#53643E',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#D6E9B9',
    onTertiaryContainer: '#121F03',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#FFF8F4',
    onBackground: '#211A13',
    surface: '#FFF8F4',
    onSurface: '#211A13',
    surfaceVariant: '#F0E0D0',
    onSurfaceVariant: '#504539',
    outline: '#827568',
    outlineVariant: '#D4C4B5',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#362F27',
    inverseOnSurface: '#FCEEE2',
    inversePrimary: '#F7BB70',
  },
};

const darkTheme: Theme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  roundness: 24,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    primary: '#F7BB70',
    onPrimary: '#462A00',
    primaryContainer: '#653E00',
    onPrimaryContainer: '#FFDDB7',
    secondary: '#DFC2A2',
    onSecondary: '#3F2D17',
    secondaryContainer: '#57432B',
    onSecondaryContainer: '#FCDEBC',
    tertiary: '#BACD9F',
    onTertiary: '#263514',
    tertiaryContainer: '#3C4C28',
    onTertiaryContainer: '#D6E9B9',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    background: '#18120C',
    onBackground: '#EEE0D4',
    surface: '#18120C',
    onSurface: '#EEE0D4',
    surfaceVariant: '#504539',
    onSurfaceVariant: '#D4C4B5',
    outline: '#9C8E80',
    outlineVariant: '#504539',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#EEE0D4',
    inverseOnSurface: '#362F27',
    inversePrimary: '#815512',
  },
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
      <PaperProvider theme={theme}>
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