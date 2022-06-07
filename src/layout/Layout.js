import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Layout = ({ children }) => {
  // ** this is because we are using AOS library in next.js
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    AOS.init();
  }

  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
