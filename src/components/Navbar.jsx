import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'

export default function Navbar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;  
        const theme = isLightTheme ? light : dark;

        return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
          <h1>Context App</h1>
          <div onClick={toggleAuth}>
            { isAuthenticated ? 'Logged In' : 'Logged Out' }
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        )
      }}
    </ThemeContext.Consumer>
  );
}
