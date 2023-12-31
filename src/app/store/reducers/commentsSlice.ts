import { createSlice } from "@reduxjs/toolkit";

export const getNewCommentsData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/comments");
  return result;
};

export const commentSlice = createSlice({
  name: "Comment Slice",
  initialState: {
    commentsData: [],
  },
  reducers: {
    addComments: (data: any, action: any) => {
      data.commentsData = [...data.commentsData, ...action.payload];
    },
  },
});

export const { addComments } = commentSlice.actions;
export default commentSlice.reducer;
