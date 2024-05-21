import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import PropTypes from "prop-types";
import { BASE_URL } from "../constants";
import reducer from "../reducer";
import { initialState } from "../initialState";
import { ACTIONS } from "../actions";

const CitiesContext = createContext();

CitiesProvider.propTypes = {
  children: PropTypes.any,
};

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: ACTIONS.LOADING });
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: ACTIONS.LOADED, payload: data });
      } catch (err) {
        dispatch({
          type: ACTIONS.REJECTED,
          payload: "There was an error loading data (try run npm run cities)",
        });
      }
    }
    fetchCities();
  }, []);

  // important to prevent infinite callback loop in City.jsx
  const getCity = useCallback(
    async function getCity(id) {
      if (id === currentCity.id) return;
      dispatch({ type: ACTIONS.LOADING });
      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: ACTIONS.CITY_LOADED, payload: data });
      } catch (err) {
        dispatch({
          type: ACTIONS.REJECTED,
          payload:
            "There was an error loading the city (try run npm run cities)",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: ACTIONS.LOADING });
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: ACTIONS.CREATED, payload: data });
    } catch (err) {
      dispatch({
        type: ACTIONS.REJECTED,
        payload: "There was an error creating the city",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: ACTIONS.LOADING });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: ACTIONS.DELETED, payload: id });
    } catch (err) {
      dispatch({
        type: ACTIONS.REJECTED,
        payload: "There was an error deleting the city ",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was called outside of the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
