import axios from "./axios";

export const checkAuth = () => {
  return axios.get(`check-auth`, {
    headers: {
      authorization: localStorage.getItem("token"),
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
  return axios.post("notices", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
    title,
    content,
  });
};
