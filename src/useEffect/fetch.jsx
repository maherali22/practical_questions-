import { useEffect } from "react";

function Listing() {
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return ( 
    <div>


    </div>
   );
}

export default Listing;