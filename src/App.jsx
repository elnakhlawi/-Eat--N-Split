import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
        className="button"
      >
        {children}
      </button>
    </>
  );
}
export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormList />}
        <Button onClick={handleShowAddFriend}>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  let friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <>
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You Owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} Owes you {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} Even</p>}
        <Button>Select</Button>
      </li>
    </>
  );
}

function FormList() {
  return (
    <>
      <form className="form-add-friend">
        <label htmlFor="name">👩🏻‍🤝‍🧑🏽Friend name</label>
        <input type="text" id="name" />
        <label htmlFor="image">🖼 Image URL</label>
        <input type="text" id="image" />
        <Button>Add</Button>
      </form>
    </>
  );
}

function FormSplitBill() {
  return (
    <form action="" dir="ltr" className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label htmlFor="billValue">💸Bill value</label>
      <input type="text" id="billValue" />
      <label htmlFor="yourExpense">Your expense</label>
      <input type="text" id="yourExpense" />
      <label htmlFor="friendExpense">X's expense</label>
      <input disabled type="text" id="friendExpense" />
      <label htmlFor="howBay">How is paying the bill</label>
      <select>
        <option value="user">Me</option>
        <option value="friend">friend name</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
