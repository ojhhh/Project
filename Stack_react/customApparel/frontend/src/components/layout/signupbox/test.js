const formData = new FormData();

formData.append("asd", "haha");
const form = {
  Nick: "Nick",
  user_id: "user_id",
  user_pw: "user_pw",
};
formData.append("data", JSON.stringify(form));

// console.log(formData);
// console.log(formData.values());
// for (let value of formData.values()) {
//   console.log(value);
// }
