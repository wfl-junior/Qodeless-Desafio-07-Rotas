import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

interface Route {
  label: string;
  path: string;
}

const routes: Route[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Contato",
    path: "/contact",
  },
  {
    label: "Sobre nós",
    path: "/about",
  },
];

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex items-center justify-center bg-zinc-800 p-4 text-center text-lg">
      <ul className="flex items-center gap-8">
        {routes.map(route => (
          <li
            key={route.path}
            className={classNames(
              "relative py-2 text-zinc-100 transition-colors hover:text-zinc-400",
              {
                "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-zinc-100":
                  pathname === route.path,
              },
            )}
          >
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
