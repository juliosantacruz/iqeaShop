import React from "react";
import "./Perfil.scss";
import { getCustomerData } from "@/services/fetchData";

export default async function Perfil() {
  const userData = await getCustomerData();

  const { id, username, email, customer } = userData;

  const { name, lastname, birthday, phone, orders, base_address } = customer;
  // console.log(base_address);

  const { street, street_2, state, country, zip } = base_address;
  return (
    <section className="userPerfil">
      <div className="pageHeader">
      <h1> User Perfil :D</h1>
      <button>Edit</button>
      </div>

      <div className="userData">
        <div className="userDataRow">
          <p className="title">Nombre:</p>
          <p className="data">{name}</p>
        </div>
        <div className="userDataRow">
          <p className="title">Apeido:</p>
          <p className="data">{lastname}</p>
        </div>
        <div className="userDataRow">
          <p className="title">Email registrado:</p>
          <p className="data">{email}</p>
        </div>
        <div className="userDataRow">
          <p className="title">Nombre de Usuario:</p>
          <p className="data">{username}</p>
        </div>
        <div className="userDataRow">
          <p className="title">Telefono:</p>
          <p className="data">{phone}</p>
        </div>
        <div className="userDataRow">
          <p className="title">Fecha de Cumpleaños:</p>
          <p className="data"> {birthday}</p>
        </div>
      </div>

      <div className="userAddress">
        <h3>Direccion Base</h3>
        {base_address ? (
          <div className="userAddressData">
            <div className="userDataRow">
              <p  className="title">Calle:</p>
              <p className="data">{street}</p>
            </div>
            <div className="userDataRow">
              <p  className="title">Colonia / Fraccionamiento:</p>
              <p className="data">{street_2}</p>
            </div>
            <div className="userDataRow">
              <p  className="title">Estado:</p>
              <p className="data">{state}</p>
            </div>
            <div className="userDataRow">
              <p  className="title">Pais:</p>
              <p className="data">{country}</p>
            </div>
            <div className="userDataRow">
              <p  className="title">Codigo Postal:</p>
              <p className="data">{zip}</p>
            </div>
          </div>
        ) : (
          <p>No data</p>
        )}
      </div>

      <div className="userOrders">
        <h2>Mis Ordenes</h2>

        <div className="ordersGroup">
          {orders.length > 0 && (
            <>
              <h3>Mis Ordenes :D</h3>
            </>
          )}
          <ul>
            <li>
              <h3>Orden #2342s</h3>
            </li>
            <li>
              <h3>Orden #2s42h</h3>
            </li>
            <li>
              <h3>Orden #3442f</h3>
            </li>
            <li>
              <h3>Orden #1s426</h3>
            </li>
            <li>
              <h3>Orden #9d42c</h3>
            </li>
            <li>
              <h3>Orden #9s429</h3>
            </li>
          </ul>
        </div>
        {/* <pre>

        {userData}
      </pre> */}
      </div>
    </section>
  );
}
