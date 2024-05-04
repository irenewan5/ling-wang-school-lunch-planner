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

  async getRecipeDetails(id) {
    const response = await axios.get(`${this.baseUrl}/recipes/${id}`, {
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }

  async getKids() {
    const response = await axios.get(`${this.baseUrl}/kids`, {
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }

  async addKid(name) {
    const response = await axios.post(
      `${this.baseUrl}/kids`,
      { name },
      {
        headers: this.getAuthHeaders(),
      }
    );
    return response.data;
  }

  async getPlans(kidId, startDate, endDate) {
    const response = await axios.get(`${this.baseUrl}/plans`, {
      params: {
        kidId,
        startDate,
        endDate,
      },
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }

  async addPlan(date, kidId, recipe) {
    const response = await axios.post(
      `${this.baseUrl}/plans`,
      {
        date,
        kid_id: kidId,
        recipe_id: recipe.id,
        recipe_image: recipe.image,
        recipe_name: recipe.label,
      },
      {
        headers: this.getAuthHeaders(),
      }
    );
    return response.data;
  }

  async removePlan(id) {
    const response = await axios.delete(`${this.baseUrl}/plans/${id}`, {
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }

  async updateKid(id, name) {
    const response = await axios.put(
      `${this.baseUrl}/kids/${id}`,
      { name },
      {
        headers: this.getAuthHeaders(),
      }
    );
    return response.data;
  }

  async removeKid(id) {
    const response = await axios.delete(`${this.baseUrl}/kids/${id}`, {
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }
  async getMyInfo() {
    const response = await axios.get(`${this.baseUrl}/users/me`, {
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }

  async updateMyInfo(info) {
    const response = await axios.put(`${this.baseUrl}/users/me`, info, {
      headers: this.getAuthHeaders(),
    });
    return response.data;
  }
}

const api = new Api(baseUrl);
export default api;
