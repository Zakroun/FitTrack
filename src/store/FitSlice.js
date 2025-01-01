import { createSlice } from "@reduxjs/toolkit";
import { weeklyGymPrograms, muscleGroups, gymRecipes } from "../data";
export const FitSlice = createSlice({
  name: "fit",
  initialState: {
    tabProgram: weeklyGymPrograms,
    tabExercice: muscleGroups,
    tabgymRecipes: gymRecipes,
    tabuserexercice: [],
    tabRecipes : [],
    tabmessages: []
  },
  reducers:{
    addrecipes: (state, action) => {
      state.tabRecipes.push(action.payload);
      alert("Recipe added to your recipes");
    },
    sendmessage: (state, action) => {
      state.tabmessages.push(action.payload);
      alert("Message sent");
    }
  }
});
export const { addrecipes ,sendmessage} = FitSlice.actions;