import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
  progress: number;
  lessons: number;
  color: string;
  difficulty: "Легко" | "Средне" | "Сложно";
}

const ModuleCard = ({
  title,
  description,
  icon,
  progress,
  lessons,
  color,
  difficulty,
}: ModuleCardProps) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Легко":
        return "bg-green-100 text-green-800";
      case "Средне":
        return "bg-yellow-100 text-yellow-800";
      case "Сложно":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div
      className={`${color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(difficulty)}`}
        >
          {difficulty}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Прогресс</span>
          <span className="font-semibold text-gray-800">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />

        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="flex items-center">
            <Icon name="BookOpen" size={16} className="mr-1" />
            {lessons} уроков
          </span>
          <span className="flex items-center">
            <Icon name="Clock" size={16} className="mr-1" />
            ~30 мин
          </span>
        </div>
      </div>

      <Button
        className="w-full mt-4 bg-white text-gray-800 hover:bg-gray-50 shadow-md font-semibold"
        size="sm"
      >
        {progress > 0 ? "Продолжить" : "Начать"}
        <Icon name="ArrowRight" size={16} className="ml-2" />
      </Button>
    </div>
  );
};

export default ModuleCard;
