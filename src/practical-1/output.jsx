import { useContext } from "react";
import { ball } from "./colorContext";

const Output = () => {
  const { color } = useContext(ball);
  return (
    <>
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: color,
          border: "solid",
          width: "100px",
          height: "100px",
          marginBottom: "10px",
        }}
      ></div>
    </>
  );
};

export default Output;
