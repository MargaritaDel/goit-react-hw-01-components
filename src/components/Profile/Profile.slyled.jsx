import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 400px;
  margin: 25px;
  border: 2px solid black;
  box-shadow: rgb(0 0 0) 0px 9px 9px -6px, rgb(0 0 0 / 14%) 0px 9px 12px 0px,
    rgb(0 0 0) 0px 3px 24px 0px;
  border-radius: 10px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileAvatar = styled.img`
  margin-top: 10px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  font-size: 32px;
  color: black;
  font-weight: 500;
`;

export const ProfileLocation = styled.p`
  font-size: 24px;
  color: grey;
  font-weight: 300;
`;

export const ProfileTag = styled.p`
  font-size: 24px;
  color: grey;
  font-weight: 300;
`;

export const ProfileList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  list-style: none;
  gap: 10px;
  pading: 10px;
  width: 100%;
`;

export const ProfileStat = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ProfileNumbers = styled.span`
  font-weight: bold;
  color: black;
`;
