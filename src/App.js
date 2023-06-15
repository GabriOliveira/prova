import React from "react";
import { Route, Routes } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { FiSlack } from "react-icons/fi";
import { HiUser } from "react-icons/hi";
import Config from "./screens/Config";
import Perfil from "./screens/Perfil";
import Home from "./screens/Home";

export default function Routas() {
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/config" element={<Config />} />
    </Route>
  </Routes>;

  return (
    <div>
      <CiShop size="100" />
        <FiSlack size="100" />
        <HiUser size="100" />
    </div>
  );
}
