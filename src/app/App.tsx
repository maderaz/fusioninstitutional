import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./components/ui/theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
