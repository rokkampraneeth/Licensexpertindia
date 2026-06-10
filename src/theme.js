/**
 * theme.js - Shared theme management for LicenseXpertIndia
 */

export const initTheme = (toggleSelector = '#checkbox') => {
  const toggleSwitch = document.querySelector(toggleSelector);
  const currentTheme = localStorage.getItem('theme') || 'dark';

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (toggleSwitch) {
      toggleSwitch.checked = (theme === 'light');
    }
  };

  // Initial set
  setTheme(currentTheme);

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', (e) => {
      setTheme(e.target.checked ? 'light' : 'dark');
    });
  }
};
