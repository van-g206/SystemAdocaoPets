import { createContext, useContext, useState, ReactNode } from 'react';
import { Pet, mockPets } from '../data/pets';

interface PetsContextType {
  pets: Pet[];
  addPet: (pet: Omit<Pet, 'id'> & { image?: string }) => void;
}

const PetsContext = createContext<PetsContextType | null>(null);

export function PetsProvider({ children }: { children: ReactNode }) {
  const [pets, setPets] = useState<Pet[]>(() => {
    try {
      const saved = localStorage.getItem('petadopt_extra_pets');
      const extra: Pet[] = saved ? JSON.parse(saved) : [];
      return [...mockPets, ...extra];
    } catch { return mockPets; }
  });

  const addPet = (data: Omit<Pet, 'id'> & { image?: string }) => {
    const newPet: Pet = {
      id: `user-${Date.now()}`,
      name: data.name,
      species: data.species,
      breed: data.breed || 'SRD',
      age: Number(data.age) || 1,
      gender: data.gender,
      size: data.size,
      description: data.description,
      personality: typeof data.personality === 'string'
        ? (data.personality as string).split(',').map((s: string) => s.trim()).filter(Boolean)
        : data.personality || [],
      healthStatus: data.healthStatus || 'Bom',
      vaccinated: !!data.vaccinated,
      neutered: !!data.neutered,
      image: data.image || 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      location: data.location,
      adoptionFee: Number(data.adoptionFee) || 0,
    };
    setPets((prev) => {
      const next = [newPet, ...prev];
      // Salva só os extras (os mockPets já estão no código)
      const extras = next.filter((p) => p.id.startsWith('user-'));
      localStorage.setItem('petadopt_extra_pets', JSON.stringify(extras));
      return next;
    });
  };

  return (
    <PetsContext.Provider value={{ pets, addPet }}>
      {children}
    </PetsContext.Provider>
  );
}

export function usePets() {
  const ctx = useContext(PetsContext);
  if (!ctx) throw new Error('usePets must be used inside PetsProvider');
  return ctx;
}
