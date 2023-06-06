import { ReactNode } from "react";

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode
}

const Counter = ({setCount, children}: CounterProps) => {
    return (
      <>
        <h2>Counter</h2>
        <div>
                <button onClick={() => { setCount((prev) => prev + 1) }}>+</button>
          {children}
                <button onClick={() => { setCount((prev) => prev - 1) }}>-</button>
        </div>
      </>
    );
}
export default Counter;