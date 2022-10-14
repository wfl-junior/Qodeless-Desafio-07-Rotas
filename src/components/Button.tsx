import { CircleNotch } from "phosphor-react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  children,
  ...props
}) => (
  <button
    className="flex w-full cursor-pointer items-center justify-center rounded bg-indigo-600 px-4 py-3 text-center text-white transition-colors duration-300 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-zinc-700"
    disabled={isLoading}
    {...props}
  >
    {isLoading ? <CircleNotch size={20} className="animate-spin" /> : children}
  </button>
);
