import { useState } from "react";
import { CounterButton } from "../components/CounterButton";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  function increment(amount: number) {
    setCount(count => count + amount);
  }

  function decrement(amount: number) {
    setCount(count => count - amount);
  }

  return (
    <div className="flex items-center gap-6 text-zinc-100">
      <CounterButton title="Decrementar 100" onClick={() => decrement(100)}>
        -100
      </CounterButton>

      <CounterButton title="Decrementar 10" onClick={() => decrement(10)}>
        -10
      </CounterButton>

      <CounterButton title="Decrementar 1" onClick={() => decrement(1)}>
        -1
      </CounterButton>

      <span className="text-3xl">{count}</span>

      <CounterButton title="Incrementar 1" onClick={() => increment(1)}>
        +1
      </CounterButton>

      <CounterButton title="Incrementar 10" onClick={() => increment(10)}>
        +10
      </CounterButton>

      <CounterButton title="Incrementar 100" onClick={() => increment(100)}>
        +100
      </CounterButton>
    </div>
  );
};
