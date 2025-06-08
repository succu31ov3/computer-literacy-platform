import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Первые шаги",
      description: "Завершил вводный курс",
      earned: true,
    },
    {
      icon: "🛡️",
      title: "Защитник",
      description: "Изучил основы безопасности",
      earned: true,
    },
    {
      icon: "💻",
      title: "Программист",
      description: "Написал первую программу",
      earned: false,
    },
    {
      icon: "🌐",
      title: "Исследователь",
      description: "Изучил интернет-технологии",
      earned: false,
    },
  ];

  const weeklyStats = [
    { day: "ПН", hours: 2, completed: true },
    { day: "ВТ", hours: 1.5, completed: true },
    { day: "СР", hours: 3, completed: true },
    { day: "ЧТ", hours: 0, completed: false },
    { day: "ПТ", hours: 0, completed: false },
    { day: "СБ", hours: 0, completed: false },
    { day: "ВС", hours: 0, completed: false },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Твой прогресс 📊
          </h2>
          <p className="text-xl text-gray-600">
            Смотри, как растут твои навыки каждый день!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Достижения */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Icon name="Award" className="mr-3 text-yellow-500" />
              Достижения
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                    achievement.earned
                      ? "bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300"
                      : "bg-gray-100 opacity-50"
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="font-semibold text-sm text-gray-800">
                    {achievement.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Недельная активность */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Icon name="Calendar" className="mr-3 text-blue-500" />
              Эта неделя
            </h3>
            <div className="space-y-3">
              {weeklyStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        stat.completed
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {stat.day}
                    </div>
                    <span className="ml-3 text-gray-700">
                      {stat.day === "ПН"
                        ? "Понедельник"
                        : stat.day === "ВТ"
                          ? "Вторник"
                          : stat.day === "СР"
                            ? "Среда"
                            : stat.day === "ЧТ"
                              ? "Четверг"
                              : stat.day === "ПТ"
                                ? "Пятница"
                                : stat.day === "СБ"
                                  ? "Суббота"
                                  : "Воскресенье"}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">
                      {stat.hours}ч
                    </div>
                    <div className="text-xs text-gray-500">изучения</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">
                  6.5 часов
                </div>
                <div className="text-sm text-gray-600">
                  общее время на этой неделе
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Общая статистика */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-bold text-gray-800">15</div>
              <div className="text-gray-600">Уроков пройдено</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-gray-800">7</div>
              <div className="text-gray-600">Дней подряд</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-gray-800">89%</div>
              <div className="text-gray-600">Точность</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-2xl font-bold text-gray-800">234</div>
              <div className="text-gray-600">Звёзд собрано</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
