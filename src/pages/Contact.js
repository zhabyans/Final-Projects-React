import React from "react";
import Forms from "./Forms";

//============================CONTACT MENGGUNAKAN FUNCTION COMPONENT================================
const Contact = ({data}) => {
  return (
    <div>
      <br /> <br />
      <h3>Hubungi Kami</h3>
      <p>{data}</p>
      <Forms />
      <br />
      <a href="https://fb.me/zhabyans">Facebook</a> <br />
      <a href="https://m.me/zhabyans">Messengger</a>
    </div>
  );
}

export default Contact;
