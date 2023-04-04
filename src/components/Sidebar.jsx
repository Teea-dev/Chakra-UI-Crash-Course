import { List } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";
import icon1 from "../assets/images/icon-1.svg";
import icon2 from "../assets/images/icon-2.svg";
import icon3 from "../assets/images/icon-3.svg";
import icon4 from "../assets/images/icon-4.svg";
import icon5 from "../assets/images/icon-5.svg";
import icon6 from "../assets/images/icon-6.svg";
import icon7 from "../assets/images/icon-7.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List color="white" fontSize="1em" spacing={4}>
        <div className="seperate">
          <NavLink to="/" className="sidebar-item ">
            <img src={icon1} alt="" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/create" className="sidebar-item">
            <img src={icon2} alt="" />
            <span>Analytics</span>
          </NavLink>

          <NavLink to="/profile" className="sidebar-item">
            <img src={icon3} alt="" />

            <span>Positions</span>
          </NavLink>

          <NavLink to="/notifications" className="sidebar-item">
            <img src={icon5} alt="" />
            <span>Notifications</span>
          </NavLink>
        </div>
        <div className="bot">
          <NavLink to="/bots" className="sidebar-item">
            <img src={icon4} alt="" />
            <span>Bots</span>
          </NavLink>

          <NavLink to="/signal" className="sidebar-item">
            <img src={icon6} alt="" />
            <span>Signal Groups</span>{" "}
          </NavLink>
        </div>

<div className="mode">

        <div className="sidebar-item">
          <img src={icon7} alt="" />
          <NavLink to="/mode">Dark mode</NavLink>
        </div>
</div>
      </List>
    </div>
  );
};

export default Sidebar;
