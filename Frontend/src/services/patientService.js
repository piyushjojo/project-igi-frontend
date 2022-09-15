import patientClient from "../http/http-patient.js";

const signout = () => {
  return patientClient.post("/signout");
};

const signin = (data) => {
  return patientClient.post("/signin", data);
};

const signup = (data) => {
  return patientClient.post("/signup2", data);
};

const checkMail = (data) => {
  return patientClient.post("/signup1", data);
};

const profile = (id) => {
  return patientClient.get(`/profile/${id}`);
};

const changePassword = (data, id) => {
  return patientClient.put(`/profile/changePassword/${id}`, data);
};

const remove = (id) => {
  return patientClient.put(`/profile/delete/${id}`);
};
export default {
  signout,
  signin,
  signup,
  checkMail,
  profile,
  changePassword,
  remove,
};
