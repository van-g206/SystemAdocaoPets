import { Link } from 'react-router';
import { Heart, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useFavorites } from '../context/FavoritesContext';

export function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-2xl">
        <div className="mb-8">
          <Heart className="size-24 mx-auto text-gray-300 mb-4" />
          <h1 className="text-4xl font-bold text-black mb-4">Seus Favoritos</h1>
          <p className="text-xl text-gray-600">
            Você ainda não tem pets favoritos. Navegue pela nossa lista e adicione seus preferidos!
          </p>
        </div>

        <Link to="/pets">
          <Button size="lg" className="bg-[#754907] hover:bg-[#5a3606] text-white px-8 py-6 text-lg">
            Explorar Pets
          </Button>
        </Link>

        <div className="mt-12 p-6 bg-[#f4a30e]/20 rounded-xl border-2 border-black">
          <h3 className="font-bold text-lg mb-2">💡 Dica</h3>
          <p className="text-gray-700">
            Clique no ícone de coração em qualquer pet para salvá-lo como favorito e acessar rapidamente depois!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-8">
        <Heart className="size-12 mx-auto text-red-500 fill-current mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">Seus Favoritos</h1>
        <p className="text-xl text-gray-600">
          {favorites.length} {favorites.length === 1 ? 'pet salvo' : 'pets salvos'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favorites.map((pet) => (
          <Card key={pet.id} className="overflow-hidden border-2 border-black shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 rounded-full bg-red-500 text-white hover:bg-red-600"
                onClick={() => toggleFavorite(pet)}
              >
                <Heart className="fill-current" />
              </Button>
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

              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin className="size-4 mr-1" />
                {pet.location}
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
    </div>
  );
}
