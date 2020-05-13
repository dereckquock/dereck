import React from 'react';
import styled from '@emotion/styled';

const Table = styled.table`
  max-width: 568px;
  height: 320px;
  margin-bottom: 0.5rem;
  display: block;
  overflow: scroll;
  table-layout: fixed;
  border-collapse: collapse;
  border: 1px solid var(--gold);
`;
const TableHeader = styled.th`
  padding: 20px;
  position: sticky;
  background: #666666;
  color: #ffffff;
  text-align: center;

  &[scope='col'] {
    top: 0;
  }
  &[scope='row'] {
    left: 0;
  }
`;
const TableCell = styled.td`
  padding: 20px;
  border: 1px solid;
  text-align: center;
`;

export default function StickyTable() {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader scope="row"></TableHeader>
          <TableHeader scope="col">Wednesday</TableHeader>
          <TableHeader scope="col">Thursday</TableHeader>
          <TableHeader scope="col">Friday</TableHeader>
          <TableHeader scope="col">Saturday</TableHeader>
          <TableHeader scope="col">Sunday</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableHeader scope="row">8:00 AM</TableHeader>
          <TableCell>Wake up</TableCell>
          <TableCell>Wake up</TableCell>
          <TableCell>Wake up</TableCell>
          <TableCell>Sleep in</TableCell>
          <TableCell>Sleep in</TableCell>
        </tr>
        <tr>
          <TableHeader scope="row">8:30 AM</TableHeader>
          <TableCell>Brush teeth</TableCell>
          <TableCell>Brush teeth</TableCell>
          <TableCell>Brush teeth</TableCell>
          <TableCell>Sleep in more</TableCell>
          <TableCell>Wake up</TableCell>
        </tr>
        <tr>
          <TableHeader scope="row">9:00 AM</TableHeader>
          <TableCell>Eat breakfast</TableCell>
          <TableCell>Eat breakfast</TableCell>
          <TableCell>Read</TableCell>
          <TableCell>Sleep in more</TableCell>
          <TableCell>Brush teeth</TableCell>
        </tr>
        <tr>
          <TableHeader scope="row">9:30 AM</TableHeader>
          <TableCell>Get coffee</TableCell>
          <TableCell>Get coffee</TableCell>
          <TableCell>Eat breakfast</TableCell>
          <TableCell>Wake up</TableCell>
          <TableCell>Eat breakfast</TableCell>
        </tr>
        <tr>
          <TableHeader scope="row">10:00 AM</TableHeader>
          <TableCell>Code</TableCell>
          <TableCell>Code</TableCell>
          <TableCell>Code</TableCell>
          <TableCell>Eat breakfast</TableCell>
          <TableCell>Get coffee</TableCell>
        </tr>
        <tr>
          <TableHeader scope="row">10:30 AM</TableHeader>
          <TableCell>Code</TableCell>
          <TableCell>Code</TableCell>
          <TableCell>Code</TableCell>
          <TableCell>Code</TableCell>
          <TableCell>Chill</TableCell>
        </tr>
      </tbody>
    </Table>
  );
}
