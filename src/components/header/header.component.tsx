import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { ColorThemeContext } from "../../App";

interface HeaderProps {
  switchColorTheme: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = (props) => {
  const theme = useContext(ColorThemeContext);
  return (
    <Nav className="justify-content-end border-bottom">
      <Nav.Item className="d-flex align-items-center">
        <Button
          className="my-2 mx-4"
          onClick={props.switchColorTheme}
          variant={theme.button}
        >
          <FontAwesomeIcon style={{ height: "1rem" }} icon={theme.icon} />
        </Button>
      </Nav.Item>
    </Nav>
  );
};
