import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { ArrowLeft, Upload, Save, Wifi, WifiOff, LogIn } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';
import { useAuth } from '../context/AuthContext';
import { usePets } from '../context/PetsContext';
import { toast } from 'sonner';
import { Link } from 'react-router';

async function savePetOffline(pet: object) {
  return new Promise<void>((resolve, reject) => {
    const req = indexedDB.open('petadopt-db', 1);
    req.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      (e.target as IDBOpenDBRequest).result.createObjectStore('pending-pets', { keyPath: 'id' });
    };
    req.onsuccess = (e: Event) => {
      const db  = (e.target as IDBOpenDBRequest).result;
      const tx  = db.transaction('pending-pets', 'readwrite');
      tx.objectStore('pending-pets').put(pet);
      tx.oncomplete = () => resolve();
      tx.onerror    = () => reject(tx.error);
    };
    req.onerror = () => reject(req.error);
  });
}

export function AddPetPage() {
  const navigate = useNavigate();
  const { isOnline, sendLocalNotification } = usePWA();
  const { isLoggedIn } = useAuth();
  const { addPet } = usePets();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '', species: '' as 'dog' | 'cat' | '',
    breed: '', age: '', gender: '' as 'male' | 'female' | '',
    size: '' as 'small' | 'medium' | 'large' | '',
    description: '', personality: '', healthStatus: '',
    location: '', adoptionFee: '',
    vaccinated: false, neutered: false,
  });

  // Bloquear se offline (não pode cadastrar sem conexão)
  if (!isOnline) {
    return (
      <div className="min-h-screen bg-[#e4dcdc] flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 border-4 border-black text-center">
          <WifiOff className="size-16 mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold mb-2">Sem Conexão</h1>
          <p className="text-gray-600 mb-6">
            O cadastro de pets requer conexão com a internet. Conecte-se e tente novamente.
          </p>
          <Button onClick={() => navigate(-1)} className="w-full bg-[#754907] hover:bg-[#5a3606] text-white">
            Voltar
          </Button>
        </Card>
      </div>
    );
  }

  // Bloquear se não logado
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#e4dcdc] flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 border-4 border-black text-center">
          <LogIn className="size-16 mx-auto mb-4 text-[#f4a30e]" />
          <h1 className="text-2xl font-bold mb-2">Faça Login Primeiro</h1>
          <p className="text-gray-600 mb-6">
            Você precisa estar logado para cadastrar um pet.
          </p>
          <div className="flex gap-3">
            <Button onClick={() => navigate(-1)} variant="outline" className="flex-1 border-2 border-black">
              Voltar
            </Button>
            <Link to="/login" className="flex-1">
              <Button className="w-full bg-[#754907] hover:bg-[#5a3606] text-white">
                Entrar
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.species || !formData.gender || !formData.size) {
      toast.error('Preencha todos os campos obrigatórios!');
      return;
    }
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 800));

    // Adiciona no contexto global (aparece imediatamente na lista)
    addPet({
      name:         formData.name,
      species:      formData.species as 'dog' | 'cat',
      breed:        formData.breed   || 'SRD',
      age:          Number(formData.age) || 1,
      gender:       formData.gender  as 'male' | 'female',
      size:         formData.size    as 'small' | 'medium' | 'large',
      description:  formData.description,
      personality:  formData.personality.split(',').map((s) => s.trim()).filter(Boolean),
      healthStatus: formData.healthStatus || 'Bom',
      vaccinated:   formData.vaccinated,
      neutered:     formData.neutered,
      image:        imagePreview || 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop',
      location:     formData.location,
      adoptionFee:  Number(formData.adoptionFee) || 0,
    });

    await sendLocalNotification('🐾 Pet cadastrado!', {
      body: `${formData.name} já está disponível para adoção!`,
      tag:  'pet-added',
      data: { url: '/pets' },
    });

    toast.success(`${formData.name} cadastrado com sucesso! 🐾`, {
      description: 'O pet já aparece na lista de adoção.',
    });

    setIsSubmitting(false);
    navigate('/pets');
  };

  const set = (field: string, value: unknown) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="min-h-screen bg-[#e4dcdc] py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4 text-black hover:bg-black/10">
            <ArrowLeft className="mr-2 size-4" /> Voltar
          </Button>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-1">Cadastrar Novo Pet</h1>
              <p className="text-gray-600">Preencha as informações do animal para adoção</p>
            </div>
            <Badge className="bg-green-500 text-white border-2 border-black">
              <Wifi className="size-4 mr-1" /> Online
            </Badge>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Foto */}
          <Card className="p-6 border-2 border-black mb-6">
            <Label className="text-lg font-bold mb-4 block">Foto do Pet</Label>
            <div className="flex flex-col items-center gap-4">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview"
                  className="w-full max-w-md h-64 object-cover rounded-lg border-2 border-black" />
              ) : (
                <div className="w-full max-w-md h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Upload className="size-12 mx-auto mb-2" />
                    <p>Clique para adicionar uma foto</p>
                  </div>
                </div>
              )}
              <Input type="file" accept="image/*" onChange={handleImageChange} className="max-w-md" />
            </div>
          </Card>

          {/* Informações Básicas */}
          <Card className="p-6 border-2 border-black mb-6">
            <h2 className="text-xl font-bold mb-4">Informações Básicas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Pet *</Label>
                <Input id="name" value={formData.name} onChange={(e) => set('name', e.target.value)}
                  placeholder="Ex: Luna" required />
              </div>
              <div className="space-y-2">
                <Label>Espécie *</Label>
                <Select value={formData.species} onValueChange={(v) => set('species', v)}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dog">🐕 Cachorro</SelectItem>
                    <SelectItem value="cat">🐱 Gato</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="breed">Raça</Label>
                <Input id="breed" value={formData.breed} onChange={(e) => set('breed', e.target.value)}
                  placeholder="Ex: Labrador (ou SRD)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Idade (anos) *</Label>
                <Input id="age" type="number" min="0" max="30" value={formData.age}
                  onChange={(e) => set('age', e.target.value)} placeholder="Ex: 2" required />
              </div>
              <div className="space-y-2">
                <Label>Sexo *</Label>
                <Select value={formData.gender} onValueChange={(v) => set('gender', v)}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Macho</SelectItem>
                    <SelectItem value="female">Fêmea</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Porte *</Label>
                <Select value={formData.size} onValueChange={(v) => set('size', v)}>
                  <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Pequeno</SelectItem>
                    <SelectItem value="medium">Médio</SelectItem>
                    <SelectItem value="large">Grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Descrição */}
          <Card className="p-6 border-2 border-black mb-6">
            <h2 className="text-xl font-bold mb-4">Descrição e Personalidade</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Descrição *</Label>
                <Textarea id="description" value={formData.description}
                  onChange={(e) => set('description', e.target.value)}
                  placeholder="Conte sobre o comportamento, história e características do pet..." rows={4} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="personality">Personalidade (separado por vírgulas)</Label>
                <Input id="personality" value={formData.personality}
                  onChange={(e) => set('personality', e.target.value)}
                  placeholder="Ex: Amigável, Energético, Leal" />
              </div>
            </div>
          </Card>

          {/* Saúde e Localização */}
          <Card className="p-6 border-2 border-black mb-6">
            <h2 className="text-xl font-bold mb-4">Saúde e Localização</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="healthStatus">Estado de Saúde</Label>
                <Input id="healthStatus" value={formData.healthStatus}
                  onChange={(e) => set('healthStatus', e.target.value)} placeholder="Ex: Excelente" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Localização *</Label>
                <Input id="location" value={formData.location}
                  onChange={(e) => set('location', e.target.value)} placeholder="Ex: São Paulo, SP" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="adoptionFee">Taxa de Adoção (R$)</Label>
                <Input id="adoptionFee" type="number" min="0" value={formData.adoptionFee}
                  onChange={(e) => set('adoptionFee', e.target.value)} placeholder="0 = Gratuito" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                <Label htmlFor="vaccinated" className="cursor-pointer">
                  <div className="font-semibold">Vacinado</div>
                  <div className="text-sm text-gray-500">O pet está com as vacinas em dia?</div>
                </Label>
                <Switch id="vaccinated" checked={formData.vaccinated}
                  onCheckedChange={(v) => set('vaccinated', v)} />
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
                <Label htmlFor="neutered" className="cursor-pointer">
                  <div className="font-semibold">Castrado</div>
                  <div className="text-sm text-gray-500">O pet foi castrado?</div>
                </Label>
                <Switch id="neutered" checked={formData.neutered}
                  onCheckedChange={(v) => set('neutered', v)} />
              </div>
            </div>
          </Card>

          {/* Botões */}
          <div className="flex gap-4">
            <Button type="submit" disabled={isSubmitting}
              className="flex-1 bg-[#754907] hover:bg-[#5a3606] text-white py-6 text-lg">
              {isSubmitting
                ? 'Salvando...'
                : <><Save className="mr-2 size-5" /> Cadastrar Pet</>}
            </Button>
            <Button type="button" variant="outline" onClick={() => navigate(-1)}
              className="border-2 border-black hover:bg-black/5 py-6 px-8">
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
