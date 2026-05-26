import { usePWA } from '../hooks/usePWA';
import { WifiOff, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

export function OfflineIndicator() {
  const { isOnline } = usePWA();
  const [show, setShow]         = useState(!isOnline);
  const [wasOffline, setWasOffline] = useState(!isOnline);

  useEffect(() => {
    if (!isOnline) {
      // Ficou offline: mostra banner e permanece visível
      setWasOffline(true);
      setShow(true);
    } else if (wasOffline) {
      // Voltou online: mostra "Conectado" por 3s e some
      setShow(true);
      const t = setTimeout(() => {
        setShow(false);
        setWasOffline(false);
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [isOnline, wasOffline]);

  if (!show) return null;

  return (
    <>
      {/* Banner de topo */}
      <div className="fixed top-[72px] left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div
          className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_black] font-semibold text-sm transition-all duration-300 pointer-events-auto ${
            isOnline
              ? 'bg-green-400 text-black'
              : 'bg-yellow-400 text-black'
          }`}
        >
          {isOnline ? (
            <>
              <Wifi className="size-4" />
              <span>Conexão restaurada!</span>
            </>
          ) : (
            <>
              <WifiOff className="size-4" />
              <span>Modo Offline — conteúdo em cache disponível</span>
            </>
          )}
        </div>
      </div>

      {/* Faixa inferior quando offline */}
      {!isOnline && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-yellow-400 border-t-4 border-black px-4 py-2 flex items-center justify-center gap-2 text-sm font-semibold text-black">
          <WifiOff className="size-4" />
          Você está offline — alterações serão sincronizadas quando voltar online
        </div>
      )}
    </>
  );
}
