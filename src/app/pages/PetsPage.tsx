import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePets } from '../context/PetsContext';
import { useFavorites } from '../context/FavoritesContext';

import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';

import {
  Heart,
  Search,
  MapPin,
  Plus,
  ArrowRight,
  PawPrint,
} from 'lucide-react';

export function PetsPage() {
  const { pets } = usePets();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [searchTerm, setSearchTerm] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState<string>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');

  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesSearch =
        pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.breed.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpecies =
        speciesFilter === 'all' || pet.species === speciesFilter;

      const matchesSize =
        sizeFilter === 'all' || pet.size === sizeFilter;

      return matchesSearch && matchesSpecies && matchesSize;
    });
  }, [pets, searchTerm, speciesFilter, sizeFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-slate-50">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-10">
          <Badge className="rounded-full bg-amber-100 text-amber-700 border-0 px-4 py-2 mb-5">
            🧡 Adote com Amor
          </Badge>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Pets Disponíveis
          </h1>

          <p className="text-lg text-slate-600 mb-6">
            {filteredPets.length}{' '}
            {filteredPets.length === 1
              ? 'pet encontrado'
              : 'pets encontrados'}
          </p>

          <Link to="/add-pet">
            <Button
              className="
                rounded-full
                h-12
                px-6
                bg-amber-500
                hover:bg-amber-600
                text-white
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
                active:scale-95
              "
            >
              <Plus className="mr-2 size-5" />
              Cadastrar Novo Pet
            </Button>
          </Link>
        </div>

        {/* FILTROS */}
        <Card
          className="
            mb-10
            rounded-3xl
            border-white/40
            bg-white/80
            backdrop-blur-md
            p-6
            shadow-sm
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* BUSCA */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />

                <Input
                  placeholder="Buscar por nome ou raça..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                    pl-12
                    h-12
                    rounded-xl
                    border-slate-200
                    focus:ring-amber-300
                  "
                />
              </div>
            </div>

            {/* ESPÉCIE */}
            <Select
              value={speciesFilter}
              onValueChange={setSpeciesFilter}
            >
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Espécie" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">
                  Todas as Espécies
                </SelectItem>

                <SelectItem value="dog">
                  Cachorro
                </SelectItem>

                <SelectItem value="cat">
                  Gato
                </SelectItem>
              </SelectContent>
            </Select>

            {/* PORTE */}
            <Select
              value={sizeFilter}
              onValueChange={setSizeFilter}
            >
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Porte" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="all">
                  Todos os Portes
                </SelectItem>

                <SelectItem value="small">
                  Pequeno
                </SelectItem>

                <SelectItem value="medium">
                  Médio
                </SelectItem>

                <SelectItem value="large">
                  Grande
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* EMPTY STATE */}
        {filteredPets.length === 0 ? (
          <div className="py-24 text-center">
            <div className="flex justify-center mb-6">
              <div className="size-24 rounded-full bg-amber-100 flex items-center justify-center">
                <PawPrint className="size-12 text-amber-500" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Nenhum pet encontrado
            </h2>

            <p className="text-slate-600 mb-8">
              Tente ajustar os filtros para encontrar mais opções.
            </p>

            <Button
              onClick={() => {
                setSearchTerm('');
                setSpeciesFilter('all');
                setSizeFilter('all');
              }}
              className="
                rounded-full
                bg-amber-500
                hover:bg-amber-600
                text-white
              "
            >
              Limpar Filtros
            </Button>
          </div>
        ) : (
          /* GRID */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPets.map((pet) => (
              <Card
                key={pet.id}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border-white/40
                  bg-white/90
                  backdrop-blur-md
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* STATUS */}
                  <Badge
                    className="
                      absolute
                      top-4
                      left-4
                      rounded-full
                      bg-emerald-100
                      text-emerald-700
                      border-0
                    "
                  >
                    Disponível para adoção
                  </Badge>

                  {/* FAVORITO */}
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => toggleFavorite(pet)}
                    className={`
                      absolute
                      top-4
                      right-4
                      rounded-full
                      bg-white/80
                      backdrop-blur-md
                      hover:scale-110
                      transition-all

                      ${
                        isFavorite(pet.id)
                          ? 'text-red-500'
                          : 'text-slate-600'
                      }
                    `}
                  >
                    <Heart
                      className={
                        isFavorite(pet.id)
                          ? 'fill-current'
                          : ''
                      }
                    />
                  </Button>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {pet.name}
                    </h3>

                    <p className="text-slate-500">
                      {pet.breed}
                    </p>
                  </div>

                  <div className="flex items-center text-slate-500 mb-4">
                    <MapPin className="size-4 mr-2" />
                    {pet.location}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <Badge
                      variant="secondary"
                      className="rounded-full"
                    >
                      {pet.age}{' '}
                      {pet.age === 1 ? 'ano' : 'anos'}
                    </Badge>

                    <Badge
                      variant="secondary"
                      className="rounded-full"
                    >
                      {pet.size === 'small'
                        ? 'Pequeno'
                        : pet.size === 'medium'
                        ? 'Médio'
                        : 'Grande'}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pet.personality
                      .slice(0, 3)
                      .map((trait) => (
                        <Badge
                          key={trait}
                          className="
                            rounded-full
                            bg-amber-100
                            text-amber-700
                            border-0
                          "
                        >
                          {trait}
                        </Badge>
                      ))}
                  </div>

                  <Link to={`/pets/${pet.id}`}>
                    <Button
                      className="
                        w-full
                        rounded-full
                        bg-amber-500
                        hover:bg-amber-600
                        text-white
                        h-12
                        transition-all
                        duration-300
                        active:scale-95
                      "
                    >
                      Conhecer

                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
