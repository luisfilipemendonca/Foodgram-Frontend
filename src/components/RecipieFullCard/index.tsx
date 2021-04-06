import React, { useState } from "react";
import { FaArrowRight, FaCircle } from "react-icons/fa";

import {
  CardContainer,
  CardImage,
  CardDetailsContainer,
  CardDetails,
  CardToggler,
  CardInformation,
  CardInformationTop,
  CardInformationBullet,
  CardInformationValue,
  CardInformationDescription,
  CardInformationBottom,
  CardInformationTitle,
  CardInformationText,
  CardNavigation,
  CardNavigationItem,
  CardNavigationBorder,
  CardDetailsContent,
  CardIngredients,
  CardIngredient,
  CardIngredientDescription,
  CardPreparationSteps,
  CardPreparationStep,
  CardStep,
  CardStepDescription,
} from "./styled";

interface IRecipieFullCard {
  photo: string;
  duration: number;
  servings: number;
  description: string;
  name: string;
  ingredients: string[];
  steps: string[];
}

const RecipieFullCard: React.FC<IRecipieFullCard> = ({
  photo,
  duration,
  servings,
  description,
  name,
  ingredients,
  steps,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState("ingredients");

  const toggleDetailsHandler = (): void => {
    setIsOpen(!isOpen);
  };

  const setSelectedNavHandler = (value: string): void => {
    setSelectedNav(value);
  };

  return (
    <CardContainer>
      <CardImage url={photo} isOpen={isOpen}>
        <CardInformation isOpen={isOpen}>
          <CardInformationTop isOpen={isOpen}>
            <CardInformationBullet>
              <CardInformationValue>{duration}</CardInformationValue>
              <CardInformationDescription>mins</CardInformationDescription>
            </CardInformationBullet>
            <CardInformationBullet>
              <CardInformationValue>{servings}</CardInformationValue>
              <CardInformationDescription>servings</CardInformationDescription>
            </CardInformationBullet>
          </CardInformationTop>
          <CardInformationBottom isOpen={isOpen}>
            <CardInformationTitle>{name}</CardInformationTitle>
            <CardInformationText>{description}</CardInformationText>
          </CardInformationBottom>
        </CardInformation>
      </CardImage>
      <CardDetailsContainer isOpen={isOpen}>
        <CardDetails isOpen={isOpen}>
          <CardNavigation>
            <CardNavigationItem
              onClick={() => setSelectedNavHandler("ingredients")}
              isSelected={selectedNav === "ingredients"}
            >
              Ingredients
            </CardNavigationItem>
            <CardNavigationItem
              onClick={() => setSelectedNavHandler("preparation")}
              isSelected={selectedNav === "preparation"}
            >
              Preparation
            </CardNavigationItem>
          </CardNavigation>
          <CardNavigationBorder />
          <CardDetailsContent>
            {selectedNav === "ingredients" && (
              <CardIngredients>
                {ingredients.map((ingredient) => (
                  <CardIngredient key={Math.random()}>
                    <FaCircle />
                    <CardIngredientDescription>
                      {ingredient}
                    </CardIngredientDescription>
                  </CardIngredient>
                ))}
              </CardIngredients>
            )}
            {selectedNav === "preparation" && (
              <CardPreparationSteps>
                {steps.map((step, index) => (
                  <CardPreparationStep key={Math.random()}>
                    <CardStep>Step {++index}</CardStep>
                    <CardStepDescription>{step}</CardStepDescription>
                  </CardPreparationStep>
                ))}
              </CardPreparationSteps>
            )}
          </CardDetailsContent>
        </CardDetails>
      </CardDetailsContainer>
      <CardToggler isOpen={isOpen} onClick={toggleDetailsHandler}>
        <FaArrowRight color="#fff" />
      </CardToggler>
    </CardContainer>
  );
};

export default RecipieFullCard;