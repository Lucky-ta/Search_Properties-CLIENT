import { IPropertyShape } from "interfaces";

import AXIOS_API from "./api";

const handleError = (error: any) => {
  throw new Error(error.message);
};

export class PropertyApi {
  async createProperty(property: IPropertyShape) {
    try {
      const { data } = await AXIOS_API.post("/property", property);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async editProperty(propertyId: number, editedProperty: IPropertyShape) {
    try {
      const { data } = await AXIOS_API.put(
        `/property/${propertyId}`,
        editedProperty
      );
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async deleteProperty(propertyId: number) {
    try {
      const { data } = await AXIOS_API.delete(`/property/${propertyId}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async getProperty(propertyId: number) {
    try {
      const { data } = await AXIOS_API.get(`/property/${propertyId}`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }

  async getAllProperties() {
    try {
      const { data } = await AXIOS_API.get(`/property`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }
}
