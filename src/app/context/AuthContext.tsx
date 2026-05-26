import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isOnline: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('petadopt_user');
      return saved ? JSON.parse(saved) : null;
    } catch { return null; }
  });
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const on  = () => setIsOnline(true);
    const off = () => setIsOnline(false);
    window.addEventListener('online',  on);
    window.addEventListener('offline', off);
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); };
  }, []);

  const login = async (email: string, _password: string): Promise<boolean> => {
    if (!navigator.onLine) return false;
    await new Promise((r) => setTimeout(r, 900));
    const stored = localStorage.getItem(`petadopt_reg_${email}`);
    const loggedUser: User = stored
      ? JSON.parse(stored)
      : { id: Date.now().toString(), name: email.split('@')[0], email };
    localStorage.setItem('petadopt_user', JSON.stringify(loggedUser));
    setUser(loggedUser);
    return true;
  };

  const register = async (name: string, email: string, phone: string, _password: string): Promise<boolean> => {
    if (!navigator.onLine) return false;
    await new Promise((r) => setTimeout(r, 900));
    const newUser: User = { id: Date.now().toString(), name, email, phone };
    localStorage.setItem(`petadopt_reg_${email}`, JSON.stringify(newUser));
    localStorage.setItem('petadopt_user', JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('petadopt_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, isOnline, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
