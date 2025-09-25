import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailMovie from "./pages/DetailMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContext from "./contexts/globalContext";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
     <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<DetailMovie />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App
