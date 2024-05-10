const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>Friend {name}</p>
      <p>Friend {isOnline}</p>
    </div>
  );
};

export default FriendListItem;
