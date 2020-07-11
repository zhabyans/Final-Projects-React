import React from "react";
import Contact from "./Contact";
import List from "./List";

//========================================HALAMAN INI MENGGUNAKAN=================================
//================================MENGGUNAKAN CLASS DAN FUNCTION COMPONENT===========================
//==============================MENGGUNAKAN TEKNIK EXTRACTING, COMPOSING==========================

const Informasi = () => {
  return (
    <>
      <h2>Selamat Datang</h2>
      <p>
        Sebagai informasi, Website ini dibangun menggunakan React. React adalah
        library Javascript terpopuler untuk membuat user interface (UI). Tool
        ini menawarkan respons cepat untuk user input dengan menggunakan metode
        baru dalam proses rendering website. Komponen dari tool ini dikembangkan
        oleh Facebook. Dahulunya tool ini diluncurkan sebagai tool open-source
        JavaScript di tahun 2013. Saat ini, React tetap terdepan mendahului
        kompetitornya seperti Angular dan Bootstrap, dua library JavaScript
        terlaris.
      </p>
    </>
  );
};

export class Home extends React.Component {
  render() {
    return (
      <div>
        {/* MENGGUNAKAN TEKNIK EXTRACTING */}
        <Informasi />
        {/* MENGGUNAKAN LIST */}
        <List />
        {/* MENGGUNAKAN TEKNIK COMPOSING */}
        <Contact data="Jika ada saran/pertanyaan hubungi kami" />
      </div>
    );
  }
}
