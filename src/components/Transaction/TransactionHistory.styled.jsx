import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  text-align: center;
  align-items: center;
  margin: 20px auto;
  border: 1px solid gray;
  width: 500px;
  border: 2px solid black;
  box-shadow: rgb(0 0 0) 0px 9px 9px -6px, rgb(0 0 0 / 14%) 0px 9px 12px 0px,
    rgb(0 0 0) 0px 3px 24px 0px;
  border-radius: 10px;
  font-family: 'Roboto';
  // tr:nth-of-type(even) {
  //   background-color: #f2f2f2;
`;

export const TransactionTableHead = styled.thead`
  background-color: rgb(23, 176, 203);
`;

export const TransactionTableBody = styled.thead`
  text-align: center;
`;

export const TransactionTableText = styled.thead`
  padding: 10px 5px;
  text-align: center;
`;

export const TransactionsHistory = styled.tr`
  background: #fff;
`;
