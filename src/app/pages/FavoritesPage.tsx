import { Link, useNavigate } from 'react-router';
import { Heart, MapPin, Trash2, LogIn } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';

export function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // Não logado: pede para fazer login
  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-md">
        <LogIn className="size-20 mx-auto mb-4 text-[#f4a30e]" />
        <h1 className="text-3xl font-bold text-black mb-3">Seus Favoritos</h1>
        <p className="text-gray-600 mb-8">
          Faça login para ver e salvar seus pets favoritos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/login">
            <Button size="lg" className="bg-[#754907] hover:bg-[#5a3606] text-white px-8">
              Entrar / Cadastrar
            </Button>
          </Link>
          <Link to="/pets">
            <Button size="lg" variant="outline" className="border-2 border-black px-8">
              Ver Pets
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleRemove = (pet: typeof favorites[0]) => {
    toggleFavorite(pet);
    toast.success(`${pet.name} removido dos favoritos`);
  };

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
        <Heart className="size-24 mx-auto text-gray-300 mb-4" />
        <h1 className="text-4xl font-bold text-black mb-4">Seus Favoritos</h1>
        <p className="text-xl text-gray-600 mb-8">
          Você ainda não salvou nenhum pet. Navegue pela lista e clique no ❤️ para salvar!
        </p>
        <Link to="/pets">
          <Button size="lg" className="bg-[#754907] hover:bg-[#5a3606] text-white px-8 py-6 text-lg">
            Explorar Pets
          </Button>
        </Link>
        <div className="mt-10 p-6 bg-[#f4a30e]/20 rounded-xl border-2 border-black">
          <h3 className="font-bold text-lg mb-2">💡 Como favoritar</h3>
          <p className="text-gray-700">
            Clique no ❤️ no card do pet ou na página de detalhes para salvá-lo aqui.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Seus Favoritos</h1>
        <p className="text-xl text-gray-600">
          {favorites.length} {favorites.length === 1 ? 'pet salvo' : 'pets salvos'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((pet) => (
          <Card key={pet.id}
            className="overflow-hidden border-2 border-black shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative">
              <img src={pet.image} alt={pet.name} className="w-full h-64 object-cover" />
              <button
                className="absolute top-2 right-2 rounded-full p-2 bg-red-500 text-white border-2 border-black hover:bg-red-600 transition-colors"
                onClick={() => handleRemove(pet)}
                title="Remover dos favoritos"
              >
                <Heart className="size-5 fill-current" />
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
                <Badge variant="outline" className="border-black">
                  {pet.age} {pet.age === 1 ? 'ano' : 'anos'}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="size-4 mr-1" />{pet.location}
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {pet.personality.slice(0, 3).map((trait) => (
                  <Badge key={trait} variant="secondary" className="text-xs">{trait}</Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Link to={`/pets/${pet.id}`} className="flex-1">
                  <Button className="w-full bg-[#754907] hover:bg-[#5a3606] text-white">
                    Ver Detalhes
                  </Button>
                </Link>
                <Button variant="outline" size="icon"
                  className="border-2 border-black hover:bg-red-50"
                  onClick={() => handleRemove(pet)} title="Remover">
                  <Trash2 className="size-4 text-red-500" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
