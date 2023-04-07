import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border: 1px solid gray;
  width: 640px;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 1px 4px 4px rgba(0, 0, 0, 0.06),
    1px 1px 1px rgba(0, 0, 0, 0.12);
  margin: 30px;
  font-family: 'Roboto';
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
  background: #d9d9d9;
`;
