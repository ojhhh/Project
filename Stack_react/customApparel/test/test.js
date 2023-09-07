const inputString = "mid_1692324975819";
const timestampString = inputString.replace("mid_", "");
const timestamp = parseInt(timestampString, 10);

const date = new Date(timestamp);
console.log(
  new Date(parseInt(inputString.replace("mid_", ""))).toLocaleDateString()
);
