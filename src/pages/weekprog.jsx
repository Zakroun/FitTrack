import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addworkout } from "../store/FitSlice";
//import { Link } from "react-router-dom";
export default function WeekPrograme() {
  const dispatch = useDispatch();
  const tabProgram = useSelector((s) => s.tabProgram);
  //   const [search, setSearch] = useState("");
  const [filterList, setFilterList] = useState(tabProgram);
  useEffect(() => {
    setFilterList(tabProgram);
  }, [tabProgram]);
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  const Save = (w) => {
    console.log(w);
    dispatch(addworkout(w));
  };
  return (
    <div className="WeekPrograme">
      <h1 className="WeekProgrameh1">weekly Gym Programs</h1>
      <h1>beginner</h1>
      <div className="WeekProgramelist">
        {filterList
          .filter((b) => b.level === "beginner")
          .map((w, k) => {
            return (
              <div key={k}>
                <h2>{w.day}</h2>
                <div className="programweek">
                  {w.workout.map((a, k) => {
                    return (
                      <div className="workout" key={k}>
                        <h2>{a.exercise}</h2>
                        <h3>{a.description}</h3>
                        <p>
                          sets : {a.sets} | reps : {a.reps}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <button className="Save" onClick={() => Save(w)}>
                  Save this workout
                </button>
              </div>
            );
          })}
      </div>

      <h1>intermediate</h1>
      <div className="WeekProgramelist">
        {filterList
          .filter((b) => b.level === "intermediate")
          .map((w, k) => {
            return (
              <div key={k}>
                <h2>{w.day}</h2>
                <div className="programweek">
                  {w.workout.map((a, k) => {
                    return (
                      <div className="workout" key={k}>
                        <h2>{a.exercise}</h2>
                        <h3>{a.description}</h3>
                        <p>
                          sets : {a.sets} | reps : {a.reps}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <button className="Save" onClick={() => Save(w)}>
                  Save this workout
                </button>
              </div>
            );
          })}
      </div>

      <h1>advanced</h1>
      <div className="WeekProgramelist">
        {filterList
          .filter((b) => b.level === "advanced")
          .map((w, k) => {
            return (
              <div key={k}>
                <h2>{w.day}</h2>
                <div className="programweek">
                  {w.workout.map((a, k) => {
                    return (
                      <div className="workout" key={k}>
                        <h2>{a.exercise}</h2>
                        <h3>{a.description}</h3>
                        <p>
                          sets : {a.sets} | reps : {a.reps}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <button className="Save" onClick={() => Save(w)}>
                  Save this workout
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
