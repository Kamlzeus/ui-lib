import "./index.css";

function Button(props) {
  const { variant = "primary", size = "md", children } = props;
  const className = `myButton myButton--${variant} myButton--${size}`;
  return <button className={className}>{children}</button>;
}

export default Button;
