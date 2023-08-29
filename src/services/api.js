import axios from "axios";

const instance = axios.create({
  headers: {
    Accept: "application/json",
    Authorization:
      "GHA eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTVkM2ZlOTNhMDRhYjM0OGFmMTgxYyIsImlhdCI6MTY5Mjk3MDQ5Nn0.C27Fi-XXXZXe_CPbuWPCkB62U6xZUqJko7akJvrIxzU",
  },
});

// sign up user
export const signUpUser = (email) => {
  return instance.post("http://18.134.207.143:3000/api/user/presignup", {
    email,
    usertype: "USER",
  });
};
// sign up business
export const signUpBusiness = (email) => {
  return instance.post("http://18.134.207.143:3000/api/user/presignup", {
    email,
    usertype: "BUSINESS",
  });
};
