interface HeadingProps {
  children: string;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => (
  <h1 className="text-4xl font-bold text-zinc-100">{children}</h1>
);
