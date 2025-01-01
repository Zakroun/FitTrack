import { useDispatch } from "react-redux";
import { addrecipes } from "../store/FitSlice";
import { Link } from "react-router-dom";

export default function Recipe(props){
    const recp = props.recipe
    const dispatch = useDispatch();
    const Add = (a)=>{
        dispatch(addrecipes(a))
    }
    return(
        <div className="recipe2">
            <h1>{recp.type}</h1>
            <h1>{recp.name}</h1>
            <p>{recp.description}</p>
            <ul>
                {recp.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>{recp.instructions}</p>
            <button id="btnadd" onClick={() => Add(recp)}>Add to my recipes</button><br /> <br />
            <Link className="link" to={'/pages/Recipes'}> {'<  '} return to recipes </Link>
        </div>
    )
}