export interface Pet {
  id: string;
  name: string;
  species: 'dog' | 'cat';
  breed: string;
  age: number;
  gender: 'male' | 'female';
  size: 'small' | 'medium' | 'large';
  description: string;
  personality: string[];
  healthStatus: string;
  vaccinated: boolean;
  neutered: boolean;
  image: string;
  location: string;
  adoptionFee: number;
}

export const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'dog',
    breed: 'Labrador',
    age: 2,
    gender: 'female',
    size: 'large',
    description: 'Luna é uma cadela doce e enérgica que adora brincar e fazer novos amigos.',
    personality: ['Amigável', 'Energética', 'Leal'],
    healthStatus: 'Excelente',
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
    location: 'São Paulo, SP',
    adoptionFee: 150
  },
  {
    id: '2',
    name: 'Max',
    species: 'dog',
    breed: 'Golden Retriever',
    age: 3,
    gender: 'male',
    size: 'large',
    description: 'Max é um companheiro leal e adorável, perfeito para famílias.',
    personality: ['Calmo', 'Afetuoso', 'Obediente'],
    healthStatus: 'Excelente',
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=400&h=400&fit=crop',
    location: 'Rio de Janeiro, RJ',
    adoptionFee: 180
  },
  {
    id: '3',
    name: 'Mia',
    species: 'cat',
    breed: 'Siamês',
    age: 1,
    gender: 'female',
    size: 'small',
    description: 'Mia é uma gatinha curiosa e brincalhona que adora carinho.',
    personality: ['Curiosa', 'Independente', 'Carinhosa'],
    healthStatus: 'Excelente',
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop',
    location: 'Belo Horizonte, MG',
    adoptionFee: 100
  },
  {
    id: '4',
    name: 'Thor',
    species: 'dog',
    breed: 'Pitbull',
    age: 4,
    gender: 'male',
    size: 'large',
    description: 'Thor é um cachorro forte mas muito gentil e protetor.',
    personality: ['Protetor', 'Gentil', 'Corajoso'],
    healthStatus: 'Bom',
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop',
    location: 'Curitiba, PR',
    adoptionFee: 120
  },
  {
    id: '5',
    name: 'Nina',
    species: 'cat',
    breed: 'Persa',
    age: 2,
    gender: 'female',
    size: 'medium',
    description: 'Nina é uma gata elegante e tranquila que gosta de ambientes calmos.',
    personality: ['Tranquila', 'Elegante', 'Carinhosa'],
    healthStatus: 'Excelente',
    vaccinated: true,
    neutered: false,
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&h=400&fit=crop',
    location: 'Porto Alegre, RS',
    adoptionFee: 130
  },
  {
    id: '6',
    name: 'Bob',
    species: 'dog',
    breed: 'Beagle',
    age: 1,
    gender: 'male',
    size: 'medium',
    description: 'Bob é um filhote super animado e cheio de energia.',
    personality: ['Brincalhão', 'Curioso', 'Sociável'],
    healthStatus: 'Excelente',
    vaccinated: true,
    neutered: false,
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400&h=400&fit=crop',
    location: 'Salvador, BA',
    adoptionFee: 140
  },
  {
    id: '7',
    name: 'Mel',
    species: 'cat',
    breed: 'Vira-lata',
    age: 3,
    gender: 'female',
    size: 'small',
    description: 'Mel é uma gatinha doce que foi resgatada das ruas.',
    personality: ['Doce', 'Tímida', 'Adaptável'],
    healthStatus: 'Bom',
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop',
    location: 'Fortaleza, CE',
    adoptionFee: 80
  },
  {
    id: '8',
    name: 'Rex',
    species: 'dog',
    breed: 'Pastor Alemão',
    age: 5,
    gender: 'male',
    size: 'large',
    description: 'Rex é um cão inteligente e leal, ideal para guarda e companhia.',
    personality: ['Inteligente', 'Protetor', 'Leal'],
    healthStatus: 'Excelente',
    vaccinated: true,
    neutered: true,
    image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=400&h=400&fit=crop',
    location: 'Brasília, DF',
    adoptionFee: 200
  }
];
