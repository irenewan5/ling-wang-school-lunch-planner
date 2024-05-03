import axios from "axios";

const baseUrl = "http://localhost:3001";

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  setToken(token) {
    this.token = token;
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
      headers: {
        token: this.token,
      },
    });
    return response.data;
  }

  async getKids() {
    const response = await axios.get(`${this.baseUrl}/kids`, {
      params: {
        q,
      },
      headers: {
        token: this.token,
      },
    });
    return response.data;
  }
}

const api = new Api(baseUrl);
export default api;
