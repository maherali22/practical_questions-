const ogObj = {
  name: "Mahir",
  details: {
    age: 23,
    skill: ["JS", "React"],
  },
};

const deepCopy = JSON.parse(JSON.stringify(ogObj));
deepCopy.name = "Maher";
console.log(deepCopy.name);
console.log(ogObj.name);

