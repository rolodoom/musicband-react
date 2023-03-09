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
  return (
    <button
      className={`btn ${props.className || "btn-primary"}`}
      data-bs-dismiss="modal"
      type="button"
    >
      {props.children}
    </button>
  );
}

export default Button;
