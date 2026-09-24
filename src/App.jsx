import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route index element={<Home />} /> // For the main page - the actual portfolio page.
          <Route path="*" element={<NotFound />} /> // For any other page(which will result into a component called the not found page).
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
