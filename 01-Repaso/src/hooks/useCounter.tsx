import { useState } from "react";

export const useCounter = () => {

    const [count, setCount] = useState<number>(100);

    const increment = (value: number) => {
        setCount(count + value);
    }

    const decrement = (value: number) => {
        setCount(count - value);
    }

  return {
    count,
    increment,
    decrement
  }
}
