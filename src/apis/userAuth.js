import axios from "axios";

const sendLoginRequest = async (email, password) => {
  let res = null;
  try {
    res = await axios.post("http://localhost:5000/auth/signin", {
      email,
      password,
    });
  } catch (err) {
    if (err.response.status === 400) {
      console.log("Login Error=", err.response.data.error);
      res = { isLoggedIn: false, message: err.response.data.error };
    } else console.log(err);
  } finally {
    if (res) {
      const data = await res.data;
      if (data && data.token) {
        res = { isLoggedIn: true, message: "User Login Success!" };
        localStorage.setItem("Token", data.token);
        // localStorage.setItem("User", data.user);
      } else res.isLoggedIn = false;
    }
  }

  return res;
};

const sendSignupRequest = async (userInfo) => {
  let res = null;
  try {
    res = await axios.post("http://localhost:5000/auth/register", {
      ...userInfo,
    });
  } catch (err) {
    if (err.response.status === 422) {
      console.log("Signup Error=", err.response.data.error);
      res = { isSignedUp: false, message: err.response.data.error };
    } else console.log(err);
  } finally {
    if (res) {
      const data = await res.data;
      if (data && data.message)
        res = { isSignedUp: true, message: data.message };
      else res.isSignedUp = false;
    }
  }

  return res;
};

export { sendLoginRequest, sendSignupRequest };
