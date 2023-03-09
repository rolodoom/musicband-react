import React from "react";

function Button(props) {
  if (props.href) {
    return (
      <a
        className={`btn ${props.className || "btn-primary"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.dismissModal) {
    return (
      <button
        className={`btn ${props.className || "btn-primary"}`}
        href={props.href}
        data-bs-dismiss="modal"
        type={props.type || "button"}
      >
        {props.children}
      </button>
    );
  }
  return (
    <button className={`btn ${props.className || "btn-primary"}`}>
      {props.children}
    </button>
  );
}

export default Button;
