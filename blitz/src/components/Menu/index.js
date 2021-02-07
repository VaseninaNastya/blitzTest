import React from "react";
import s from "./Menu.module.css";
import classNames from 'classnames';
const Menu = ({ fonts }) => {
  const classes = fonts ? classNames(s.item, s.item_font__typical) : classNames(s.item, s.item_font__special);
  return (
    <>
      <ul className={s.header_menu}>
        <li><a className={classes} href="#">Home</a></li>
        <li><a className={classes} href="#">About Me</a></li>
        <li><a className={classes} href="#">Portfolio</a></li>
        <li><a className={classes} href="#">Contact</a></li>
      </ul>
    </>
  );
};

export default Menu;
