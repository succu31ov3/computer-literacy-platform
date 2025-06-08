import Hero from "@/components/Hero";
import ModuleCard from "@/components/ModuleCard";
import StatsSection from "@/components/StatsSection";
import GameElements from "@/components/GameElements";
import VideoLessons from "@/components/VideoLessons";
import TutorBooking from "@/components/TutorBooking";

const Index = () => {
  const modules = [
    {
      title: "Основы компьютера",
      description:
        "Изучи устройство компьютера, операционную систему и основные программы",
      icon: "💻",
      progress: 75,
      lessons: 12,
      color: "bg-gradient-to-br from-blue-100 to-blue-200",
      difficulty: "Легко" as const,
    },
    {
      title: "Интернет-безопасность",
      description:
        "Научись защищать себя в интернете и создавать надёжные пароли",
      icon: "🛡️",
      progress: 45,
      lessons: 8,
      color: "bg-gradient-to-br from-green-100 to-green-200",
      difficulty: "Средне" as const,
    },
    {
      title: "Программирование",
      description: "Создавай свои первые программы и игры на простом языке",
      icon: "🚀",
      progress: 20,
      lessons: 15,
      color: "bg-gradient-to-br from-purple-100 to-purple-200",
      difficulty: "Сложно" as const,
    },
    {
      title: "Цифровые навыки",
      description: "Работа с файлами, презентациями и поиском информации",
      icon: "⚡",
      progress: 60,
      lessons: 10,
      color: "bg-gradient-to-br from-orange-100 to-orange-200",
      difficulty: "Легко" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />

      {/* Модули обучения */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Выбери свой путь 🛤️
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Каждый модуль — это увлекательное приключение в мире технологий!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <ModuleCard key={index} {...module} />
            ))}
          </div>
        </div>
      </section>

      <VideoLessons />
      <TutorBooking />
      <StatsSection />
      <GameElements />

      {/* Призыв к действию */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Готов стать цифровым героем? 🦸‍♂️
          </h2>
          <p className="text-xl mb-8">
            Присоединяйся к тысячам учеников, которые уже изучают компьютерные
            технологии!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
              Начать бесплатно 🎯
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Узнать больше 📚
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
