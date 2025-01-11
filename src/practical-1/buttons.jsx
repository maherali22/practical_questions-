import { useContext } from "react";
import { ball } from "./colorContext";

const Buttons = () => {
  const { setupClr } = useContext(ball);

  const handleColor = (colour) => {
    setupClr(colour);
  };
  return (
    <div>
      <button style={{color:"black", background:"white"}} onClick={() => handleColor("black")}>Black</button>
      <button style={{color:"red", background:"white"}} onClick={() => handleColor("red")}>Red</button>
      <button style={{color:"orange", background:"white"}} onClick={() => handleColor("orange")}>Orange</button>
      <button style={{color:"green", background:"white"}} onClick={() => handleColor("green")}>Green</button>
      <button style={{color:"white", background:"black"}} onClick={() => handleColor("white")}>White</button>
      <button style={{color:"blue", background:"white"}} onClick={() => handleColor("blue")}>Blue</button>
      <button style={{color:"yellow", background:"white"}} onClick={() => handleColor("yellow")}>Yellow</button>
      <button style={{color:"purple", background:"white"}} onClick={() => handleColor("purple")}>Purple</button>
      <button style={{color:"pink", background:"white"}} onClick={() => handleColor("pink")}>Pink</button>
    </div>
  );
};

export default Buttons;
