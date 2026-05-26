import { useParams, Link, useNavigate } from 'react-router';
import { useState } from 'react';
import { usePets } from '../context/PetsContext';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Heart, MapPin, Calendar, Ruler, CheckCircle2, XCircle, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

export function PetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pets } = usePets();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isLoggedIn } = useAuth();
  const [adoptionSent, setAdoptionSent] = useState(false);

  const pet = pets.find((p) => p.id === id);

  if (!pet) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Pet não encontrado</h1>
        <Link to="/pets"><Button className="bg-[#f4a30e] text-black">Voltar para Pets</Button></Link>
      </div>
    );
  }

  const handleFavorite = () => {
    if (!isLoggedIn) {
      toast.error('Faça login para salvar favoritos!');
      navigate('/login');
      return;
    }
    const wasAlready = isFavorite(pet.id);
    toggleFavorite(pet);
    toast.success(wasAlready ? `${pet.name} removido dos favoritos` : `${pet.name} adicionado aos favoritos! 💛`);
  };

  const handleAdotar = () => {
    if (!isLoggedIn) {
      toast.error('Faça login para solicitar adoção!');
      navigate('/login');
      return;
    }
    setAdoptionSent(true);
    toast.success(`Solicitação de adoção de ${pet.name} enviada! 🐾`, {
      description: 'Nossa equipe entrará em contato em até 24h.',
    });
  };

  const handleVisita = () => {
    if (!isLoggedIn) {
      toast.error('Faça login para agendar uma visita!');
      navigate('/login');
      return;
    }
    toast.success(`Visita com ${pet.name} agendada! 📅`, {
      description: 'Confira seu e-mail para os detalhes.',
    });
  };

  const fav = isLoggedIn && isFavorite(pet.id);

  return (
    <div className="min-h-screen bg-[#e4dcdc] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 text-black hover:bg-black/10">
          <ArrowLeft className="mr-2 size-4" />Voltar
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Foto */}
          <div className="relative">
            <div className="sticky top-24">
              <img src={pet.image} alt={pet.name} className="w-full h-[500px] object-cover rounded-2xl border-4 border-black shadow-2xl" />
              <button
                className={`absolute top-4 right-4 rounded-full p-3 border-2 border-black transition-colors ${
                  fav ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-white'
                }`}
                onClick={handleFavorite}
              >
                <Heart className={`size-6 ${fav ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Detalhes */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-4xl font-bold text-black">{pet.name}</h1>
                <Badge className="bg-[#f4a30e] text-black border-2 border-black text-lg px-4 py-2">
                  {pet.species === 'dog' ? '🐕 Cachorro' : '🐱 Gato'}
                </Badge>
              </div>
              <p className="text-xl text-gray-600">{pet.breed}</p>
              <div className="flex items-center text-gray-600 mt-2">
                <MapPin className="size-5 mr-2" />{pet.location}
              </div>
            </div>

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
                    <div className="font-bold text-lg">
                      {pet.size === 'small' ? 'Pequeno' : pet.size === 'medium' ? 'Médio' : 'Grande'}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 border-2 border-black">
              <h2 className="text-2xl font-bold mb-3">Sobre {pet.name}</h2>
              <p className="text-gray-700 leading-relaxed">{pet.description}</p>
            </Card>

            <Card className="p-6 border-2 border-black">
              <h3 className="text-xl font-bold mb-3">Personalidade</h3>
              <div className="flex flex-wrap gap-2">
                {pet.personality.map((trait) => (
                  <Badge key={trait} className="bg-[#f4a30e] text-black text-sm px-3 py-1">{trait}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-black">
              <h3 className="text-xl font-bold mb-4">Informações de Saúde</h3>
              <div className="space-y-3">
                {[
                  { label: 'Vacinado', val: pet.vaccinated },
                  { label: 'Castrado',  val: pet.neutered  },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-gray-700">{label}</span>
                    <Badge className={val ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}>
                      {val ? <CheckCircle2 className="size-4 mr-1 inline" /> : <XCircle className="size-4 mr-1 inline" />}
                      {val ? 'Sim' : 'Não'}
                    </Badge>
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Estado de Saúde</span>
                  <Badge className="bg-blue-500 text-white">{pet.healthStatus}</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-black bg-[#f4a30e]/20">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Taxa de Adoção</h3>
                  <p className="text-sm text-gray-600">Inclui vacinas e castração</p>
                </div>
                <div className="text-3xl font-bold text-[#754907]">
                  {pet.adoptionFee === 0 ? 'Gratuito' : `R$ ${pet.adoptionFee}`}
                </div>
              </div>
            </Card>

            {/* Botões de ação */}
            <div className="space-y-3 pt-4">
              {adoptionSent ? (
                <Card className="p-4 bg-green-50 border-2 border-green-500 text-center">
                  <p className="font-bold text-green-800">✅ Solicitação enviada com sucesso!</p>
                  <p className="text-sm text-green-700 mt-1">Nossa equipe entrará em contato em até 24h.</p>
                </Card>
              ) : (
                <Button size="lg" onClick={handleAdotar} className="w-full bg-[#754907] hover:bg-[#5a3606] text-white text-lg py-6">
                  <Heart className="mr-2 size-5" />
                  Quero Adotar {pet.name}!
                </Button>
              )}

              <Button size="lg" variant="outline" onClick={handleVisita} className="w-full border-2 border-black hover:bg-black/5 text-lg py-6">
                <Phone className="mr-2 size-5" />
                Agendar Visita
              </Button>

              <Button size="lg" variant="outline" onClick={handleFavorite}
                className={`w-full border-2 border-black text-lg py-6 ${fav ? 'bg-red-50 hover:bg-red-100' : 'hover:bg-black/5'}`}>
                <Heart className={`mr-2 size-5 ${fav ? 'fill-red-500 text-red-500' : ''}`} />
                {fav ? 'Remover dos Favoritos' : 'Salvar nos Favoritos'}
              </Button>
            </div>

            {!isLoggedIn && (
              <Card className="p-4 bg-yellow-50 border-2 border-yellow-400">
                <p className="text-sm text-yellow-900">
                  💡 <strong>Faça login</strong> para adotar, agendar visitas e salvar favoritos.{' '}
                  <Link to="/login" className="underline font-semibold text-[#754907]">Entrar agora</Link>
                </p>
              </Card>
            )}

            <Card className="p-4 bg-blue-50 border-2 border-blue-300">
              <div className="flex gap-4 text-sm text-blue-900">
                <div className="flex items-center gap-1"><Mail className="size-4" /> contato@petadopt.com.br</div>
                <div className="flex items-center gap-1"><Phone className="size-4" /> (11) 99999-9999</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
