import Friend from "./Friend";
import PropTypes from "prop-types";

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(PropTypes.object),
  selectedFriendID: PropTypes.string,
  onSelectFriend: PropTypes.func,
};

function FriendList({ friendList, selectedFriendID, onSelectFriend }) {
  return (
    <ul>
      {friendList.map((friend) => {
        return (
          <Friend
            data={friend}
            id={friend.id}
            key={friend.id}
            onSelect={onSelectFriend}
            isSelected={selectedFriendID === friend.id}
          />
        );
      })}
    </ul>
  );
}
export default FriendList;
