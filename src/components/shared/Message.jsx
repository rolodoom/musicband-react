import './Message.scss';

function Message({ children, className }) {
  const classes = className ? `message ${className}` : 'message';

  return <div className={classes}>{children}</div>;
}

export default Message;
