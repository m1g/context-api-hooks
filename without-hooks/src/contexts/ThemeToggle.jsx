import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'

export default function ThemeToggle() {
  const context = useContext(ThemeContext)
  const { toggleTheme } = context;

  return (
    <button onClick={toggleTheme}>Toggle the theme</button>
  )
}
