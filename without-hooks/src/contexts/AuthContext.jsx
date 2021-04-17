import React, { createContext } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [ state, setState ] = React.useState({ isAuthenticated: false })

  const toggleAuth = () => {
    setState({ isAuthenticated: !state.isAuthenticated })
  }

  return (
    <AuthContext.Provider value={{ ...state, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}
