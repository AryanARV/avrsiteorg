import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoWhite from "@/assets/sports29-logo.png";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Podcasts", path: "/podcasts" },
    { label: "Host", path: "/host" },
    { label: "Sponsorship", path: "/sponsorship" },
    { label: "Contact", path: "/contact" },
    { label: "Legal", path: "/legal" },
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-lg animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="transition-all duration-300 hover:scale-105 flex items-center gap-3">
            <img src={logoWhite} alt="Sports29 by AVR" className="h-8 w-auto" />
            <span className="text-white text-lg font-light">| Sports29</span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 rounded-lg hover:bg-accent transition-colors">
              <Menu className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-background/95 backdrop-blur-lg border-border">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link
                    to={item.path}
                    className={`w-full cursor-pointer text-white hover:text-primary ${
                      isActive(item.path) ? "text-primary font-medium" : ""
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
