import { BrowserRouter, Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { AuthProvider } from './context/AuthContext';
import { PetsProvider } from './context/PetsContext';
import { FavoritesProvider } from './context/FavoritesContext';
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

// ⚠️ Troque '/petadopt/' pelo nome EXATO do seu repositório no GitHub (com barras)
const BASE = '/SystemAdocaoPets/';

function AppRoutes() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(`${BASE}sw.js`)
          .then((r) => console.log('SW registrado:', r))
          .catch((e) => console.error('SW falhou:', e));
      });
    }
  }, []);

  return (
    <BrowserRouter basename={BASE}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/"          element={<HomePage />}      />
                <Route path="/pets"      element={<PetsPage />}      />
                <Route path="/pets/:id"  element={<PetDetailPage />} />
                <Route path="/add-pet"   element={<AddPetPage />}    />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
      <InstallPrompt />
      <OfflineIndicator />
      <NotificationPrompt />
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <PetsProvider>
        <FavoritesProvider>
          <AppRoutes />
        </FavoritesProvider>
      </PetsProvider>
    </AuthProvider>
  );
}
