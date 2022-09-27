import medInchargeClient from "../http/http-medincharge";

const signout = () => {
  return medInchargeClient.post("/signout");
};

const signin = (data) => {
  return medInchargeClient.post("/signin", data);
};

const profile = (id) => {
  return medInchargeClient.get(`/profile/${id}`);
};

const changePassword = (data) => {
  return medInchargeClient.put("/profile/changePassword/{id}", data);
};

const remove = (id) => {
  return medInchargeClient.put(`/profile/delete/${id}`);
};

const addMed = (data) => {
  return medInchargeClient.post(`/addMedicine`, data);
};

export default { signout, signin, profile, changePassword, remove, addMed };
