import React from "react";
import "./SignIn.scss";
import Image from "next/image";
import bgImage from "@/assets/contactoImg.jpg";
import logoImage from "@/assets/logo_temporal.png";
import Link from "next/link";
import SignInForm from "@/Forms/SignInForm"

export default async function SignIn() {




  return (
    <section className="signInPage">
      <div className="signInImg">
        <Image src={bgImage} alt="background image" />
      </div>

      <div className="signInData">
        <div className="signInDataHeader">
          <div className="formTitle">
            <h2>Iniciar Sesion</h2>
          </div>{" "}
          <Image src={logoImage} alt="logo" />
        </div>
        <div className="signInDataContent">
          <SignInForm />
        </div>
      </div>
    </section>
  );
}
