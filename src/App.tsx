import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import TextChecker from "./pages/textChecker";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<TextChecker />} />
            <Route path="/satuti" element={<h1>MATUTUGH</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
