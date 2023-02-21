import { IUserShape } from "interfaces";

import AXIOS_API from "./api";

const handleError = (error: any) => {
  throw new Error(error.message);
};

export class UserApi {
  async createUser(user: IUserShape) {
    try {
      const { data } = await AXIOS_API.post("/user", user);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async loginUser(user: Omit<IUserShape, "name">) {
    try {
      const { data } = await AXIOS_API.post("/user/login", user);
      return data;
    } catch (error) {
      throw error
    }
  }

  async editUser(userId: number, editedUser: IUserShape) {
    try {
      const { data } = await AXIOS_API.put(`/user/${userId}`, editedUser);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async deleteUser(userId: number) {
    try {
      const { data } = await AXIOS_API.delete(`/user/${userId}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async getUser(userId: number) {
    try {
      const { data } = await AXIOS_API.get(`/user/${userId}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async getAllUsers() {
    try {
      const { data } = await AXIOS_API.get(`/user`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }
}
