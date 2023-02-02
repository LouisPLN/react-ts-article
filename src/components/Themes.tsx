import React from 'react'

export const Themes = () => {
const [checked, setChecked] = React.useState(() => {
    return localStorage.getItem('checked') === 'true'
  });

  const handleToggle = () => {
    setChecked(!checked);
    localStorage.setItem('checked', `${!checked}`);
  };

  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem("theme", theme === 'dark' ? 'light' : 'dark');
  };

  const localThemes = localStorage.getItem("theme") || theme;

  React.useEffect(() => {
    var html = document.querySelector<HTMLElement>("html")
        html?.setAttribute('data-theme', localThemes);
  }, [localThemes]);
  return (
    <input onClick={toggleTheme} type="checkbox" className="toggle mx-4" checked={checked} onChange={handleToggle} />
  );
}

