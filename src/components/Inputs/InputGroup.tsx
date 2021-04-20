import React, { useEffect, useState } from "react";

import { IInputGroup } from "../../interfaces/Inputs";

import {
  InputWrapper,
  Input,
  TextareaStyled,
  InputBorder,
  InputContainer,
  InputLabel,
} from "./styled";

const InputGroup: React.FC<IInputGroup> = ({
  label,
  name,
  placeholder,
  qtty,
  isInvalid,
  value,
  optionsType,
  changeHandler,
  focusHandler,
}) => {
  const [inputQtty, setInputQtty] = useState(qtty);

  const addMoreIngredientsHandler = () => setInputQtty(inputQtty + 1);

  const inputArr = Array.from({ length: inputQtty }, (_, idx) => ({
    id: idx,
    value: "",
  }));

  let input;

  useEffect(() => {
    setInputQtty(qtty);
  }, [qtty]);

  if (optionsType === "text") {
    input = inputArr.map((val) => (
      <InputWrapper key={val.id}>
        <Input
          id={val.id.toString()}
          type="text"
          placeholder={placeholder}
          value={value[val.id] ? value[val.id] : val.value}
          name={name}
          onFocus={() => focusHandler(name)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeHandler(e)
          }
        />
        <InputBorder isInvalid={isInvalid} />
      </InputWrapper>
    ));
  } else {
    input = inputArr.map((val) => (
      <InputWrapper key={val.id}>
        <TextareaStyled
          spellCheck={false}
          id={val.id.toString()}
          placeholder={placeholder}
          value={value[val.id] ? value[val.id] : val.value}
          name={name}
          onFocus={() => focusHandler(name)}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            changeHandler(e)
          }
        />
        <InputBorder isInvalid={isInvalid} />
      </InputWrapper>
    ));
  }

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      {input}
      <button type="button" onClick={addMoreIngredientsHandler}>
        Add More {label}
      </button>
    </InputContainer>
  );
};

export default InputGroup;
