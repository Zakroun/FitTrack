import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addexercice } from "../store/FitSlice";
export default function Programs() {
  const dispatch = useDispatch();
  const tabExercice = useSelector((s) => s.tabExercice);
  const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(tabExercice);
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.background = "";
    };
  }, []);
  const Add = (a) => {
    dispatch(addexercice(a))
  };
  return (
    <div className="Programs">
      <h1 className="Programsh1">Programs</h1>
      <div className="search">
        <input
          type="text"
          id="searchinput"
          placeholder="Search for a Program"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setFilterList(
              tabExercice.filter((Program) =>
                Program.muscle
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              )
            );
          }}
        />
      </div>
      <div className="Programslist">
        {filterList.map((Program, index) => {
          return (
            <div key={index} className="Program">
              <h1 className="Programsh2">{Program.muscle}</h1>
              <div className="listexercice">
                {Program.exercises.map((exercice, index) => {
                  return (
                    <div key={index} className="exercice">
                      <h3>{exercice.name}</h3>
                      <p>{exercice.description}</p>
                    <p>Sets : {exercice.sets} | Reps : {exercice.reps}</p>
                      <button id="btnadd" onClick={() => Add(exercice)}>
                        Add to my Programs
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
