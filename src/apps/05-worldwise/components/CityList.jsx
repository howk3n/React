import styles from "./CityList.module.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";

CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem data={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
