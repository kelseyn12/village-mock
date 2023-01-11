import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="gridWrapper">
          <div className="nav-col1">
            <Link className="logo" href="/">
              VILLAGE
            </Link>
            <input className="searchBar" type="text" placeholder="Search..." />
          </div>
          <div className="nav-col2">
            <Link className="navItem" href="/find-programs">
              Find Programs
            </Link>
            <Link className="navItem" href="/plan-programs">
              Plan Programs
            </Link>
            <Link className="navItem" href="/about">
              About
            </Link>
            <Link className="navItem" href="/donate">
              Donate
            </Link>
            <button className="navItem logInButton">Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
