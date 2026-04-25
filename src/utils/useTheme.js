import { useState, useEffect } from 'react';
import { setTheme } from './themes';

export function useTheme() {
  const [theme, setThemeState] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'theme-dark';
    const themeValue = savedTheme === 'theme-dark' ? 'dark' : 'light';
    setThemeState(themeValue);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'theme-light' : 'theme-dark';
    setTheme(newTheme);
    setThemeState(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
}
