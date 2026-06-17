import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { toast } from 'sonner';

export function LoginPage() {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  // Login form refs
  const loginEmailRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);

  // Register form refs
  const regNameRef = useRef<HTMLInputElement>(null);
  const regEmailRef = useRef<HTMLInputElement>(null);
  const regPhoneRef = useRef<HTMLInputElement>(null);
  const regPasswordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const email = loginEmailRef.current?.value ?? '';
    const password = loginPasswordRef.current?.value ?? '';
    const ok = await login(email, password);
    setIsLoading(false);
    if (ok) {
      toast.success('Bem-vindo de volta!');
      navigate('/pets');
    } else {
      toast.error('Falha no login. Verifique sua conexão.');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const name = regNameRef.current?.value ?? '';
    const email = regEmailRef.current?.value ?? '';
    const phone = regPhoneRef.current?.value ?? '';
    const password = regPasswordRef.current?.value ?? '';
    const ok = await register(name, email, phone, password);
    setIsLoading(false);
    if (ok) {
      toast.success('Conta criada com sucesso!');
      navigate('/pets');
    } else {
      toast.error('Falha ao criar conta. Verifique sua conexão.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-[#f4a30e] to-[#e4dcdc]">
      {/* Decorative paws */}
      <div className="absolute top-20 left-10 opacity-20 rotate-12 text-6xl hidden md:block">🐾</div>
      <div className="absolute top-40 right-20 opacity-20 -rotate-12 text-6xl hidden md:block">🐾</div>
      <div className="absolute bottom-20 left-20 opacity-20 rotate-45 text-6xl hidden md:block">🐾</div>
      <div className="absolute bottom-40 right-10 opacity-20 -rotate-45 text-6xl hidden md:block">🐾</div>

      <Card className="w-full max-w-md border-4 border-black shadow-2xl bg-white/95 backdrop-blur">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🐾</div>
            <h1 className="text-3xl font-bold text-black mb-2">Bem-vindo!</h1>
            <p className="text-gray-600">Entre para encontrar seu novo amigo</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-base">Entrar</TabsTrigger>
              <TabsTrigger value="register" className="text-base">Cadastrar</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10 border-2"
                      ref={loginEmailRef}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 border-2"
                      ref={loginPasswordRef}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#754907] hover:bg-[#5a3606] text-white py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="João Silva"
                      className="pl-10 border-2"
                      ref={regNameRef}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10 border-2"
                      ref={regEmailRef}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="pl-10 border-2"
                      ref={regPhoneRef}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 border-2"
                      ref={regPasswordRef}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#754907] hover:bg-[#5a3606] text-white py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Cadastrando...' : 'Criar Conta'}
                </Button>

                <p className="text-xs text-center text-gray-600 mt-4">
                  Ao criar uma conta, você concorda com nossos{' '}
                  <a href="#" className="text-black font-semibold underline">
                    Termos de Serviço
                  </a>{' '}
                  e{' '}
                  <a href="#" className="text-black font-semibold underline">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
