const Data = ({ data }) => {
  return (
    <div>
      <h1 className="flex justify-center text-3xl">Posts</h1>
      {data?.map((item) => (
        <ul className="list-disc" key={item.id}>
          <li>{item.title}</li>
          <p>{item.body}</p>
        </ul>
      ))}
    </div>
  );
};

export default Data;