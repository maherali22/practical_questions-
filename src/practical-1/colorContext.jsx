import { createContext, useState } from "react";

export const ball = createContext();

const ColorContext = ({ children }) => {
  const [color, setColor] = useState("");
  const setupClr = (colour) => {
    setColor(colour);
  };
  return <ball.Provider value={{ color, setupClr }}>{children}</ball.Provider>;
};

export default ColorContext;
