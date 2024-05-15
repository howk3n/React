import { ACTIONS } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.LOADED:
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case ACTIONS.REJECTED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ACTIONS.CITY_LOADED:
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case ACTIONS.CREATED:
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case ACTIONS.DELETED:
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((cities) => cities.id !== action.payload),
        currentCity:
          state.currentCity.id === action.payload ? {} : state.currentCity,
      };
    default:
      throw new Error("Unrecognized action type for reducer");
  }
}
