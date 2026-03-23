import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import VideoSlideSection1 from "./pages/VideoSlideSection1";
import VideoSlidePart1 from "./pages/VideoSlidePart1";
import VideoSlidePart2 from "./pages/VideoSlidePart2";
import VideoSlideUnified from "./pages/VideoSlideUnified";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/video-unified"} component={VideoSlideUnified} />
      <Route path={"/video-section-1"} component={VideoSlideSection1} />
      <Route path={"/video-part-1"} component={VideoSlidePart1} />
      <Route path={"/video-part-2"} component={VideoSlidePart2} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
