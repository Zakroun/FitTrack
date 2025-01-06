import { createSlice } from "@reduxjs/toolkit";
import { weeklyGymPrograms, muscleGroups, gymRecipes } from "../data";
export const FitSlice = createSlice({
  name: "fit",
  initialState: {
    tabProgram: weeklyGymPrograms,
    tabExercice: muscleGroups,
    tabgymRecipes: gymRecipes,
    tabuserexercice: [],
    tabRecipes: [],
    tabmessages: [],
    tabweeklyworkout: [],
  },
  reducers: {
    addrecipes: (state, action) => {
      state.tabRecipes.push(action.payload);
      alert("Recipe added to your recipes");
    },
    sendmessage: (state, action) => {
      state.tabmessages.push(action.payload);
      alert("Message sent");
    },
    addexercice: (state, action) => {
      state.tabuserexercice.push(action.payload);
      alert("Exercice added to your programs");
    },
    addworkout: (state, action) => {
      state.tabweeklyworkout.push(action.payload);
      alert("workout added to your wourkout Programe");
    },
  },
});
export const { addrecipes, sendmessage, addexercice, addworkout } =
  FitSlice.actions;
