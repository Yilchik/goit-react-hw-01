import FriendListItem from "../FriendListItem/FriendListItem";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, ...friend }) => (
        <li key={id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
