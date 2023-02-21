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

  async editUser(userId: number, editedUser: IUserShape, userToken: string) {
    try {
      const { data } = await AXIOS_API.patch(`/user/${userId}`, editedUser, {
        headers: { Authorization: userToken },
      });
      return data;
    } catch (error) {
      throw error
    }
  }

  async deleteUser(userId: number, userToken: string) {
    try {
      const { data } = await AXIOS_API.delete(`/user/${userId}`, {
        headers: { Authorization: userToken }
      });
      return data;
    } catch (error) {
      handleError(error);
    }
  }
}
