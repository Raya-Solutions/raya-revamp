import { withTranslation } from "react-i18next";
import { Container, StyledSelect } from "./styles";
import { Label } from "../TextArea/styles";
import { SelectProps } from "../types";

const SelectInput = ({ name, defaultValue, value, onChange, t, children, ...rest }: SelectProps) => (
  <Container>
      <Label htmlFor={name}>{t(name)}</Label>
    <StyledSelect
      id={name}
      defaultValue={defaultValue}
      value={value}
      {...rest}
    >
    {children}
    </StyledSelect>
  </Container>
);

export default withTranslation()(SelectInput);
