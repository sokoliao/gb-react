import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ColorThemeContext } from "../../App";

interface HeaderProps {
  switchColorTheme: () => void;
}

export const HeaderComponent: React.FC<HeaderProps> = (props) => {
  const theme = useContext(ColorThemeContext);
  return (
    <Nav className="justify-content-start border-bottom align-items-center">
      <Nav.Item>
        <Link className="nav-link" to="/chats">
          Chats
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
      </Nav.Item>
      <div className="flex-grow-1"></div>
      <Nav.Item className="d-flex align-items-center align-self-end">
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
