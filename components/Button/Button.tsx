import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

export const Button = ({ appreance, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appreance === "primary",
        [styles.ghost]: appreance === "ghost",
      })}
    >
      {children}
    </button>
  );
};
