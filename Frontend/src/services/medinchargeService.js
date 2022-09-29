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

const updateMed = (data) => {
  return medInchargeClient.put(`/addMedicine`, data);
};

const fetchorders = (pageno) => {
  return medInchargeClient.get(`/fetchorders?pageno=${pageno}`);
};

const updateOrder = (id) => {
  return medInchargeClient.put(`/updateorder/${id}`);
};

const viewOrder = (id) => {
  return medInchargeClient.get(`/vieworder/${id}`);
};

const medicines = () => {
  return medInchargeClient.get(`/medicines`);
};

const deleteMedicine = (id) => {
  return medInchargeClient.delete(`/deleteMed/${id}`);
};

export default {
  signout,
  signin,
  profile,
  changePassword,
  remove,
  addMed,
  fetchorders,
  updateOrder,
  viewOrder,
  medicines,
  deleteMedicine,
  updateMed,
};
