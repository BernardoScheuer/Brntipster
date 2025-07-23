import { useState } from "react";
import { SoccerBall, UsersThree, Trophy } from "@phosphor-icons/react";

const times = [
  { nome: "Flamengo", cor: "from-red-700 to-black", img: "https://upload.wikimedia.org/wikipedia/commons/1/16/CRF_logo.png" },
  { nome: "Palmeiras", cor: "from-green-700 to-green-300", img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg" },
  { nome: "Corinthians", cor: "from-gray-800 to-gray-400", img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Corinthians_logo.svg" },
  { nome: "São Paulo", cor: "from-red-500 to-white", img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sao_Paulo_FC_crest.svg" },
  { nome: "Vasco", cor: "from-black to-white", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/CRVascodaGama.png" },
  { nome: "Grêmio", cor: "from-blue-800 to-white", img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Gremio_logo.svg" },
  { nome: "Internacional", cor: "from-red-800 to-white", img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/SC_Internacional_logo.svg" },
  { nome: "Cruzeiro", cor: "from-blue-700 to-blue-300", img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cruzeiro_EC_logo.svg" },
  { nome: "Atlético-MG", cor: "from-gray-900 to-gray-400", img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Clube_Atl%C3%A9tico_Mineiro_logo.svg" },
  { nome: "Athletico-PR", cor: "from-red-800 to-gray-900", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Athletico_Paranaense_2023.png" },
  { nome: "Fortaleza", cor: "from-blue-700 to-red-500", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Escudo_Fortaleza.png" },
  { nome: "Fluminense", cor: "from-green-900 to-pink-300", img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Fluminense_FC_escudo.png" },
  { nome: "Botafogo", cor: "from-gray-900 to-gray-400", img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Escudo_Botafogo.png" },
  { nome: "Bahia", cor: "from-blue-800 to-red-500", img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Esporte_Clube_Bahia_logo.svg" },
  { nome: "Cuiabá", cor: "from-green-800 to-yellow-400", img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cuiaba_EC_logo.png" },
  { nome: "Bragantino", cor: "from-gray-200 to-red-500", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Red_Bull_Bragantino_logo.svg" },
  { nome: "Juventude", cor: "from-green-900 to-green-300", img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Esporte_Clube_Juventude_logo.svg" },
  { nome: "Coritiba", cor: "from-green-800 to-white", img: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Coritiba_FBC_logo.svg" },
  { nome: "Atlético-GO", cor: "from-red-700 to-black", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Atletico_Clube_Goianiense_logo.svg" },
  { nome: "Cruzeiro", cor: "from-blue-700 to-blue-300", img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cruzeiro_EC_logo.svg" },
  // Adicione outros times da Série A 2025 conforme necessário
];


function Home() {
  const [timeFavorito, setTimeFavorito] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col items-center bg-gradient-to-br from-slate-950 to-blue-950 min-h-screen overflow-hidden">
      {/* Background com blur otimizado */}
      <div
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/stadium-bg.jpg')", // Mova a imagem para pasta public
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          filter: "blur(1px)",
        }}
        aria-hidden
      />

   

      {/* Conteúdo principal */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Seção de boas-vindas */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Bem-vindo ao <span className="text-blue-400">BrnTipster</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Seu portal de palpites e estatísticas para apaixonados por futebol
          </p>
        </section>

        {/* Cards de features */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <SoccerBall weight="duotone" size={32} />,
              title: "Palpites",
              desc: "Faça seus palpites diários"
            },
            {
              icon: <Trophy weight="duotone" size={32} />,
              title: "Ranking",
              desc: "Compita com outros usuários"
            },
            {
              icon: <UsersThree weight="duotone" size={32} />,
              title: "Comunidade",
              desc: "Interaja com outros torcedores"
            }
          ].map((feature) => (
            <div key={feature.title} 
                 className="p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm 
                          border border-slate-700 hover:border-slate-600 
                          transition-all group">
              <div className="text-blue-400 group-hover:text-blue-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mt-4">{feature.title}</h3>
              <p className="text-slate-300 mt-2">{feature.desc}</p>
            </div>
          ))}
        </section>

   
        <section className="space-y-8 w-full">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Escolha seu time do coração
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Selecione seu time favorito e acompanhe estatísticas exclusivas
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
              {times.slice(0, 32).map((time) => (
                <button
                  key={time.nome}
                  onClick={() => setTimeFavorito(time.nome)}
                  className={`
                    group relative overflow-hidden rounded-xl aspect-square
                    transition-all duration-300 ease-out
                  `}
                >
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${time.cor}
                    opacity-75 group-hover:opacity-100 transition-opacity
                  `}/>
                  
                  <div className="relative p-4 flex flex-col items-center justify-center  space-y-4">
                    <div className={`
                      w-20 h-20 rounded-full bg-white/90 p-2
                      transform transition-transform duration-300
                      group-hover:scale-110 group-hover:shadow-lg
                    `}>
                      <img
                        src={time.img}
                        alt={time.nome}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    
                    <span className="text-base font-medium text-white text-center
                                   tracking-wide group-hover:font-semibold">
                      {time.nome}
                    </span>
                  </div>
        
                  {timeFavorito === time.nome && (
                    <div className="absolute top-3 right-3">
                      <div className="w-3 h-3 rounded-full bg-blue-400 
                                    animate-pulse shadow-lg shadow-blue-400/50"/>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
   
        </section>
      </main>
    </div>
  );
}

export default Home;