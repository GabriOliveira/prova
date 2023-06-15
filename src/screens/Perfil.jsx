import React from "react";
import { CiShop } from "react-icons/ci";
import { FiSlack } from "react-icons/fi";
import { HiUser } from "react-icons/hi";


export default function Perfil() {
  return (
    <div className='pai'>
      <div className="navbar">
        <CiShop size="100" />
        <FiSlack size="100" />
        <HiUser size="100" />
        <h1>estou no perfil</h1>
      </div>
    </div>
  )
}
