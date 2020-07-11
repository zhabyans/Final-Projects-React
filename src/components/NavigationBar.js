import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import {Footer} from '../App.js'

const Styles = styled.div`
  .navbar {
    background-color: darkorange;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: yellow;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Web Aplikasi Serbaguna</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to="/"> &nbsp; Beranda &nbsp;</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/konversi"> &nbsp; Konversi &nbsp;</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/counter"> &nbsp; Counter &nbsp;</Link>
          </Nav.Item>
          <Footer />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
