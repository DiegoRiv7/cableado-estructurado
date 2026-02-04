import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Software from "./pages/Software";
import Contact from "./pages/Contact";
import Socios from "./pages/Socios";
import CasosExito from "./pages/CasosExito";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios" component={Services} />
      <Route path="/casos-exito" component={CasosExito} />
      <Route path="/socios" component={Socios} />
      <Route path="/software" component={Software} />
      <Route path="/contacto" component={Contact} />
      <Route path="/404" component={NotFound} />
      {/* Páginas placeholder - mostrarán toast */}
      <Route path="/privacidad" component={NotFound} />
      <Route path="/terminos" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
