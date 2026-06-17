import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, User, Menu, PawPrint, Plus } from 'lucide-react';
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
    { to: '/',          label: 'Início',    icon: Home     },
    { to: '/pets',      label: 'Adotar',    icon: PawPrint },
    { to: '/add-pet',   label: 'Cadastrar', icon: Plus     },
    { to: '/favorites', label: 'Favoritos', icon: Heart    },
    { to: '/login',     label: 'Entrar',    icon: User     },
  ];

  return (
    <div className="min-h-screen bg-[#e4dcdc] flex flex-col">
      {/* Header */}
      <header className="bg-[#f4a30e] border-b-4 border-black shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <PawPrint className="size-8 text-black" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-2xl text-black">PetAdopt</h1>
                <p className="text-xs text-black/80">Encontre seu amigo</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <Button
                    variant={isActive(link.to) ? 'default' : 'ghost'}
                    className={isActive(link.to) ? 'bg-black text-white' : 'text-black hover:bg-black/10'}
                  >
                    <link.icon className="size-4 mr-2" />
                    {link.label}
                  </Button>
                </Link>
              ))}
              {/* Botão de notificações na navbar */}
              <NotificationToggle />
            </nav>

            {/* Mobile: notificações + menu */}
            <div className="flex items-center gap-2 md:hidden">
              <NotificationToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-black">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#e4dcdc]">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link key={link.to} to={link.to}>
                        <Button
                          variant={isActive(link.to) ? 'default' : 'ghost'}
                          className={`w-full justify-start ${
                            isActive(link.to) ? 'bg-[#f4a30e] text-black' : 'text-black'
                          }`}
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

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#754907] text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Sobre Nós</h3>
              <p className="text-sm text-white/80">
                Conectamos animais resgatados com famílias amorosas desde 2020.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <p className="text-sm text-white/80">
                Email: contato@petadopt.com.br<br />
                Tel: (11) 99999-9999
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <p className="text-sm text-white/80">
                Instagram | Facebook | Twitter
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60">
            © 2026 PetAdopt. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
