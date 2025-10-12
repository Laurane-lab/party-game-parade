import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Connexion from "./pages/Connexion";
import GameExplanation from "./pages/GameExplanation";
import Premium from "./pages/Premium";
import MentionsLegales from "./pages/MentionsLegales";
import CGVCGU from "./pages/CGVCGU";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Payment from "./pages/Payment";
import Profil from "./pages/Profil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/profil" element={
            <ProtectedRoute>
              <Profil />
            </ProtectedRoute>
          } />
          <Route path="/game-explanation" element={<GameExplanation />} />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv-cgu" element={<CGVCGU />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/premium" element={<Premium />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
