import PropTypes from 'prop-types';
import { FriendStatus, FriendName } from './FriendList.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <FriendStatus
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
