import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../store/reducers/commentsSlice";

interface Props {}

const HomePage: React.FC<Props> = () => {
  const commentsData = useSelector((state: any) => state.comments);
  const dispatch = useDispatch();
  console.warn("store state", commentsData);
  return <div>this is homepage</div>;
};

export default HomePage;
