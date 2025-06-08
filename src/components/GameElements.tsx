import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GameElements = () => {
  const quickGames = [
    {
      title: "Клавиатурный ниндзя",
      description: "Тренируй скорость печати",
      icon: "⌨️",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      players: "1,234",
    },
    {
      title: "Охотник за паролями",
      description: "Создавай надёжные пароли",
      icon: "🔐",
      color: "bg-gradient-to-br from-green-400 to-green-600",
      players: "856",
    },
    {
      title: "Детектив файлов",
      description: "Организуй файлы и папки",
      icon: "🔍",
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      players: "672",
    },
    {
      title: "Интернет-сёрфер",
      description: "Безопасно путешествуй по сети",
      icon: "🌐",
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      players: "943",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Игровая зона 🎮
          </h2>
          <p className="text-xl text-gray-600">
            Учись играя! Выбери мини-игру и прокачай свои навыки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickGames.map((game, index) => (
            <div
              key={index}
              className={`${game.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer`}
            >
              <div className="text-4xl mb-4 text-center">{game.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">
                {game.title}
              </h3>
              <p className="text-sm text-center mb-4 opacity-90">
                {game.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="opacity-75">👥 {game.players}</span>
                <Button
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-none"
                >
                  Играть
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Турнир недели */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-4 border-yellow-300">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              Турнир недели
            </h3>
            <p className="text-lg text-gray-600">
              Соревнуйся с друзьями и получай призы!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl">
              <div className="text-3xl mb-2">🥇</div>
              <div className="font-bold text-gray-800">Алекс М.</div>
              <div className="text-sm text-gray-600">2,450 очков</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
              <div className="text-3xl mb-2">🥈</div>
              <div className="font-bold text-gray-800">Мария К.</div>
              <div className="text-sm text-gray-600">2,380 очков</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl">
              <div className="text-3xl mb-2">🥉</div>
              <div className="font-bold text-gray-800">Данил П.</div>
              <div className="text-sm text-gray-600">2,340 очков</div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
            >
              <Icon name="Zap" className="mr-2" />
              Участвовать в турнире
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameElements;
