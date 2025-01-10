import { useEffect, useState } from "react";
import axios from "axios";
import Data from "./fetch-2";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
      console.log(data);
    };
    fetchData();
  }, []);

  return <Data data={data} />;
};

export default Home;
