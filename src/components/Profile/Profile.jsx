import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileList,
  ProfileInfo,
  ProfileStat,
  ProfileName,
  ProfileNumbers,
  ProfileAvatar,
  ProfileLocation,
  ProfileTag,
} from './Profile.slyled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <ProfileInfo>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileInfo>

      <ProfileList>
        <ProfileStat>
          <ProfileNumbers>Followers</ProfileNumbers>
          <ProfileNumbers>{followers}</ProfileNumbers>
        </ProfileStat>
        <ProfileStat>
          <ProfileNumbers>Views</ProfileNumbers>
          <ProfileNumbers>{views}</ProfileNumbers>
        </ProfileStat>
        <ProfileStat>
          <ProfileNumbers>Likes</ProfileNumbers>
          <ProfileNumbers>{likes}</ProfileNumbers>
        </ProfileStat>
      </ProfileList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
