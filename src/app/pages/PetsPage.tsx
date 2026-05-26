import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router';
import { usePets } from '../context/PetsContext';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { Heart, Search, MapPin, Plus } from 'lucide-react';
import { toast } from 'sonner';

export function PetsPage() {
  const { pets }                        = usePets();
  const { isFavorite, toggleFavorite }  = useFavorites();
  const { isLoggedIn }                  = useAuth();
  const navigate                        = useNavigate();

  const [searchTerm,    setSearchTerm]    = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [sizeFilter,    setSizeFilter]    = useState('all');

  const filteredPets = useMemo(() => pets.filter((pet) => {
    const matchesSearch  = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = speciesFilter === 'all' || pet.species === speciesFilter;
    const matchesSize    = sizeFilter    === 'all' || pet.size    === sizeFilter;
    return matchesSearch && matchesSpecies && matchesSize;
  }), [pets, searchTerm, speciesFilter, sizeFilter]);

  const handleFavorite = (e: React.MouseEvent, pet: (typeof pets)[0]) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) {
      toast.error('Faça login para salvar favoritos!', {
        action: { label: 'Entrar', onClick: () => navigate('/login') },
      });
      return;
    }
    const wasAlready = isFavorite(pet.id);
    toggleFavorite(pet);
    if (!wasAlready) {
      toast.success(`${pet.name} adicionado aos favoritos! 💛`, {
        action: { label: 'Ver Favoritos', onClick: () => navigate('/favorites') },
      });
    } else {
      toast.info(`${pet.name} removido dos favoritos`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Pets Disponíveis</h1>
        <p className="text-xl text-gray-600 mb-4">
          {filteredPets.length} {filteredPets.length === 1 ? 'pet encontrado' : 'pets encontrados'}
        </p>
        <Link to="/add-pet">
          <Button className="bg-[#f4a30e] hover:bg-[#d89210] text-black border-2 border-black">
            <Plus className="mr-2 size-5" /> Cadastrar Novo Pet
          </Button>
        </Link>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl border-2 border-black p-6 mb-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <Input placeholder="Buscar por nome ou raça..."
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-2 border-gray-300" />
          </div>
          <Select value={speciesFilter} onValueChange={setSpeciesFilter}>
            <SelectTrigger className="border-2 border-gray-300"><SelectValue placeholder="Espécie" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Espécies</SelectItem>
              <SelectItem value="dog">🐕 Cachorro</SelectItem>
              <SelectItem value="cat">🐱 Gato</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sizeFilter} onValueChange={setSizeFilter}>
            <SelectTrigger className="border-2 border-gray-300"><SelectValue placeholder="Porte" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Portes</SelectItem>
              <SelectItem value="small">Pequeno</SelectItem>
              <SelectItem value="medium">Médio</SelectItem>
              <SelectItem value="large">Grande</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid */}
      {filteredPets.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500 mb-4">Nenhum pet encontrado</p>
          <Button onClick={() => { setSearchTerm(''); setSpeciesFilter('all'); setSizeFilter('all'); }}
            className="bg-[#f4a30e] hover:bg-[#d89210] text-black">
            Limpar Filtros
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPets.map((pet) => (
            <Card key={pet.id}
              className="overflow-hidden border-2 border-black shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative">
                <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover" />
                <button
                  className={`absolute top-2 right-2 rounded-full p-2 border-2 border-black transition-colors ${
                    isFavorite(pet.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/90 text-gray-600 hover:bg-white'
                  }`}
                  onClick={(e) => handleFavorite(e, pet)}
                  title={isFavorite(pet.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                >
                  <Heart className={`size-5 ${isFavorite(pet.id) ? 'fill-current' : ''}`} />
                </button>
                <Badge className="absolute top-2 left-2 bg-[#f4a30e] text-black border-black">
                  {pet.species === 'dog' ? '🐕 Cachorro' : '🐱 Gato'}
                </Badge>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-black">{pet.name}</h3>
                    <p className="text-sm text-gray-600">{pet.breed}</p>
                  </div>
                  <Badge variant="outline" className="border-black shrink-0">
                    {pet.age} {pet.age === 1 ? 'ano' : 'anos'}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="size-4 mr-1 shrink-0" />{pet.location}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {pet.personality.slice(0, 3).map((trait) => (
                    <Badge key={trait} variant="secondary" className="text-xs">{trait}</Badge>
                  ))}
                </div>
                <Link to={`/pets/${pet.id}`}>
                  <Button className="w-full bg-[#754907] hover:bg-[#5a3606] text-white">
                    Ver Detalhes
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
