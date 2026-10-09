import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Forside from "./pages/Forside";
import Artikler from "./pages/Artikler";
import Kontakt from "./pages/Kontakt";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/artikler" element={<Artikler />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
