import logoBlack from "@/assets/logo-black_1.png";

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-border/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 animate-fade-in">
        <p className="text-sm text-muted-foreground">
          © Aravindh Initiative 2025
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
          <span>Powered by</span>
          <a href="https://realmrook.com" target="_blank" rel="noopener noreferrer">
            <img 
              src={logoBlack} 
              alt="Realm by Rook" 
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
