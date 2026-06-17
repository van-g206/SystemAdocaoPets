import { useParams, Link, useNavigate } from 'react-router';
import { mockPets } from '../data/pets';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Heart, MapPin, Calendar, Ruler, CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

export function PetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const pet = mockPets.find((p) => p.id === id);

  if (!pet) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Pet não encontrado</h1>
        <Link to="/pets">
          <Button className="bg-[#f4a30e] hover:bg-[#d89210] text-black">
            Voltar para Pets
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e4dcdc] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 text-black hover:bg-black/10"
        >
          <ArrowLeft className="mr-2 size-4" />
          Voltar
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative">
            <div className="sticky top-24">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-[500px] object-cover rounded-2xl border-4 border-black shadow-2xl"
              />
              <Button
                size="lg"
                className={`absolute top-4 right-4 rounded-full ${
                  isFavorite
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white/90 hover:bg-white text-gray-600'
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`size-6 ${isFavorite ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-4xl font-bold text-black">{pet.name}</h1>
                <Badge className="bg-[#f4a30e] text-black border-2 border-black text-lg px-4 py-2">
                  {pet.species === 'dog' ? '🐕 Cachorro' : '🐱 Gato'}
                </Badge>
              </div>
              <p className="text-xl text-gray-600">{pet.breed}</p>
              <div className="flex items-center text-gray-600 mt-2">
                <MapPin className="size-5 mr-2" />
                {pet.location}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 border-2 border-black">
                <div className="flex items-center gap-3">
                  <Calendar className="size-8 text-[#f4a30e]" />
                  <div>
                    <div className="text-sm text-gray-600">Idade</div>
                    <div className="font-bold text-lg">{pet.age} {pet.age === 1 ? 'ano' : 'anos'}</div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 border-2 border-black">
                <div className="flex items-center gap-3">
                  <Ruler className="size-8 text-[#f4a30e]" />
                  <div>
                    <div className="text-sm text-gray-600">Porte</div>
                    <div className="font-bold text-lg capitalize">{pet.size === 'small' ? 'Pequeno' : pet.size === 'medium' ? 'Médio' : 'Grande'}</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Description */}
            <Card className="p-6 border-2 border-black">
              <h2 className="text-2xl font-bold mb-3">Sobre {pet.name}</h2>
              <p className="text-gray-700 leading-relaxed">{pet.description}</p>
            </Card>

            {/* Personality */}
            <Card className="p-6 border-2 border-black">
              <h3 className="text-xl font-bold mb-3">Personalidade</h3>
              <div className="flex flex-wrap gap-2">
                {pet.personality.map((trait) => (
                  <Badge key={trait} className="bg-[#f4a30e] text-black text-sm px-3 py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Health Info */}
            <Card className="p-6 border-2 border-black">
              <h3 className="text-xl font-bold mb-4">Informações de Saúde</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Vacinado</span>
                  {pet.vaccinated ? (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle2 className="size-4 mr-1" />
                      Sim
                    </Badge>
                  ) : (
                    <Badge className="bg-red-500 text-white">
                      <XCircle className="size-4 mr-1" />
                      Não
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Castrado</span>
                  {pet.neutered ? (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle2 className="size-4 mr-1" />
                      Sim
                    </Badge>
                  ) : (
                    <Badge className="bg-red-500 text-white">
                      <XCircle className="size-4 mr-1" />
                      Não
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Estado de Saúde</span>
                  <Badge className="bg-blue-500 text-white">
                    {pet.healthStatus}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Adoption Fee */}
            <Card className="p-6 border-2 border-black bg-[#f4a30e]/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Taxa de Adoção</h3>
                  <p className="text-sm text-gray-600">Inclui vacinas e castração</p>
                </div>
                <div className="text-3xl font-bold text-[#754907]">
                  R$ {pet.adoptionFee}
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Button size="lg" className="w-full bg-[#754907] hover:bg-[#5a3606] text-white text-lg py-6">
                <Heart className="mr-2 size-5" />
                Quero Adotar {pet.name}!
              </Button>
              <Button size="lg" variant="outline" className="w-full border-2 border-black hover:bg-black/5 text-lg py-6">
                Agendar Visita
              </Button>
            </div>

            {/* Info Box */}
            <Card className="p-4 bg-blue-50 border-2 border-blue-300">
              <p className="text-sm text-blue-900">
                💡 <strong>Dica:</strong> Agende uma visita para conhecer {pet.name} pessoalmente antes de tomar sua decisão. Nossa equipe está aqui para ajudar!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
