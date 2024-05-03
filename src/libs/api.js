import axios from "axios";

const baseUrl = "http://localhost:3001";

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async createToken(username, password) {
    const response = await axios.post(`${this.baseUrl}/token`, {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
  }

  async searchRecipes(q) {
    const response = await axios.get(`${this.baseUrl}/recipes`, {
      params: {
        q,
      },
    });
    return response.data;
  }
}

const api = new Api(baseUrl);
export default api;
