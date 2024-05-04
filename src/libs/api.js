import axios from "axios";

const baseUrl = "http://localhost:3001";

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getAuthHeaders() {
    return {
      token: localStorage.getItem("token"),
    };
  }

  async createToken(username, password) {
    const response = await axios.post(`${this.baseUrl}/token`, {
      username,
      password,
    });
    return response.data.token;
  }

  async searchRecipes(q) {
    const response = await axios.get(`${this.baseUrl}/recipes`, {
      params: {
        q,
      },
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }

  async getKids() {
    console.log(1111, this.token);
    const response = await axios.get(`${this.baseUrl}/kids`, {
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }
}

const api = new Api(baseUrl);
export default api;
