import { createSlice } from "@reduxjs/toolkit";
import { estuchesList } from "../helpers/estuches";

export const estuchesSlice = createSlice({
  name: "estuches",
  initialState: {
    slug: "iphone-14-pro-max",
    title: "iPhone 14 Pro Max",
    listaEstuches: [],
    loading: false,
  },
  reducers: {
    getEstuches: (state, action) => {
      const { slug, title, estuches } = action.payload;
      state.slug = slug;
      state.title = title;
      state.listaEstuches = estuches.filter(estuche => estuche.tags.includes(title));
    },
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const startFilterEstuches = ({ slug, title }) => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    const estuches =  estuchesList;
    dispatch(getEstuches({ slug, title, estuches }));
    dispatch(setLoadingState(false));
  };
};

export const { getEstuches, setLoadingState } = estuchesSlice.actions;
