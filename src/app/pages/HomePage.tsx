import { Link } from 'react-router';
import { ArrowRight, Heart, Search, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useAuth } from '../context/AuthContext';

export function HomePage() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#f4a30e] to-[#e4dcdc] py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-black">
              {isLoggedIn
                ? <>Olá, {user?.name.split(' ')[0]}! 🐾<br />Qual será o próximo?</>
                : <>Encontre Seu Novo<br />Melhor Amigo</>}
            </h1>
            <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto">
              Centenas de animais resgatados esperando por um lar amoroso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/pets">
                <Button size="lg" className="bg-[#754907] hover:bg-[#5a3606] text-white px-8 py-6 text-lg">
                  Ver Pets Disponíveis <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              {!isLoggedIn && (
                <Link to="/login">
                  <Button size="lg" variant="outline"
                    className="border-2 border-black bg-white hover:bg-black/5 px-8 py-6 text-lg">
                    Cadastre-se Grátis
                  </Button>
                </Link>
              )}
              {isLoggedIn && (
                <Link to="/favorites">
                  <Button size="lg" variant="outline"
                    className="border-2 border-black bg-white hover:bg-black/5 px-8 py-6 text-lg">
                    <Heart className="mr-2 size-5" /> Meus Favoritos
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="absolute top-10 left-10 opacity-20 rotate-12 text-6xl hidden md:block">🐾</div>
        <div className="absolute bottom-10 right-10 opacity-20 -rotate-12 text-6xl hidden md:block">🐾</div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Search, step: '1. Busque',   desc: 'Navegue pelos pets e filtre por espécie, idade, tamanho e localização.' },
              { icon: Heart,  step: '2. Conecte',  desc: 'Encontrou seu match? Entre em contato para agendar uma visita.' },
              { icon: Shield, step: '3. Adote',    desc: 'Processo seguro com acompanhamento pós-adoção gratuito.' },
            ].map(({ icon: Icon, step, desc }) => (
              <Card key={step} className="p-6 text-center border-2 border-black shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#f4a30e] size-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="size-8 text-black" />
                </div>
                <h3 className="font-bold text-xl mb-2">{step}</h3>
                <p className="text-gray-600">{desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-[#f4a30e]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Adoções Realizadas' },
              { num: '150+', label: 'Pets Disponíveis'   },
              { num: '98%',  label: 'Satisfação'         },
              { num: '24/7', label: 'Suporte'            },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-4xl md:text-5xl font-bold text-black">{num}</div>
                <div className="text-lg text-black/80 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Pronto Para Mudar uma Vida?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Milhares de animais aguardam por uma família. Você pode ser a diferença.
          </p>
          <Link to="/pets">
            <Button size="lg" className="bg-[#754907] hover:bg-[#5a3606] text-white px-12 py-6 text-lg">
              Comece Agora <ArrowRight className="ml-2 size-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
