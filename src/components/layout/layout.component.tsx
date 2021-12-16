import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { ColorThemeContext } from "../../App";
import { HeaderComponent } from "../header/header.component";

interface LayoutProps {
  switchColorTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const theme = useContext(ColorThemeContext);
  return (
    <Container
      fluid
      className={`vh-100 d-flex flex-column p-0 ${theme.background} ${theme.text}`}
    >
      <HeaderComponent
        switchColorTheme={props.switchColorTheme}
      ></HeaderComponent>
      <Row className="overflow-hidden flex-grow-1 m-0 flex-nowrap">
        {<Outlet />}
      </Row>
    </Container>
  );
};
