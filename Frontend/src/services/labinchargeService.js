import labInchargeClient from "../http/http-labincharge";

const signout = () => {
  return labInchargeClient.post("/signout");
};

const signin = (data) => {
  return labInchargeClient.post("/signin", data);
};

const profile = (id) => {
  return labInchargeClient.get(`/profile/${id}`);
};

const changePassword = (data) => {
  return labInchargeClient.put("/profile/changePassword/{id}", data);
};

const remove = (id) => {
  return labInchargeClient.put(`/profile/delete/${id}`);
};

export default { signout, signin, profile, changePassword, remove };
