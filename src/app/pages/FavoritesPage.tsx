import { Link } from 'react-router';
import { Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

export function FavoritesPage() {
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
