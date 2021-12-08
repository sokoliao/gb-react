import React, { useContext, useState } from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ColorThemeContext } from "../../App";
import { HeaderComponent } from "../header/header.component";
import "./layout.css";

interface LayoutProps {
  switchColorTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const theme = useContext(ColorThemeContext);
  return (
    <ColorThemeContext.Provider value={theme}>
      <Container
        fluid
        className={`height-100vh d-flex flex-column p-0 ${theme.background} ${theme.text}`}
      >
        <HeaderComponent
          switchColorTheme={props.switchColorTheme}
        ></HeaderComponent>
        <Row className="overflow-hidden flex-grow-1 m-0 flex-nowrap">
          {<Outlet />}
        </Row>
      </Container>
    </ColorThemeContext.Provider>
  );
};
