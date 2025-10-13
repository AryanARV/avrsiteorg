import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Legal from "./pages/Legal";
// import Host from "./pages/Host";
import Contact from "./pages/Contact";
import Sponsorship from "./pages/Sponsorship";
import Podcasts from "./pages/Podcasts";
import Venture from "./pages/Venture";
import Happenings from "./pages/Happenings";
import About from "./pages/About";
import Events from "./pages/Events";
import Archery from "./pages/Archery";
import Books from "./pages/Books";
import ChroniclesOfEchelon from "./pages/ChroniclesOfEchelon";
import NotFound from "./pages/NotFound";

import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/legal" element={<Legal />} />
          {/* <Route path="/host" element={<Host />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/venture" element={<Venture />} />
          <Route path="/happenings" element={<Happenings />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire-me-for-events" element={<Events />} />
          <Route path="/archery" element={<Archery />} />
          <Route path="/books" element={<Books />} />
          <Route path="/chronicles-of-echelon" element={<ChroniclesOfEchelon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
