import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useTheme } from "@/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-purple-600 transition-all duration-300 backdrop-blur-sm"
    >
      <Icon name={theme === "dark" ? "Sun" : "Moon"} className="h-4 w-4" />
    </Button>
  );
};

export default ThemeToggle;
