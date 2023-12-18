import React from "react";
import "./Perfil.scss";

export default function Perfil() {
  return (
    <section className="userPerfil">
      <h1> User Perfil :D</h1>

      <div className="userData">
        <div className="userDataRow">
          <p>Nombre:</p>
          <p>Kim youn un</p>
        </div>
        <div className="userDataRow">
          <p>Compania:</p>
          <p>Nombre de Empresa</p>
        </div>
        <div className="userDataRow">
          <p>Email registrado:</p>
          <p>test@email.com</p>
        </div>
        <div className="userDataRow">
          <p>Telefono:</p>
          <p>664 215 15 15</p>
        </div>
        <div className="userDataRow">
          <p>nombre:</p>
          <p>Kim youn un</p>
        </div>
      </div>

      <div className="userOrders">
        <h2>Mis Ordenes</h2>

        <div className="ordersGroup">
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
      </div>
    </section>
  );
}
