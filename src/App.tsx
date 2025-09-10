import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import TextChecker from "./pages/textChecker";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="/" element={<TextChecker />} />
              <Route path="/text-checker" element={<TextChecker />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
