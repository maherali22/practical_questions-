const Data = ({ data }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>POSTS</h1>
      {data?.map((item) => (
        <ul style={{ listStyle: "none" }} key={item.id}>
          <li style={{ color: "red", textAlign: "center", fontSize: "30px" }}>
            {item.title}
          </li>
          <p style={{ fontFamily: "fantasy" }}>{item.body}</p>
        </ul>
      ))}
    </div>
  );
};

export default Data;
