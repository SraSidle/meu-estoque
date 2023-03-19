import { SInput } from "./style";

interface InputType {
  label: string;
  type: string;
  placeholder: string;
  value: React.Dispatch<React.SetStateAction<string>>;
}
const Input = ({ label, type, placeholder, value }: InputType): JSX.Element => {
  return (
    <SInput>
      <label htmlFor={label}>{label}</label>
      <input
        id={`${label}-${type}`}
        name={label}
        title={`Adicione ${label}`}
        placeholder={placeholder}
        onChange={(e): void => {
          e.stopPropagation();
          value(e.target.value);
        }}
      />
    </SInput>
  );
};

export default Input;
