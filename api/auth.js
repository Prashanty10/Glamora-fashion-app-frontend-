import axios from "axios";

const API_URL = "http://192.168.0.102:5000/api/auth"; 

export const registerUser = (username, email, password) => {
  return axios.post(`${API_URL}/register`, { username, email, password });
};

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};



