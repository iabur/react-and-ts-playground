import style from "./Button.module.css";

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
  onclick: () => void;
}

const Button = ({ name, color = "danger", onclick }: ButtonProps) => {
  return (
    <button
      className={[style.btn, style["btn-" + color]].join(" ")}
      onClick={onclick}
    >
      {name}
    </button>
  );
};

export default Button;
