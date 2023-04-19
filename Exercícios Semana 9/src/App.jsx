import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import  ToDoProvider  from "./contexts/ToDoProvider";
import React from "react";

export const App = () => {
  return (
    <ToDoProvider>
      <Header />
      <main className="container mt-4">
        <Outlet/>
      </main>
    </ToDoProvider>
  );
};