import React from "react";
import { CiShop } from "react-icons/ci";
import { FiSlack } from "react-icons/fi";
import { HiUser } from "react-icons/hi";


export default function App() {
  return (
    <div className="pai">
      <div className="navbar">
        <CiShop size="100" />
        <FiSlack size="100" />
        <HiUser size="100" />
      </div>
      <div className="conteudo">
        <div className="topo"></div>
        <div className="cards">
          <div className="item1"></div>
          <div className="item2"></div>
          <div className="item3"></div>
        </div>
        <h1>estou na home</h1>
      </div>
    </div>
  );
}
