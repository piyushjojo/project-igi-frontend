import signInClient from "../http/http-signin.js";

const signin = (data) => {
  return signInClient.post("/signin", data);
};

export default { signin };
