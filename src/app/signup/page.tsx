"use client";
import React, { useState } from "react";
import "./SignUp.scss";
import Image from "next/image";
import bgImage from "@/assets/contactoImg.jpg";
import logoImage from "@/assets/logo_temporal.png";
import Link from "next/link";
import SignUpForm from "@/Forms/SignUp/SignUpForm";
import NewCustomerForm from "@/Forms/NewCustomer/NewCustomerForm";
import LoadingSpiner from "@/components/LoadingSpiner";


export default function SignIn() {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();


  return (
    <section className="signInPage">
      <div className="signInImg">
        <Image src={bgImage} alt="background image" />
      </div>

      <div className="signInData">
        <div className="signInDataHeader">
          <div className="formTitle">
            <h2>Registrate</h2>
          </div>{" "}
          <Image src={logoImage} alt="logo" />
        </div>
        <div className="signInDataContent">
          {!isRegister && (
            <SignUpForm
              setLoading={setLoading}
              setToken={setToken}
              setIsRegister={setIsRegister}
            />
          )}
          {loading && <LoadingSpiner />}
          {isRegister && !loading && <NewCustomerForm token={token}/> }
        </div>
      </div>
    </section>
  );
}
