import React from "react";
import { NavBar } from "../../components/NavBar";
import { Outlet } from "react-router";
import { Contacto } from "../../components/Contacto";

export const GeneralLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Contacto />
    </>
  );
};
