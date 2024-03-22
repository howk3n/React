import PropTypes from "prop-types";

Pizza.propTypes = {
  data: PropTypes.object,
};

export default function Pizza({ data }) {
  const { name, ingredients, price, photoName, soldOut } = data;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : `${price}RSD`}</span>
      </div>
    </li>
  );
}
