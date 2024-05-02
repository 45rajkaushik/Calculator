import Container from "./Components/Container";
import Input from "./Components/Input";
import Buttons from "./Components/Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const [str, setarrval] = useState("");
  let pressbtn = (e) => {
    if (e.target.innerText === "AC") {
      setarrval("");
      return;
    } else if (e.target.innerText === "=") {
      setarrval(eval(str));
      return;
    }
    let temp = str + e.target.innerText;
    setarrval(temp);
  };
  let buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
    "AC",
  ];
  return (
    <>
      <Container>
        <Input str={str}></Input>
        <Buttons buttons={buttons} handlebtn={pressbtn}></Buttons>
      </Container>
    </>
  );
}
export default App;
