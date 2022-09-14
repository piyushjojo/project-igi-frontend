import patientClient from "../http/http-patient.js";

const signout = () => {
  return patientClient.post("/signout");
};

const signin = (data) => {
  return patientClient.post("/signin", data);
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
export default { signout, signin, profile, changePassword, remove };
