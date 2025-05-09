import React from "react";
import "./Navbar.css";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch=useDispatch()
  const {auth}=useSelector(store=>store)
  return (
    <div className="container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center">
      <p className="font-bold text-lg">Namratha Task Manager</p>
      <div className="flex items-center gap-5">
        <p className="font-semibold text-lgx">{auth.user.fullName}</p>
        <Avatar
          alt="Remy Sharp"
          src="https://png.pngtree.com/png-clipart/20230613/ourmid/pngtree-3d-illustration-creative-conceptual-art-todo-list-task-manager-png-image_7136762.png"
        />
      </div>
    </div>
  );
};

export default Navbar;
