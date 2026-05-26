import { useState } from 'react';
import { usePWA } from '../hooks/usePWA';
import { Download, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export function InstallPrompt() {
  const { isInstallable, installApp } = usePWA();
  const [isDismissed, setIsDismissed] = useState(false);

  if (!isInstallable || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96 animate-in slide-in-from-bottom">
      <Card className="bg-[#f4a30e] border-4 border-black shadow-2xl p-4">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-black hover:bg-black/10 rounded-full p-1"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-start gap-3">
          <div className="bg-white rounded-full p-3 border-2 border-black">
            <Download className="size-6 text-[#754907]" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg text-black mb-1">Instalar PetAdopt</h3>
            <p className="text-sm text-black/80 mb-3">
              Instale nosso app e acesse mesmo sem internet!
            </p>

            <div className="flex gap-2">
              <Button
                onClick={installApp}
                className="bg-[#754907] hover:bg-[#5a3606] text-white flex-1"
              >
                Instalar Agora
              </Button>
              <Button
                onClick={() => setIsDismissed(true)}
                variant="outline"
                className="border-2 border-black bg-white hover:bg-black/5"
              >
                Depois
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
