import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import { Counter } from "./routes/Counter";
import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";
import { Register } from "./routes/Register";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
