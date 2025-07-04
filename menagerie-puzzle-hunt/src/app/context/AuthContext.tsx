'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated on page load
    const isAuth = localStorage.getItem('menageriePasswordPassed') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('menageriePasswordPassed', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('menageriePasswordPassed');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
