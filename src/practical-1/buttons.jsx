import { useContext } from "react";
import { ball } from "./colorContext";

const Buttons = () => {
  const { setupClr } = useContext(ball);

  const handleColor = (colour) => {
    setupClr(colour);
  };
  return (
    <div>
      <button onClick={() => handleColor("black")}>Black</button>
      <button onClick={() => handleColor("red")}>Red</button>
      <button onClick={() => handleColor("orange")}>Orange</button>
      <button onClick={() => handleColor("green")}>Green</button>
      <button onClick={() => handleColor("white")}>White</button>
    </div>
  );
};

export default Buttons;
