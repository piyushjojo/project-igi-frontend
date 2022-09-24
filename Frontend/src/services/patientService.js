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

const OrderMedicine = (data) => {
  return patientClient.get(`/ordermed?name=${data}`);
};

const medicineAddCart = (id, data) => {
  return patientClient.post(`/order/${id}`, data);
};

const payment = (data, id) => {
  return patientClient.post(`/payment/${id}`, data);
};

const recharge = (data, id) => {
  return patientClient.put(`/walletRechange/${id}`, data);
};

export default {
  signout,
  signin,
  signup,
  checkMail,
  profile,
  changePassword,
  remove,
  OrderMedicine,
  medicineAddCart,
  payment,
  recharge,
};
