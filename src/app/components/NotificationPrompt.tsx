import { useState, useEffect } from 'react';
import { Bell, BellOff, X } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function NotificationPrompt() {
  const { notificationPermission, requestNotificationPermission, sendLocalNotification } = usePWA();
  const [show, setShow] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Mostra o prompt após 5s se ainda não decidiu
    if (notificationPermission === 'default') {
      const t = setTimeout(() => setShow(true), 5000);
      return () => clearTimeout(t);
    }
    if (notificationPermission === 'granted') setSubscribed(true);
  }, [notificationPermission]);

  const handleAllow = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      setSubscribed(true);
      setShow(false);
      // Envia notificação de boas-vindas
      await sendLocalNotification('🐾 PetAdopt ativado!', {
        body: 'Você receberá alertas quando novos pets estiverem disponíveis para adoção.',
        tag: 'welcome',
        data: { url: '/pets' },
      });
    } else {
      setShow(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96 animate-in slide-in-from-bottom duration-300">
      <Card className="bg-white border-4 border-black shadow-[6px_6px_0px_black] p-4 relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black transition-colors"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-start gap-3">
          <div className="bg-[#f4a30e] rounded-full p-3 border-2 border-black shrink-0">
            <Bell className="size-6 text-black" />
          </div>

          <div className="flex-1 pr-4">
            <h3 className="font-bold text-base text-black mb-1">
              Ativar Notificações
            </h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Receba alertas quando novos pets forem cadastrados ou quando houver novidades na sua adoção!
            </p>

            <div className="flex gap-2">
              <Button
                onClick={handleAllow}
                className="bg-[#754907] hover:bg-[#5a3606] text-white flex-1 text-sm"
              >
                <Bell className="size-4 mr-1" />
                Ativar
              </Button>
              <Button
                onClick={() => setShow(false)}
                variant="outline"
                className="border-2 border-black hover:bg-gray-50 text-sm"
              >
                <BellOff className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Botão compacto para usar na navbar/configurações
export function NotificationToggle() {
  const { notificationPermission, requestNotificationPermission, sendLocalNotification } = usePWA();

  const handleToggle = async () => {
    if (notificationPermission === 'granted') {
      // Já tem permissão: envia notificação de teste
      await sendLocalNotification('🐾 PetAdopt', {
        body: 'Notificações estão ativas! Você será avisado sobre novos pets.',
        tag: 'test',
      });
    } else {
      await requestNotificationPermission();
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      title={notificationPermission === 'granted' ? 'Notificações ativas' : 'Ativar notificações'}
      className={notificationPermission === 'granted' ? 'text-[#f4a30e]' : 'text-gray-500'}
    >
      {notificationPermission === 'granted'
        ? <Bell className="size-5" />
        : <BellOff className="size-5" />
      }
    </Button>
  );
}
