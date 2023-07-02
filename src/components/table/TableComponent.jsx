import React from 'react';
import { Table } from 'reactstrap';

export const TableComponent = ({ tableHead, tableBody }) => {
  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <Table striped className=" mt-4">
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((body, index) => (
            <tr key={index}>
              {body.map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
