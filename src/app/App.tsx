import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PetsPage } from './pages/PetsPage';
import { PetDetailPage } from './pages/PetDetailPage';
import { LoginPage } from './pages/LoginPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AddPetPage } from './pages/AddPetPage';
import { InstallPrompt } from './components/InstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { NotificationPrompt } from './components/NotificationPrompt';
import { AuthProvider } from './context/AuthContext';
import { PetsProvider } from './context/PetsContext';
import { FavoritesProvider } from './context/FavoritesContext';

export default function App() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // Caminho relativo: herda o scope da subpasta corretamente no GitHub Pages
        navigator.serviceWorker
          .register('./sw.js')
          .then((registration) => {
            console.log('Service Worker registrado:', registration);
          })
          .catch((error) => {
            console.error('Falha ao registrar Service Worker:', error);
          });
      });
    }
  }, []);

  return (
    <AuthProvider>
      <PetsProvider>
        <FavoritesProvider>
          {/* HashRouter: usa #/ na URL, imune a 404 em subpastas do GitHub Pages */}
          <HashRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/*"
                element={
                  <Layout>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/pets" element={<PetsPage />} />
                      <Route path="/pets/:id" element={<PetDetailPage />} />
                      <Route path="/add-pet" element={<AddPetPage />} />
                      <Route path="/favorites" element={<FavoritesPage />} />
                    </Routes>
                  </Layout>
                }
              />
            </Routes>

            {/* Componentes PWA globais */}
            <InstallPrompt />
            <OfflineIndicator />
            <NotificationPrompt />
            <Toaster position="top-center" />
          </HashRouter>
        </FavoritesProvider>
      </PetsProvider>
    </AuthProvider>
  );
}
