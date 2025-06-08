import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ThemeToggle from "@/components/ThemeToggle";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 text-white py-20 px-6 relative">
      {/* Theme Toggle in top right */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            КомпьютерГрад 🌟
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Изучай компьютерные технологии весело и безопасно! Стань настоящим
            цифровым героем! 🦸‍♂️
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Play" className="mr-2" />
              Начать обучение
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Icon name="Trophy" className="mr-2" />
              Мои достижения
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="text-4xl mb-2">🎮</div>
            <div className="text-2xl font-bold">50+</div>
            <div className="text-blue-100">Игр</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-bold">100+</div>
            <div className="text-blue-100">Заданий</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-2xl font-bold">1000+</div>
            <div className="text-blue-100">Учеников</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-2xl font-bold">95%</div>
            <div className="text-blue-100">Успех</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
