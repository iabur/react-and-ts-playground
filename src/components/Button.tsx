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
  onclick?: () => void;
}

const Button = ({ name, color = "primary", onclick }: ButtonProps) => {
  return (
    <div className={`btn btn-${color}`} onClick={onclick}>
      {name}
    </div>
  );
};

export default Button;
