import "./index.css";

function Button(props){
    const {variant = "primary", children} = props;
    const className = `myButton myButton--${variant}`;
    return <button className={className}>{children}</button>;
}

export default Button;