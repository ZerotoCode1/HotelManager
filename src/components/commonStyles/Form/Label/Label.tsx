interface IProps {
  title: string | React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}

const Label = (props: IProps) => {
  const { title, required, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} style={{ fontWeight: 600, fontSize: "14px", cursor: "pointer" }}>
      {title} {required ? <Asterisk /> : ""}
    </label>
  );
};

export default Label;

const Asterisk = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="red"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-asterisk"
    >
      <path d="M12 6v12" />
      <path d="M17.196 9 6.804 15" />
      <path d="m6.804 9 10.392 6" />
    </svg>
  );
};
