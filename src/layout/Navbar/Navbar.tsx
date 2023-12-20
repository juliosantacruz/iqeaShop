/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./Navbar.scss";
import logo from "@/assets/logo_temporal.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link href={"/"}>
            <img src={logo.src} alt="logo" />
          </Link>
        </div>
        <ul>
        <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/perfil"}>Perfil</Link>
          </li>
          <li>
            <Link href={"/signup"}>Registrate</Link>
          </li>
          <li>
            <Link href={"/login"}>Log In</Link>
          </li>
          <li>test 4</li>
        </ul>
      </nav>
    </header>
  );
}
