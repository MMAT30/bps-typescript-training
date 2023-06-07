import {useCallback, useEffect, useMemo, useRef, useState } from "react";


interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37; 


function App() {

  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);


  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);



  useEffect(() => {
    console.log("mount");

    return () => { console.log("unmount"); }

  }, [users]);


  const addTwo = useCallback((): void => setCount(prev => prev + 2,), []);
  
  const result = useMemo<number>(() => fib(myNum), []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}></button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
