import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    nickname: "",
    age: "",
  });
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        nickname: formData.nickname,
        age: parseInt(formData.age),
      });
      toast({
        title: "Добро пожаловать в КомпьютерГрад! 🎉",
        description: "Регистрация прошла успешно",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Ошибка регистрации",
        description: "Проверьте введенные данные",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-yellow-300 transition-colors"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            Вернуться на главную
          </Link>
        </div>

        <Card className="backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 shadow-2xl">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Присоединяйся!
            </CardTitle>
            <CardDescription className="text-lg">
              Создай аккаунт и начни своё приключение в мире технологий
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-base font-medium">
                  Полное имя
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Иван Петров"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="h-11 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nickname" className="text-base font-medium">
                  Никнейм
                </Label>
                <Input
                  id="nickname"
                  name="nickname"
                  placeholder="ivan_hero"
                  value={formData.nickname}
                  onChange={handleChange}
                  required
                  className="h-11 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-base font-medium">
                  Возраст
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="6"
                  max="18"
                  placeholder="12"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="h-11 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="твой@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-11 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-medium">
                  Пароль
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Надёжный пароль"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="h-11 text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Icon
                      name="Loader2"
                      className="mr-2 h-5 w-5 animate-spin"
                    />
                    Регистрация...
                  </>
                ) : (
                  <>
                    <Icon name="UserPlus" className="mr-2 h-5 w-5" />
                    Зарегистрироваться
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Уже есть аккаунт?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Войти 🎮
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
