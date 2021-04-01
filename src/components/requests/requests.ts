import axios from "./axios";

export const checkAuth = () => {
  return axios.get(`check-auth`, {
    headers: {
      authorization: localStorage.getItem("token") || "x",
    },
  });
};
export const getNotice = (id: string) => {
  return axios.get(`notices/${id}`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};

export const deleteNotice = (id: string) => {
  return axios.delete(`notices/${id}`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
export const getNotices = () => {
  return axios.get(`notices`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
export const logOut = () => {
  return axios.get(`logout`);
};

export const logIn = (username: string, password: string) => {
  return axios.post(`login`, { username, password });
};

export const addNote = (title: string, content: string) => {
  return axios.post(`notices`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
    title,
    content,
  });
};
export const updateNote = (id: string, title: string, content: string) => {
  return axios.put(`notices/${id}`, {
    headers: {
      authorization: localStorage.getItem("token"),
    },
    title,
    content,
  });
};
export const createUser = (
  username: string,
  mail: string,
  password: string
) => {
  return axios.post(`register`, { username, mail, password });
};
export const getLocation = () => {
//https://app.ipgeolocation.io/
  return axios.get(
    `https://api.ipgeolocation.io/ipgeo?apiKey=3ce78b0b39b14298b4429e3e410f02b9`
  );
};
