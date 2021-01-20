import { STORE_CURRENT_CATEGORY } from "../actionTypes";

export const storeCurrentCategory = (category) => ({
  type: STORE_CURRENT_CATEGORY,
  category,
});
