import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export const BaseLayout: React.FC = () => (
  <div className="flex min-h-screen flex-col bg-zinc-900">
    <Header />

    <Main>
      <Outlet />
    </Main>

    <Footer />
  </div>
);
