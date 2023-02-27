import { memo, useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Destroyed :("); // cleanup function
  }, []);
  return (
    <h1>Hello</h1>
  )
}

const MemorizedHello = memo(Hello)
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeword] = useState("");
  const [showing, setShwoing] = useState(false);

  const onChange = (e) => setKeword(e.target.value);
  const onClick = () => setCounter(current => current+1);
  const showBtn = () => setShwoing(prev => !prev);

  // deps가 변화할때 한번 실행, deps가 비어있다면 처음 렌더링시 한번만 실행
  useEffect(() => {
    console.log("I run only once.")
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.")
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.")
  }, [counter]);
  
  return (
    <div>
      <div>
        <input 
          value={keyword} 
          onChange={onChange} 
          type="text" 
          placeholder="Search here..." 
        />
        <h1>Count {counter}</h1>
        <button onClick={onClick}>click me</button>
      </div>
      <br /><hr /><br />

      <div>
        <button onClick={showBtn}>{showing ? "Hide" : "Show"}</button>
        {showing ? <MemorizedHello /> : null}
      </div>
    </div>
  );
}

export default App;