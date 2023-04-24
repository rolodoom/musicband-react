import React from "react";

import "./Message.scss";

const Message = ({ children, className }) => {
  const classes = className ? `message ${className}` : "message";

  return <div className={classes}>{children}</div>;
};

export default Message;
