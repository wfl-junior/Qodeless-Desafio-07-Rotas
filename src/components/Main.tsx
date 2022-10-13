interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => (
  <main className="flex flex-1 items-center justify-center">{children}</main>
);
