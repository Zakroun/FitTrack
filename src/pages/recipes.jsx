import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addrecipes } from "../store/FitSlice";
import { Link } from "react-router-dom";
export default function Recipes() {
    const dispatch = useDispatch();
    const ListRecipes = useSelector((s) => s.tabgymRecipes);
    const [search, setSearch] = useState("");
    const [filterList, setFilterList] = useState(ListRecipes);

    const Add = (a)=>{
        dispatch(addrecipes(a))
    }
    return(
        <div className="recipes">
            <h1 className="recipesh1">Recipes</h1>
            <div className="search">
                <input type="text" id="searchinput" placeholder="Search for a recipe" value={search} onChange={(e) => {
                    setSearch(e.target.value);
                    setFilterList(ListRecipes.filter((recipe) => recipe.name.toLowerCase().includes(e.target.value.toLowerCase()) || recipe.type.toLowerCase().includes(e.target.value.toLowerCase())));
                }} />
            </div>
            <div className="recipeslist">
                {filterList.map((recipe, index) => (
                    <div className="recipe" key={index}>
                        <h2>{recipe.type}</h2>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.description}</p>
                        {/* <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <p>{recipe.instructions}</p> */}
                        <button id="btnadd" onClick={() => Add(recipe)}>Add to my recipes</button>
                        <Link to={`/pages/recipe`} state={recipe}><button id="btnview">View recipe</button></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}