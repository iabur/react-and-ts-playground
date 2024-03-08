import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Prop) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
