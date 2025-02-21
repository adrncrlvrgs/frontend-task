import axios from "axios";

const apiUrl = "https://uselessfacts.jsph.pl/api/v2/facts"; //I Directly put the API URL since it's public and requires no configuration.
// Note: I understand the importance of using environment variables for security and configuration purposes,
// but since this is a public API with no sensitive data, I opted for a direct approach.

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
