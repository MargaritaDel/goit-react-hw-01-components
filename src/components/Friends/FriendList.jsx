import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendData, FriendsItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendData>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsItem key={id}>
          <FriendListItem friend={{ isOnline, avatar, name }} />
        </FriendsItem>
      ))}
    </FriendData>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
