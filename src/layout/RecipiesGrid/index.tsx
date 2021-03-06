import React, { useEffect } from "react";

import { RecipiesContainer, EmptyText } from "./styled";

import { IRecipie } from "../../interfaces/Recipies";

import RecipieCard from "../../components/RecipieCard";
import RecipieSkeleton from "../../components/RecipieSkeleton";

import { useAppSelector } from "../../hooks/useAppSelector";

interface IRecipieGrid {
  itemsPerPage?: number;
  isLoading?: boolean;
  isRatable?: boolean;
  isUserRecipie?: boolean;
  isFavorites?: boolean;
  recipiesData: IRecipie[];
  emptyText: string;
}

const RecipieGrid: React.FC<IRecipieGrid> = ({
  recipiesData,
  isFavorites,
  isUserRecipie,
  isLoading,
  itemsPerPage,
  emptyText,
}) => {
  const { userId } = useAppSelector((state) => state.user);

  const recipies = recipiesData.map((recipie) => (
    <RecipieCard
      key={Math.random()}
      photoUrl={recipie.photoUrl}
      name={recipie.name}
      votes={recipie.votes}
      votesCount={recipie.votesCount}
      _id={recipie._id}
      ratings={recipie.ratings}
      isRatable={recipie.user._id !== userId}
      isUserRecipie={isUserRecipie}
      isFavorites={isFavorites}
    />
  ));

  useEffect(() => window.scrollTo({ top: 0 }), [recipiesData]);

  if (!isLoading && !recipies.length) {
    return <EmptyText>{emptyText}</EmptyText>;
  }

  return (
    <RecipiesContainer>
      {isLoading
        ? Array.from(
            { length: itemsPerPage ? +itemsPerPage : 12 },
            (_, idx) => idx + 1
          ).map((value) => <RecipieSkeleton key={value} />)
        : recipies}
    </RecipiesContainer>
  );
};

export default RecipieGrid;
