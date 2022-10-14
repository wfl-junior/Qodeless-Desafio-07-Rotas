import classNames from "classnames";
import { Icon } from "phosphor-react";
import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
  icon: Icon;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon: Icon, errorMessage, ...props }, ref) => (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name} className="text-base text-zinc-100">
        {label}
      </label>

      <div
        className={classNames(
          "flex h-12 w-full items-center gap-3 rounded border-2 px-4 transition-colors duration-300 focus-within:border-indigo-600",
          errorMessage ? "border-red-600" : "border-zinc-700",
        )}
      >
        <Icon size={20} className="flex-shrink-0 text-zinc-400" />

        <input
          ref={ref}
          type="text"
          className="flex-1 bg-transparent py-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
          {...props}
          id={props.name}
        />
      </div>

      {!!errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  ),
);
