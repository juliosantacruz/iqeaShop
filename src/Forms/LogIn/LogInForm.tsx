"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./LogInForm.scss";
import InputComponent from "@/components/InputComponent";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export type LogInForm = {
  username: string;
  email: string;
  password: string;
};

const formTest = {
  username: "juanxD99",
  email: "test@test.com",
  password: "asdf1234",
};

export default function LogInForm() {
  const [formData, setFormData] = useState<LogInForm>(formTest);
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await signIn("credentials", {
        identifier: formData.username,
        password: formData.password,
        redirect: false,
      });
      // console.log(res)

      if ((res as any).ok) {


          router.push("/perfil");
        }
    } catch (error) {
      console.error("Error during authentication:", error);
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  };

  const handleChange = (event: any) => {
    const dato = event?.target.value;
    setFormData({
      ...formData,
      [event.target.name]: dato,
    });
  };

  return (
    <form
      action=""
      className="signInForm"
      onSubmit={(event) => handleSubmit(event)}
    >
      <fieldset title="useData">
        <div className="formRow">
          <InputComponent
            name="username"
            label="Nombre de Usuario"
            type="text"
            value={formData.username}
            inputChange={(event: any) => handleChange(event)}
          />
        </div>
        <div className="formRow">
          <InputComponent
            name="password"
            label="Contraseña"
            type="password"
            value={formData.password}
            inputChange={(event: any) => handleChange(event)}
          />
        </div>
      </fieldset>

      <div className="forgotPassword">
        <Link href={"#"}>Olvidaste tu contrasenia..?</Link>
      </div>
      <div className="formBtn">
        <button type="submit">Continuar</button>
      </div>
      <div className="formNewUser">
        No tienes cuenta..? <Link href={"/signup"}>Registrate aqui..</Link>
      </div>
    </form>
  );
}
