import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";
import cn from "classnames";

export const Button = ({
  appreance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appreance == "primary",
        [styles.ghost]: appreance == "ghost",
      })}
      {...props}
    >
      {children}
      {arrow != "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
