import styled from '@emotion/styled';

export const FriendData = styled.ul`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 10px;
  width: 640px;
  margin-bottom: 30px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  gap: 15px;
  border-radius: 5px;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 1px 4px 4px rgba(0, 0, 0, 0.06),
    1px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;
export const FriendName = styled.p`
  font-size: 32px;
`;
