import { useState } from 'react';
import { Plus, X } from '@phosphor-icons/react';

interface Palpite {
  id: string;
  homeTeam: string;
  awayTeam: string;
  prediction: string;
  odds: number;
  image?: string;
}

function Palpites() {
  const [palpites, setPalpites] = useState<Palpite[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPalpite, setNewPalpite] = useState<Partial<Palpite>>({});
  const [previewImage, setPreviewImage] = useState<string>('');

  // Handler para upload de imagem
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setNewPalpite(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Adicionar novo palpite
  const handleAddPalpite = () => {
    if (newPalpite.homeTeam && newPalpite.awayTeam && newPalpite.prediction) {
      setPalpites(prev => [...prev, {
        ...newPalpite,
        id: Date.now().toString(),
        odds: newPalpite.odds || 1.0
      } as Palpite]);
      setIsModalOpen(false);
      setNewPalpite({});
      setPreviewImage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-blue-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Meus Palpites</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
          >
            <Plus size={24} weight="bold" />
          </button>
        </div>

        {/* Grid de palpites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {palpites.map(palpite => (
            <div
              key={palpite.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700"
            >
              {palpite.image && (
                <img 
                  src={palpite.image} 
                  alt="Palpite" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <div className="flex justify-between items-center mb-2">
                <span>{palpite.homeTeam} vs {palpite.awayTeam}</span>
                <span className="text-green-400">@{palpite.odds}</span>
              </div>
              <p className="text-blue-400 font-semibold">{palpite.prediction}</p>
            </div>
          ))}
        </div>

        {/* Modal de novo palpite */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-900 rounded-xl p-6 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Novo Palpite</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Time da casa"
                  className="w-full bg-slate-800 rounded p-2"
                  value={newPalpite.homeTeam || ''}
                  onChange={e => setNewPalpite(prev => ({ ...prev, homeTeam: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Time visitante"
                  className="w-full bg-slate-800 rounded p-2"
                  value={newPalpite.awayTeam || ''}
                  onChange={e => setNewPalpite(prev => ({ ...prev, awayTeam: e.target.value }))}
                />
                <input
                  type="text"
                  placeholder="Seu palpite"
                  className="w-full bg-slate-800 rounded p-2"
                  value={newPalpite.prediction || ''}
                  onChange={e => setNewPalpite(prev => ({ ...prev, prediction: e.target.value }))}
                />
                <input
                  type="number"
                  placeholder="Odds"
                  className="w-full bg-slate-800 rounded p-2"
                  value={newPalpite.odds || ''}
                  onChange={e => setNewPalpite(prev => ({ ...prev, odds: parseFloat(e.target.value) }))}
                />
                
                {/* Upload de imagem */}
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="imageUpload"
                  />
                  <label
                    htmlFor="imageUpload"
                    className="block w-full p-4 border-2 border-dashed border-slate-700 rounded-lg text-center cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="max-h-32 mx-auto rounded"
                      />
                    ) : (
                      "Clique para adicionar uma imagem"
                    )}
                  </label>
                </div>

                <button
                  onClick={handleAddPalpite}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors"
                >
                  Adicionar Palpite
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Palpites;