import axios from "axios";
import { API_URL } from "../API_KEY";

class AuthService {
  async login(user) {
    return axios
      .post(API_URL + "api/login", user)
      .then((response) => {
        if (response.status == 200) {
          return response.data;
        }
      })
      .catch((error) => {
        console.log("auth-service.js " + error);
        return error;
      });
  }

  validation(session){
    let isValidation = false;
    if (session.exists()) {
      let token = session.get("user-info");
      isValidation = token != null ? true : false;
    }
    return isValidation
  }
}

export default new AuthService();
