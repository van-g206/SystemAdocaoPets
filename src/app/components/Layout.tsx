import { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Heart, Home, LogOut, Menu, PawPrint, Plus, User } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { NotificationToggle } from './NotificationPrompt';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';

export function Layout({ children }: { children: ReactNode }) {
  const location  = useLocation();
  const navigate  = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();
  const isActive  = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    toast.success('Até logo! 👋');
    navigate('/');
  };

  const navLinks = [
    { to: '/',          label: 'Início',    icon: Home     },
    { to: '/pets',      label: 'Adotar',    icon: PawPrint },
    { to: '/add-pet',   label: 'Cadastrar', icon: Plus     },
    { to: '/favorites', label: 'Favoritos', icon: Heart    },
  ];

  return (
    <div className="min-h-screen bg-[#e4dcdc] flex flex-col">
      {/* Header */}
      <header className="bg-[#f4a30e] border-b-4 border-black shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <PawPrint className="size-8 text-black" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-2xl text-black leading-tight">PetAdopt</h1>
                <p className="text-xs text-black/70">Encontre seu amigo</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <Button
                    variant={isActive(link.to) ? 'default' : 'ghost'}
                    className={isActive(link.to)
                      ? 'bg-black text-white'
                      : 'text-black hover:bg-black/10'}
                  >
                    <link.icon className="size-4 mr-2" />
                    {link.label}
                  </Button>
                </Link>
              ))}

              {/* Notificações */}
              <NotificationToggle />

              {/* Usuário logado ou botão Entrar */}
              {isLoggedIn ? (
                <div className="flex items-center gap-2 ml-2 pl-2 border-l-2 border-black/20">
                  <span className="text-sm font-semibold text-black">
                    Olá, {user?.name.split(' ')[0]}!
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLogout}
                    title="Sair"
                    className="text-black hover:bg-black/10"
                  >
                    <LogOut className="size-5" />
                  </Button>
                </div>
              ) : (
                <Link to="/login" className="ml-2">
                  <Button className="bg-black text-white hover:bg-black/80">
                    <User className="size-4 mr-2" />
                    Entrar
                  </Button>
                </Link>
              )}
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
                <SheetContent side="right" className="bg-[#e4dcdc] w-72">
                  {/* Info do usuário */}
                  {isLoggedIn && (
                    <div className="mb-6 p-4 bg-[#f4a30e]/30 rounded-xl border-2 border-black">
                      <p className="font-bold text-black">Olá, {user?.name.split(' ')[0]}! 👋</p>
                      <p className="text-sm text-black/70 truncate">{user?.email}</p>
                    </div>
                  )}

                  <nav className="flex flex-col gap-2 mt-4">
                    {navLinks.map((link) => (
                      <Link key={link.to} to={link.to}>
                        <Button
                          variant={isActive(link.to) ? 'default' : 'ghost'}
                          className={`w-full justify-start text-base ${
                            isActive(link.to)
                              ? 'bg-[#f4a30e] text-black border-2 border-black'
                              : 'text-black hover:bg-black/5'
                          }`}
                        >
                          <link.icon className="size-5 mr-3" />
                          {link.label}
                        </Button>
                      </Link>
                    ))}

                    {isLoggedIn ? (
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-base text-red-600 hover:bg-red-50 mt-4"
                        onClick={handleLogout}
                      >
                        <LogOut className="size-5 mr-3" />
                        Sair da Conta
                      </Button>
                    ) : (
                      <Link to="/login" className="mt-4">
                        <Button className="w-full bg-black text-white hover:bg-black/80 justify-start text-base">
                          <User className="size-5 mr-3" />
                          Entrar / Cadastrar
                        </Button>
                      </Link>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#754907] text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <PawPrint className="size-5" /> PetAdopt
              </h3>
              <p className="text-sm text-white/80">
                Conectamos animais resgatados com famílias amorosas desde 2020.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Contato</h3>
              <p className="text-sm text-white/80">
                contato@petadopt.com.br<br />(11) 99999-9999
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Redes Sociais</h3>
              <p className="text-sm text-white/80">Instagram · Facebook · Twitter</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-6 pt-4 text-center text-sm text-white/60">
            © 2026 PetAdopt. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
