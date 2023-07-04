import axios from 'axios';

export default class ApiCallHandler {
  async get(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async post(url, data) {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async put(url, data) {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(url) {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
