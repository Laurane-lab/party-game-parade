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
import ToGoPremium from "./pages/ToGoPremium";
import MentionsLegales from "./pages/MentionsLegales";
import CGVCGU from "./pages/CGVCGU";
import PaymentSuccess from "./pages/PaymentSuccess";

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
          <Route path="/game-explanation" element={
            <ProtectedRoute>
              <GameExplanation />
            </ProtectedRoute>
          } />
          <Route path="/payment-success" element={
            <ProtectedRoute>
              <PaymentSuccess />
            </ProtectedRoute>
          } />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv-cgu" element={<CGVCGU />} />
          <Route path="/premium" element={<ToGoPremium />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
