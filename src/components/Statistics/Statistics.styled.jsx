import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px auto;
  justify-content: center;
  text-decoration: none;
  list-style: none;
`;
export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  border: 1px solid gray;
  width: 60px;
`;

export const StatisticsBox = styled.section`
  margin: 0px auto;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  border: 2px solid black;
  box-shadow: rgb(0 0 0) 0px 9px 9px -6px, rgb(0 0 0 / 14%) 0px 9px 12px 0px,
    rgb(0 0 0) 0px 3px 24px 0px;
  border-radius: 10px;
`;
