/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
            </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}

          {/*begin::1 Level*/}
         
          
          <li
             className={`menu-item ${getMenuItemActive(
              "/admin/users"
          )}`}
          >
            <NavLink className="menu-link"  to="/admin/users">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
              <span className="menu-text">Users</span>
            </NavLink>
            
            <NavLink className="menu-link"  to="/admin/farmers">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
              <span className="menu-text">Farmers</span>
            </NavLink>
            
            <NavLink className="menu-link"  to="/admin/agents">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
              <span className="menu-text">Agents</span>
            </NavLink>
            
            <NavLink className="menu-link"  to="/admin/products">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
              <span className="menu-text">Products</span>
            </NavLink>
            
            <NavLink className="menu-link"  to="/admin/orders">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
              <span className="menu-text">Orders</span>
            </NavLink>
            
           
          </li>
          
          
        
          {/*end::1 Level*/}

          {/* Custom */}
          {/* begin::section */}
        
        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
