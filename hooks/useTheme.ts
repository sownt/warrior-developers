import { useEffect, useState } from 'react';

export function useTheme() {
  const [colorScheme, setState] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const theme = window.localStorage.theme;
        return theme;
      }
    } catch (error) {
      return 'light';
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (colorScheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', colorScheme);
  }, [colorScheme]);

  const toggleMode = () => {
    setState(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return { colorScheme, toggleMode };
}
