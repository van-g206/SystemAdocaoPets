import { createContext, useContext, useState, ReactNode } from 'react';
import { Pet } from '../data/pets';

interface FavoritesContextType {
  favorites: Pet[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (pet: Pet) => void;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Pet[]>(() => {
    try {
      const saved = localStorage.getItem('petadopt_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const isFavorite = (id: string) => favorites.some((p) => p.id === id);

  const toggleFavorite = (pet: Pet) => {
    setFavorites((prev) => {
      const next = isFavorite(pet.id)
        ? prev.filter((p) => p.id !== pet.id)
        : [...prev, pet];
      localStorage.setItem('petadopt_favorites', JSON.stringify(next));
      return next;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used inside FavoritesProvider');
  return ctx;
}
