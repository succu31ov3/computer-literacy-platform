import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TutorBooking = () => {
  const tutors = [
    {
      name: "Анна Петрова",
      specialization: "Основы компьютера",
      experience: "5 лет",
      rating: 4.9,
      price: "500₽/час",
      avatar: "👩‍🏫",
      description: "Специалист по обучению детей основам работы с компьютером",
      subjects: ["Windows", "Файлы", "Интернет"],
    },
    {
      name: "Максим Иванов",
      specialization: "Программирование",
      experience: "7 лет",
      rating: 5.0,
      price: "700₽/час",
      avatar: "👨‍💻",
      description:
        "Эксперт по обучению детей программированию на Scratch и Python",
      subjects: ["Scratch", "Python", "Алгоритмы"],
    },
    {
      name: "Елена Сидорова",
      specialization: "Безопасность",
      experience: "4 года",
      rating: 4.8,
      price: "450₽/час",
      avatar: "👩‍💼",
      description: "Специалист по кибербезопасности и защите данных для детей",
      subjects: ["Пароли", "Интернет-безопасность", "Приватность"],
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Занятия с преподавателем 👨‍🏫
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Персональные уроки с опытными преподавателями для быстрого
            результата!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-3">{tutor.avatar}</div>
                  <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-1">
                    {tutor.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {tutor.specialization}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Опыт:
                    </span>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {tutor.experience}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Рейтинг:
                    </span>
                    <span className="flex items-center font-medium text-gray-800 dark:text-white">
                      <Icon
                        name="Star"
                        className="w-4 h-4 text-yellow-500 mr-1"
                      />
                      {tutor.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Цена:
                    </span>
                    <span className="font-bold text-lg text-purple-600 dark:text-purple-400">
                      {tutor.price}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {tutor.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tutor.subjects.map((subject, subIndex) => (
                    <span
                      key={subIndex}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Calendar" className="w-4 h-4 mr-2" />
                  Записаться на урок
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white dark:border-orange-400 dark:text-orange-400"
          >
            Все преподаватели
            <Icon name="Users" className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TutorBooking;
