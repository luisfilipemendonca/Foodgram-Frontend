import React, { useState } from "react";
import { Link } from "react-router-dom";

import { findRecipieInput } from "../../constants/inputs";

import Input from "../../components/Inputs";
import BaseButton from "../../components/BaseButton";

import { CtaContainer, Actions } from "./styled";

interface IMyRecipieCta {
  isFavorites: boolean;
  recipieNameFilterHandler: (value: string) => void;
}

const RecipieSearch: React.FC<IMyRecipieCta> = ({
  recipieNameFilterHandler,
  isFavorites,
}) => {
  const [input, setInput] = useState(findRecipieInput);

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({ ...input, value: e.currentTarget.value });
  };

  return (
    <CtaContainer>
      <Input
        type={input.type}
        name={input.name}
        placeholder={input.placeholder}
        value={input.value}
        errorMsg={input.errorMsg}
        isInvalid={input.isInvalid}
        changeHandler={inputChangeHandler}
        focusHandler={() => {}}
      />
      <Actions>
        <BaseButton
          type="button"
          role="button"
          className="secondary"
          clickHandler={() =>
            recipieNameFilterHandler(
              typeof input.value === "string" ? input.value : ""
            )
          }
        >
          Search
        </BaseButton>
        {!isFavorites && (
          <BaseButton role="link" className="primary" path="/my_recipies/add">
            Add Recipie
          </BaseButton>
        )}
      </Actions>
    </CtaContainer>
  );
};

export default RecipieSearch;
