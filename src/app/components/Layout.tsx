import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Heart,
  Home,
  User,
  Menu,
  PawPrint,
  Plus,
} from 'lucide-react';

import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { NotificationToggle } from './NotificationPrompt';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    {
      to: '/',
      label: 'Início',
      icon: Home,
    },
    {
      to: '/pets',
      label: 'Adotar',
      icon: PawPrint,
    },
    {
      to: '/add-pet',
      label: 'Cadastrar',
      icon: Plus,
    },
    {
      to: '/favorites',
      label: 'Favoritos',
      icon: Heart,
    },
    {
      to: '/login',
      label: 'Entrar',
      icon: User,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center size-11 rounded-2xl bg-amber-100 shadow-sm">
                <PawPrint className="size-6 text-amber-500" />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-2xl font-black bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
                  PetAdopt
                </h1>

                <p className="text-xs text-slate-500">
                  Conectando animais e famílias
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <Button
                    variant="ghost"
                    className={`
                      h-12
                      rounded-full
                      px-5
                      transition-all
                      duration-300
                      active:scale-95
                      ${
                        isActive(link.to)
                          ? 'bg-amber-500 text-white shadow-lg hover:bg-amber-500'
                          : 'text-slate-700 hover:bg-amber-100 hover:-translate-y-0.5'
                      }
                    `}
                  >
                    <link.icon className="size-4 mr-2" />
                    {link.label}
                  </Button>
                </Link>
              ))}

              <NotificationToggle />
            </nav>

            {/* MOBILE */}
            <div className="flex items-center gap-2 md:hidden">
              <NotificationToggle />

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl text-slate-700 hover:bg-amber-100"
                  >
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="bg-white/95 backdrop-blur-xl border-l border-white/30"
                >
                  {/* TOPO */}
                  <div className="flex flex-col items-center py-6 border-b">
                    <div className="size-16 rounded-full bg-amber-100 flex items-center justify-center">
                      <PawPrint className="size-8 text-amber-500" />
                    </div>

                    <h2 className="font-bold text-lg mt-4">
                      PetAdopt
                    </h2>

                    <p className="text-sm text-slate-500">
                      Encontre seu novo melhor amigo
                    </p>
                  </div>

                  {/* LINKS */}
                  <nav className="flex flex-col gap-3 mt-6">
                    {navLinks.map((link) => (
                      <Link key={link.to} to={link.to}>
                        <Button
                          variant="ghost"
                          className={`
                            w-full
                            h-14
                            justify-start
                            rounded-2xl
                            transition-all
                            duration-300
                            active:scale-95
                            ${
                              isActive(link.to)
                                ? 'bg-amber-500 text-white shadow-lg'
                                : 'bg-slate-50 text-slate-700 hover:bg-amber-50'
                            }
                          `}
                        >
                          <link.icon className="size-5 mr-3" />
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="mt-auto bg-gradient-to-r from-slate-900 via-zinc-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-10">
            <PawPrint className="size-10 text-amber-400 mb-4" />

            <h3 className="text-2xl font-bold">
              PetAdopt
            </h3>

            <p className="text-white/70 mt-2 max-w-md">
              Conectando animais a famílias amorosas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-3">
                Sobre
              </h4>

              <p className="text-white/70">
                Plataforma de adoção responsável, ajudando
                animais resgatados a encontrarem lares seguros.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">
                Contato
              </h4>

              <p className="text-white/70">
                contato@petadopt.com.br
              </p>

              <p className="text-white/70 mt-2">
                (11) 99999-9999
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">
                Comunidade
              </h4>

              <p className="text-white/70">
                Instagram • Facebook • X
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/50 text-sm">
            © 2026 PetAdopt. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
