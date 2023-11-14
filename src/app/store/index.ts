import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./reducers/commentsSlice";

export const rootReducer = {
  reducer: {
    comments: commentsSlice,
  },
};
export default configureStore(rootReducer);
