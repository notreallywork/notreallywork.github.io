'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null;
    if (stored === 'light' || stored === 'dark') setTheme(stored);
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('nrw-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  }

  return (
    <button
      onClick={toggle}
      className="text-left text-xs text-chrome hover:text-muted cursor-pointer w-full"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      $ theme [{theme}]
    </button>
  );
}
