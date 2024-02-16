import React from "react";

const recipes = [
    { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
    { id: 2, title: "Spaghetti Marinera", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
    { id: 3, title: "Spaghetti Bolognese", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" }
]

const RecipeGallery = () =>(
    <ul>
        {recipes.map(recipe =>(
            <li key={recipe.id}>
                {recipe.title}: {recipe.ingredients}: {recipe.image}
            </li>
        ))}
    </ul>
)

export default RecipeGallery