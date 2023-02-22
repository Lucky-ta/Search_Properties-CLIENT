import { IPropertyShape } from "interfaces";

import AXIOS_API from "./api";

export class PropertyApi {
  async createProperty(property: IPropertyShape, userToken: string) {
    try {
      const { data } = await AXIOS_API.post("/property", property, {
        headers: { Authorization: userToken },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async editProperty(propertyId: number, editedProperty: Omit<IPropertyShape, "registeredByUser">, userToken: string) {
    try {
      const { data } = await AXIOS_API.patch(`/property/${propertyId}`, editedProperty, {
        headers: { Authorization: userToken }
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteProperty(propertyId: number) {
    try {
      const { data } = await AXIOS_API.delete(`/property/${propertyId}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOwnProperties(userId: string, userToken: string) {
    try {
      const { data } = await AXIOS_API.get(`/property/${userId}`, {
        headers: { Authorization: userToken },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllProperties(userToken: string) {
    try {
      const { data } = await AXIOS_API.get(`/property`, {
        headers: { Authorization: userToken },
      });
      return data;
    } catch (error) {
      throw error
    }
  }
}
