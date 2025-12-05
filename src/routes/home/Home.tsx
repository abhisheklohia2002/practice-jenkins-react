// import { useMemo, useState } from "react";
// import CounterWithPayload from "../../components/useReducer/CounterWithPayload";
// import useCustomEffect from "../../components/custom-hooks/Effect.hooks";
// import reactLogo from '../../assets/react.svg'
// import viteLogo from '../../assets/vite.svg'
export default function Home() {
  // const [count, setCount] = useState<number>(0);
  // let refs: any = null;
  // const sum = (): number => {
  //   let bag = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     bag += i;
  //   }
  //   return bag;
  // };
  // const setInputRef = (element: any) => {
  //   console.log(element,'elem')
  //   refs = element;
  // };
  // const focusInput = () => {
  //   refs.focus();
  //   refs.value = "hello world"
  // };
  // const total = useMemo(() => sum(), []);
  // useCustomEffect(() => {
  //   console.log("useEffect called", count);
  //   return () => {
  //     console.log("cleanup function called");
  //   };
  // }, [count]);

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      {/* <h1>Vite + React</h1>
      <div>
        <input ref={setInputRef} />
      </div>
      <button onClick={focusInput}>Focus</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <CounterWithPayload />
        <p>click the button to increase the count. {total}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}
