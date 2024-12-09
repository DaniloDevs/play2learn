import { BookOpen, Gamepad2, Brain, Rocket, Shield, Calculator } from 'lucide-react'


const time = [
  {
    name: "Bruno Pessanha",
    role: "CEO e diretor de tecnologia",
    skills: ["Liderança", "Assertividade", "Disciplina"],
    favoriteGame: "Subnautica",
  },
  {
    name: "Vinícius Machado",
    role: "Diretor de Relações e Criatividade",
    skills: ["Criatividade", "Comunicação Visual", "Adaptação"],
    favoriteGame: "Minecraft",
  },
  {
    name: "Paulo Roberto",
    role: "Diretor de Relações e de Operações",
    skills: ["Organização", "Pensamento criativo", "Proatividade"],
    favoriteGame: "Elden Ring",
  }
]

const features = [
  { icon: BookOpen, title: "Conteúdo Educativo", description: "Matérias escolares adaptadas para jogos interativos" },
  { icon: Gamepad2, title: "Gamificação", description: "Aprendizado divertido através de jogos envolventes" },
  { icon: Brain, title: "Desenvolvimento Cognitivo", description: "Estimula o raciocínio e a criatividade das crianças" },
  { icon: Rocket, title: "Progresso Acelerado", description: "Acompanhamento do desempenho e adaptação ao ritmo da criança" }
]
export default function Play2LearnLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Play2Learn</h1>
          <p className="text-lg text-green-600 font-semibold">Aprender é divertido!</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Bem-vindo à Play2Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Play2Learn é uma empresa que cria uma plataforma de jogos digitais para auxiliar no ensino das crianças da primeira infância, utilizando o método da gamificação com as matérias escolares para tornar o aprendizado mais divertido do que o de hoje em dia.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Por que escolher a Play2Learn?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <item.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 ">
          <div className='text-center'>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 self-center">Pronto para transformar o aprendizado em diversão?</h3>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a nós e descubra como a Play2Learn pode revolucionar a educação infantil.
              <br />
              Jogue um de Nossos Jogos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-500 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-800">Polyshooter</h4>
                </div>
                <p className="text-gray-600 mb-4 ">
                  Proteja o planeta Terra de aliens em forma de polígonos enquanto aprende matemática. Uma aventura espacial educativa!
                </p>
                <a
                  href="https://gx.games/games/msekvr/play2learn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Jogar Agora
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calculator className="w-8 h-8 text-green-500 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-800">Slime Counter</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Um jogo simples de contas matemáticas. Prepare seu caderno e lápis para fazer contas o mais rápido possível e acumular pontos!
                </p>
                <a
                  href="https://gx.games/games/7qwyiq/p2l-matematica/tracks/de188e04-4b81-401a-a9a5-2cac8f618ca1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Jogar Agora
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Nossa Equipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
              time.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <div className="mb-2">
                    <h5 className="font-semibold text-gray-700">Habilidades:</h5>
                    <p className="text-gray-600">{member.skills.join(", ")}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700">Jogo Favorito:</h5>
                    <p className="text-gray-600">{member.favoriteGame}</p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Play2Learn. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

