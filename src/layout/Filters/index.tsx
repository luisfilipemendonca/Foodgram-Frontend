import React, { useState } from "react";

import { FiltersContainer } from "./styled";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import { setItemsPerPage, setItemsOrder } from "../../store/recipies/slice";

import RadioGroup from "../../components/Inputs/RadioGroup";

const sortInputs = [
  { type: "radio", id: "recent", label: "Recents Recipies" },
  { type: "radio", id: "old", label: "Old Recipies" },
  { type: "radio", id: "highStars", label: "High Rating" },
  { type: "radio", id: "lowStars", label: "Low Rating" },
];

const recipiesQttyInputs = [
  { type: "radio", id: "6", label: "Six Recipies" },
  { type: "radio", id: "12", label: "Twelve Recipies" },
  { type: "radio", id: "18", label: "Eighteen Recipies" },
];

const Filters: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { itemsOrderValue, itemsPerPage } = useAppSelector(
    (state) => state.recipies
  );

  const toggleFilters = () => setIsFiltersOpen(!isFiltersOpen);

  const itemsPerPageHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setItemsPerPage(e.currentTarget.value));
  };

  const itemsOrderHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setItemsOrder(e.currentTarget.value));
  };

  return (
    <FiltersContainer isOpen={isFiltersOpen}>
      <div className="filters__visible">
        <input type="text" placeholder="Search by recipie name.." />
        <div className="filters__cta">
          <button>Search</button>
          <button onClick={toggleFilters}>Filters</button>
        </div>
      </div>
      <ul className="filters__menu">
        <li className="filters__item">
          <RadioGroup
            inputs={sortInputs}
            changeHandler={itemsOrderHandler}
            title="Sort By"
            selectedValue={itemsOrderValue}
            name="sort"
          />
        </li>
        <li>
          <RadioGroup
            title="Items Per Page"
            changeHandler={itemsPerPageHandler}
            inputs={recipiesQttyInputs}
            selectedValue={itemsPerPage}
            name="itemsPerPage"
          />
        </li>
      </ul>
    </FiltersContainer>
  );
};

export default Filters;
