interface ButtonProps {
  className?: string;
  text: string;
  px?: string;
  py?: string;

  weight?: string;
  font?: string;
  size?: string;
  color?: string;
}

const Button = ({
  className,
  text,
  px,
  py,

  weight,
  font,
  size,
  color,
}: ButtonProps) => {
  return (
    <button
      className={`${px || "px-10"} ${py || "py-5"}   ${
        weight ? `font-${weight}` : "font-normal"
      } ${font ? `font-${font}` : ""}  ${className} ${
        size ? `text-${size}` : ""
      } ${color ? `text-${color}` : "text-white"}   text-nowrap rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
