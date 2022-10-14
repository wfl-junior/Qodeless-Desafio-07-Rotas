interface CounterButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const CounterButton: React.FC<CounterButtonProps> = props => (
  <button
    className="flex cursor-pointer items-center justify-center rounded bg-zinc-700 py-3 px-6 text-xl transition-colors duration-300 hover:bg-zinc-800"
    {...props}
  />
);
