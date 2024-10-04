// RecipeTag.tsx
import React from "react";

interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <button onClick={() => onSelectTag(tagName)}>
      {tagName}
    </button>
  );
};

export default RecipeTag;
