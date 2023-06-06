import { useState } from 'react'

import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {

  const [count, setCount] = useState<number>(0);


  return (
    <>
      <Heading title="Hello World" />
      <Section>Hello Wolrd</Section>
      <Counter setCount={setCount}>Counter is {count}</Counter>
    </>
  );
}

export default App;
