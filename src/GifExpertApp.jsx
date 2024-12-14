import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Drangon Ball"]);
  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  };


  return (
    <>
      <h1>Boxes Gifs</h1>

      <AddCategory 
        onNewCategory={ onAddCategory }
      />

      { 
        categories.map((category) => ( <GifGrid key={category} category={category}/> ))
      }

    </>
  );
};