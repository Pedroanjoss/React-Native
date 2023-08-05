import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Input } from "../input";

interface Props extends TextInputProps{
    control: Control;
    name: string;
}

export const InputControl: React.FunctionComponent<Props>= ({
    control, name, ...otherProps
}) => {
    return (
        <Container>
            <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...otherProps}/>
        )}
        name={name}
      />
        </Container>
    )
}

