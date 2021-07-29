import axios from "axios";
const axiosInstanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "795fa7ae-156a-4b6a-a80f-d7855e4f62a1",
  },
});
export const UsersAPI = {
  getUsers(currentPage = 2, pageSize = 10) {
    return axiosInstanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return axiosInstanse
      .post(`follow/${userId}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return axiosInstanse
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};
export const LoginAPI = {
  login() {
    return axiosInstanse.get(`auth/me`).then((response) => response.data);
  },
};
export const ProfileAPI = {
  setProfile(userId) {
    return axiosInstanse.get(`profile/${userId}`).then((response) => response.data);
  },
};
