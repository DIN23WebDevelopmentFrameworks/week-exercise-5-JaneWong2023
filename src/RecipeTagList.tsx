// RecipeTagList.tsx
import React from "react";
import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <div>
      {tagList.map((tag, index) => (
        <RecipeTag key={index} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </div>
  );
};

export default RecipeTagList;
