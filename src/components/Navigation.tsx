import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import avrLogo from "@/assets/AVR_Black.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Podcasts", path: "/podcasts" },
    { label: "Venture", path: "/venture" },
    { label: "Happenings", path: "/happenings" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm animate-fade-in">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition-all duration-300 hover:opacity-80">
            <img src={avrLogo} alt="Aravindh Ravichandran" className="h-10 w-auto" />
          </Link>
          
          {/* Universal Navigation Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2.5 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20">
              <Menu className="h-5 w-5 text-primary" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-background/98 backdrop-blur-xl border-border shadow-lg">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link
                    to={item.path}
                    className={`w-full cursor-pointer transition-colors py-2.5 ${
                      isActive(item.path) ? "text-primary font-semibold" : "text-foreground/70 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
