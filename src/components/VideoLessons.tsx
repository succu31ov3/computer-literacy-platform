import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const VideoLessons = () => {
  const videoLessons = [
    {
      title: "Как включить компьютер",
      description:
        "Изучи основы работы с компьютером от включения до выключения",
      duration: "5 мин",
      difficulty: "Легко",
      thumbnail: "🖥️",
      views: 2500,
      category: "Основы",
    },
    {
      title: "Создание безопасного пароля",
      description: "Научись создавать надёжные пароли для защиты своих данных",
      duration: "8 мин",
      difficulty: "Средне",
      thumbnail: "🔒",
      views: 1800,
      category: "Безопасность",
    },
    {
      title: "Мой первый код на Scratch",
      description:
        "Создай свою первую анимацию в визуальной среде программирования",
      duration: "12 мин",
      difficulty: "Сложно",
      thumbnail: "🎨",
      views: 3200,
      category: "Программирование",
    },
    {
      title: "Работа с файлами",
      description:
        "Научись создавать папки, сохранять файлы и организовывать данные",
      duration: "7 мин",
      difficulty: "Легко",
      thumbnail: "📁",
      views: 1950,
      category: "Навыки",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Средне":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Сложно":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Видео уроки 🎬
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Изучай новое через увлекательные видео уроки с любимыми персонажами!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoLessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{lesson.thumbnail}</div>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}
                  >
                    {lesson.difficulty}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {lesson.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Icon name="Clock" className="w-4 h-4 mr-1" />
                    {lesson.duration}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Eye" className="w-4 h-4 mr-1" />
                    {lesson.views}
                  </span>
                </div>

                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  <Icon name="Play" className="w-4 h-4 mr-2" />
                  Смотреть урок
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400"
          >
            Посмотреть все уроки
            <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoLessons;
