import s from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={s.list}>
    <img className={s.friendsImg} src={avatar} alt="Avatar" width="48" />
    <p className={s.name}>{name}</p>
    <p>{isOnline ? <span className={s.green}>Online</span> : <span className={s.red}>Offline</span>}</p>
  </div>  
      )}

export default FriendListItem;