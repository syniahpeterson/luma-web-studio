import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
