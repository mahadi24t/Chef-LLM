import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        console.log("Getting recipe...")
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredients)
            console.log("Recipe received:", recipeMarkdown)
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error("Error getting recipe:", error)
            alert("Failed to get recipe. Please check the console for details.")
        }
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length === 0 && (
                <div className="instructions">
                    <h2>How to use this app:</h2>
                    <ol>
                        <li>Add ingredients you have available by typing them in the input field above and clicking "Add ingredient". For example, try adding: chicken, rice, onions, garlic, tomatoes.</li>
                        <li>Once you've added a few ingredients, click the "Get a recipe" button to generate a recipe suggestion.</li>
                        <li>The app will use AI to create a delicious recipe based on your ingredients!</li>
                    </ol>
                </div>
            )}

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}