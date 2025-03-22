import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={s.box}>
      {friends.map((friend) => (
        <div className={s.list} key={friend.id}>
          <img 
          className={s.friendsImg}
          src={friend.avatar} 
          alt="Avatar" 
          width="48" />
          <p className={s.name}>{friend.name}</p>
          <p>{friend.isOnline ? <span className={s.green}>Online</span> : <span className={s.red}>Offline</span>}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;