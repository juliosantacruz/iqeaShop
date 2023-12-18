import React from "react";
import "./LogIn.scss";
import Image from "next/image";
import bgImage from "@/assets/contactoImg.jpg";
import logoImage from "@/assets/logo_temporal.png";
import Link from "next/link";

export default function SignIn() {
  return (
    <section className="signInPage">
      <div className="signInImg">
        <Image src={bgImage} alt="background image" />
      </div>

      <div className="signInData">
        <form action="" className="signInForm">
          <div className="formTitle">
            <h2>Iniciar Sesion</h2>
          </div>{" "}
          <Image src={logoImage} alt="logo" />
          <div className="formRow">
            <label htmlFor="">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="formRow">
            <label htmlFor="">Contrasenia </label>
            <input type="password" name="password" />
          </div>
          <div className="forgotPassword">
          <Link href={"#"}>Olvidaste tu contrasenia..?</Link>

          </div>
          <div className="formBtn">
            <button type="submit">Inciar Sesion</button>
          </div>
          <div className="formNewUser">
            No tienes cuenta..? <Link href={"#"}>Registrate aqui..</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
