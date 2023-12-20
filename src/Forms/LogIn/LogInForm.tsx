"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./SignInForms.scss";

export type AddressType = {
  street: string;
  street_2: string;
  state: string;
  country: string;
  zip: string;
};

export type SignInForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  lastname: string;
  phone: string;
  birthday: string | Date;
  base_address: AddressType;
};

const formTest = {
  username: "tes3nal",
  email: "fiss3dal@test.com",
  password: "asdf1234",
  confirmPassword: "asdf1234",
  name: "final test",
  lastname: "apeido final",
  phone: "66422443970",
  birthday: "2003-12-12",
  base_address: {
    street: "calle prueba #34",
    street_2: "Residencial aguacaliente",
    state: "Sonora",
    country: "Argentina",
    zip: "22000",
  },
};

// Esta funcion registra a un Usuario nuevo, no requiere Auth
export async function postNewUser(userData: any) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(userData);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      mode: "cors",
      redirect: "follow",
    };

    const res = await fetch(
      `http://localhost:1337/api/auth/local/register`,
      requestOptions as any
    )
      .then((res) => res.text())
      .then((result) => result)
      .catch((error) => console.log("error", error));

    return JSON.parse(res as string);
  } catch (error) {
    console.error("Error during postNewUser:", error);
    throw error;
  }
}

// Esta funcion registra un CLiente nuevo (Obtiene el Barrer de postNewUser())
export async function postNewCustomer(customerData: any, token: any) {
  console.log("todo bien", token);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
    `Bearer ${token.jwt}`
  );

  var raw = JSON.stringify({
    data: {
      ...customerData,
      users_permissions_user: token.user.id,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res= await fetch("http://localhost:1337/api/customers/", requestOptions as any)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));


    const data = JSON.parse(res as string)
  return {Response, data}
}

export default function LogInForm() {
  const [formData, setFormData] = useState<SignInForm>(formTest);
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    const jwtToken = await postNewUser(userData);

    const customerData = {
      name: formData.name,
      lastname: formData.lastname,
      phone: formData.phone,
      birthday: formData.birthday,
      base_address: {
        street: formData.base_address.street,
        street_2: formData.base_address.street_2,
        state: formData.base_address.state,
        country: formData.base_address.country,
        zip: formData.base_address.zip,
      },
    };
    const customer = await postNewCustomer(customerData, jwtToken);

    console.log(customer.Response, customer.data)

  };

  const onChange = (event: any) => {
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
        <h4>User Data</h4>

        <div className="formRow">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="text"
            value={formData.username}
            onChange={(event: any) => onChange(event)}
          />
        </div>
        <div className="formRow">
          <label htmlFor="">Contrasenia </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(event: any) => onChange(event)}
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
        No tienes cuenta..? <Link href={"#"}>Registrate aqui..</Link>
      </div>
    </form>
  );
}
