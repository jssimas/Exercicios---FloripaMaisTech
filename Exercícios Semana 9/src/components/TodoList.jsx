import { TodoItem } from "./TodoItem";
import { useToDos } from "../contexts/useToDos";
import React from "react";

export const TodoList = ({ name }) => {
  const todosContext = useToDos();
  return (
    <section  className="col p-2 m-2 border rounded-1" >
      <h4>{name}</h4>
      <ul  className="list-group list-group-flush">
        {name === "Finalizados"
          ? todosContext.completedToDos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)
          : todosContext.pendingToDos.map((todo) => <TodoItem todo={todo} key={todo.id}/>)}
      </ul>
    </section>
  );
};