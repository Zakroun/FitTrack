import { createSlice } from "@reduxjs/toolkit";
import { weeklyGymPrograms, muscleGroups, gymRecipes } from "../data";
export const FitSlice = createSlice({
  name: "fit",
  initialState: {
    tabProgram: weeklyGymPrograms,
    tabExercice: muscleGroups,
    tabgymRecipes: gymRecipes,
    tabuserexercice: [],
  },
});
