// components/VideosNavbar.tsx

import React from 'react';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const VideosNavbar: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className="w-full h-20 mx-auto px-5 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      {/* ... your navbar content here ... */}
    </nav>
  );
};

export default VideosNavbar;
