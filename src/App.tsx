import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Connexion from "./pages/Connexion";
import GameExplanation from "./pages/GameExplanation";
import Premium from "./pages/Premium";
import MentionsLegales from "./pages/MentionsLegales";
import CGVCGU from "./pages/CGVCGU";
import Payment from "./pages/Payment";
import { useEffect } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

const queryClient = new QueryClient();

const PostHogPageviewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    posthog.capture("$pageview");
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PostHogProvider client={posthog}>
        <BrowserRouter>
          <PostHogPageviewTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/connexion" element={<Connexion />} />
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
            <Route path="/premium" element={<Premium />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PostHogProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
