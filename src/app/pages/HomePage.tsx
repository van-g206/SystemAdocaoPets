import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  Search,
  Shield,
  PawPrint,
  Home,
  Users,
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center px-4">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-slate-50" />

        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 size-96 bg-amber-300 rounded-full blur-3xl opacity-20" />

        <div className="absolute bottom-0 right-0 size-[30rem] bg-orange-300 rounded-full blur-3xl opacity-20" />

        <div className="absolute top-1/2 left-1/2 size-[20rem] bg-yellow-200 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/40 px-4 py-2 shadow-sm">
              <PawPrint className="size-4 text-amber-500" />

              <span className="text-sm font-medium text-slate-700">
                Plataforma de adoção responsável
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
              Encontre Seu
              <br />

              <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
                Novo Melhor Amigo
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Centenas de animais resgatados aguardam por uma família amorosa.
              Adote, transforme uma vida e ganhe um companheiro para sempre.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/pets">
                <Button
                  size="lg"
                  className="
                    h-14
                    px-8
                    rounded-full
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
                  Ver Pets Disponíveis

                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>

              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="
                    h-14
                    px-8
                    rounded-full
                    bg-white/70
                    backdrop-blur-md
                    border-white/40
                    hover:bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    active:scale-95
                  "
                >
                  Cadastre-se
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900">
              Números da Comunidade
            </h2>

            <p className="text-slate-600 mt-3">
              Histórias que já transformaram vidas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-md border-white/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Heart className="size-10 text-amber-500 mb-4" />

              <div className="text-5xl font-black text-slate-900">
                500+
              </div>

              <p className="text-slate-600 mt-2">
                Animais adotados
              </p>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-white/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Home className="size-10 text-amber-500 mb-4" />

              <div className="text-5xl font-black text-slate-900">
                350+
              </div>

              <p className="text-slate-600 mt-2">
                Famílias felizes
              </p>
            </Card>

            <Card className="bg-white/80 backdrop-blur-md border-white/40 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Users className="size-10 text-amber-500 mb-4" />

              <div className="text-5xl font-black text-slate-900">
                25+
              </div>

              <p className="text-slate-600 mt-2">
                ONGs parceiras
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900">
              Como Funciona
            </h2>

            <p className="text-slate-600 mt-3">
              Três passos simples para encontrar seu companheiro ideal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="
                rounded-3xl
                bg-white/80
                backdrop-blur-md
                border-white/40
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="size-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                <Search className="size-10 text-amber-500" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                1. Busque
              </h3>

              <p className="text-slate-600">
                Explore os animais disponíveis e utilize filtros para encontrar
                o pet ideal.
              </p>
            </Card>

            <Card
              className="
                rounded-3xl
                bg-white/80
                backdrop-blur-md
                border-white/40
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="size-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                <Heart className="size-10 text-amber-500" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                2. Conecte
              </h3>

              <p className="text-slate-600">
                Conheça a história do animal e entre em contato para iniciar o
                processo de adoção.
              </p>
            </Card>

            <Card
              className="
                rounded-3xl
                bg-white/80
                backdrop-blur-md
                border-white/40
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="size-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
                <Shield className="size-10 text-amber-500" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                3. Adote
              </h3>

              <p className="text-slate-600">
                Finalize uma adoção segura e acompanhe a adaptação do seu novo
                amigo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-[2rem] bg-gradient-to-r from-amber-500 to-orange-400 p-10 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Pronto para mudar uma vida?
            </h2>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Milhares de animais aguardam por uma família. Você pode ser a
              diferença que eles esperam.
            </p>

            <Link to="/pets">
              <Button
                size="lg"
                className="
                  h-14
                  px-10
                  rounded-full
                  bg-white
                  text-amber-600
                  hover:bg-white/90
                  shadow-lg
                  transition-all
                  duration-300
                  active:scale-95
                "
              >
                Começar Agora

                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
