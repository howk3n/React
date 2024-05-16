import { useEffect, useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";
import "./eatsplit.css";
import { initialFriends } from "./constants";
import { generateKey } from "../../utils";
import { useTitle } from "../../globalContexts/TitleContext";

function EatSplit() {
  const { setAppTitle } = useTitle();
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriendID, setSelectedFriendID] = useState(null);

  const selectedFriend = friendList.find((fr) => fr.id === selectedFriendID);

  useEffect(() => {
    setAppTitle("Eat 'n Split");
  }, [setAppTitle]);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    setSelectedFriendID(null);
  }

  function handleAddFriend(name, image) {
    const newFriendID = generateKey(name, "friend");
    setFriendList((fl) => [
      ...fl,
      { name, image, balance: 0, id: newFriendID },
    ]);
    setShowAddFriend(false);
  }

  function handleSelectFriend(id) {
    setSelectedFriendID((selected) => (id === selected ? null : id));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriendList((friendList) =>
      friendList.map((friend) =>
        friend.id === selectedFriendID
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );
    setSelectedFriendID(null);
  }

  return (
    <div className="eat-split-container">
      <div className="eat-split">
        <div className="sidebar">
          <FriendList
            friendList={friendList}
            selectedFriendID={selectedFriendID}
            onSelectFriend={handleSelectFriend}
          />
          {showAddFriend && <FormAddFriend onSubmit={handleAddFriend} />}
          <Button handleClick={handleShowAddFriend}>
            {showAddFriend ? "Cancel" : "Add Friend"}
          </Button>
        </div>
        {selectedFriend && (
          <FormSplitBill
            friend={selectedFriend}
            onSplitBill={handleSplitBill}
            // changing the key makes sure React rerenders component instance if we change selectedFriend
            key={generateKey(selectedFriendID, "splitbill")}
          />
        )}
      </div>
    </div>
  );
}
export default EatSplit;
