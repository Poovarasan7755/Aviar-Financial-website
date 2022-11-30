import React from "react";
import { BiDetail, BiDollarCircle } from "react-icons/bi";
import { BsCardChecklist, BsPersonLinesFill } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { FaDollyFlatbed } from "react-icons/fa";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "../css/Sidebar.scss";

export default function Sidebar(props) {
  console.log("props sidebar:>> ", props);
  return (
    <>
      <div className=" open d-none d-sm-none d-md-block">
        {/* <div style={{ width: 240, backgroundColor: "aliceblue",position:"fixed",top:"1" }}> */}
        <div className="sidebarcontent open pt-2">
          <div>
            <div>
              <NavLink to="/forms/step-1" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
                <BiDetail size={21} className="me-2" />
                Loan Details
              </NavLink>
            </div>
            <div>
              <NavLink to="/forms/step-3" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
                <BsPersonLinesFill size={21} className="me-2" />
                Personal Information
              </NavLink>
            </div>
            <div>
              <NavLink to="/forms/asset" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
                <BiDollarCircle size={21} className="me-2" />
                Assets
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/forms/employement-and-income-details"
                className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}
              >
                <FaDollyFlatbed size={21} className="me-2" />
                Employment & Income
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/forms/liabilities"
                className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}
              >
                <CgShoppingBag size={21} className="me-2" />
                Liabilities
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/forms/declaration"
                className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}
              >
                <MdOutlineSpeakerNotes size={21} className="me-2" />
                Declarations
              </NavLink>
            </div>
            <div>
              <NavLink to="/forms/summary" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
                <BsCardChecklist size={21} className="me-2" />
                Summary
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// height:100vh
