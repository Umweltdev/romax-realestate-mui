import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWVmN2NjNDhjN2M1YzAzNGYxNTJhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDg0NjMzMCwiZXhwIjoxNjkxMTA1NTMwfQ.bv9i-91x2VHwWsnNUkW7v0WtlOWKLCIQAosFn-EVo2w";

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
});