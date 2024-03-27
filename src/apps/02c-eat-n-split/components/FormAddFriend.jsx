import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { imagePrefix } from "../constants";

FormAddFriend.propTypes = {
  onSubmit: PropTypes.func,
};

function FormAddFriend({ onSubmit }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState(imagePrefix);
  const [errorActive, setErrorActive] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !img) {
      setErrorActive(true);
      return;
    }
    onSubmit(name, img);
    setName("");
    setImg(imagePrefix);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input
        type="text"
        value={name}
        onSelect={() => setErrorActive(false)}
        onClick={() => setErrorActive(false)}
        onChange={(e) => {
          setName(e.target.value);
          setErrorActive(false);
        }}
        style={
          errorActive && !name
            ? { backgroundColor: "rgba(255, 0, 0, 0.4)" }
            : {}
        }
      />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={img}
        onSelect={() => setErrorActive(false)}
        onClick={() => setErrorActive(false)}
        onChange={(e) => {
          setImg(e.target.value);
          setErrorActive(false);
        }}
        style={
          errorActive && !img ? { backgroundColor: "rgba(255, 0, 0, 0.4)" } : {}
        }
      />

      <Button>Add Friend</Button>
    </form>
  );
}
export default FormAddFriend;
