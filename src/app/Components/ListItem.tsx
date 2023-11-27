import React, { memo, useState } from "react";

interface Props {}

const ListItem = ({ todo, addTodo }: any) => {
  console.log("listitem render");
  return (
    <div>
      <div>
        {todo &&
          todo.map((elt: any, index: any) => {
            return <div key={index}>new Elt{index}</div>;
          })}
      </div>
      <div>
        <button onClick={addTodo}>add element</button>
      </div>
    </div>
  );
};

export default memo(ListItem);
