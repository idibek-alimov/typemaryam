import React, { FC, useState } from "react";
import "./Menu.css";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {
  title?: string | JSX.Element;
  children: JSX.Element;
};

const Menu = () => {
  return (
    <div className="">
      <NavItem title={<GiHamburgerMenu />}>
        <DropdownMenu />
      </NavItem>
    </div>
  );
};
export default Menu;

const NavItem: FC<Props> = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="screen-cower"
        id={open ? "screen-cower-show" : ""}
        onClick={() => {
          setOpen(!open);
        }}
      ></div>
      <div>
        <li className="nav-item">
          <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            {title}
          </a>
        </li>
        {open && children}
      </div>
    </div>
  );
};

type SecondaryProps = {
  goToMenu?: string;
  children: JSX.Element;
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState();

  const DropdownItem: FC<SecondaryProps> = ({ children, goToMenu }) => {
    return (
      <div>
        <a
          href="#"
          className="menu-item "
          onClick={() => goToMenu && setActiveMenu(goToMenu)}
        >
          {children}
        </a>
      </div>
    );
  };
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropdownItem goToMenu="settings">
            <p>Settings</p>
          </DropdownItem>
          <Link to="/profile">
            <DropdownItem>
              <p>profile</p>
            </DropdownItem>
          </Link>
          <Link to="/create/stageone">
            <DropdownItem>
              <p>add product</p>
            </DropdownItem>
          </Link>
          <Link to="/#">
            <DropdownItem>
              <p>myorders</p>
            </DropdownItem>
          </Link>
          <Link to="/logout">
            <DropdownItem>
              <p>logout</p>
            </DropdownItem>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem goToMenu="main">
            <p>{"<"}</p>
          </DropdownItem>
          <DropdownItem>
            <p>hi motherfucker</p>
          </DropdownItem>
          <DropdownItem>
            <p>hi motherfucker</p>
          </DropdownItem>
          <DropdownItem>
            <p>hi motherfucker</p>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
