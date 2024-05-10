import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map((friend, id) => {
      return (
        <li key={id}>
          <FriendListItem />
        </li>
      );
    })}
  </ul>
);

export default FriendList;
