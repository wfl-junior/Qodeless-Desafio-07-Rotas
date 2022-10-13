import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
