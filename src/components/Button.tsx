interface ButtonProps {
  value: string;
  active?: boolean;
  onClick: () => void;
}

const Button = ({ value, active = false, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 box-border border 
      ${active ? "border-gray-200 border rounded-sm" : "border-transparent"}
      `}
    >
      {value}
    </button>
  );
};

export default Button;
