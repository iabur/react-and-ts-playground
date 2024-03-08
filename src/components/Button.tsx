interface ButtonProps {
  name: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = ({ name, color = "primary" }: ButtonProps) => {
  return <div className={`btn btn-${color}`}>{name}</div>;
};

export default Button;
