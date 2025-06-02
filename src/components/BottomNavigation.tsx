
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Camera, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/events", icon: Calendar, label: "Events" },
    { path: "/scanner", icon: Camera, label: "Scanner" },
    { path: "/shop", icon: ShoppingBag, label: "Shop" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-golden-sand-300/20 z-50">
      <div className="flex justify-around items-center py-2 px-4">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={cn(
              "flex flex-col items-center p-2 rounded-lg transition-all duration-200",
              location.pathname === path
                ? "text-golden-sand-300"
                : "text-alabaster-200 hover:text-golden-sand-400"
            )}
          >
            <Icon 
              size={24} 
              className={cn(
                "mb-1 transition-transform duration-200",
                location.pathname === path && "scale-110"
              )} 
            />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
