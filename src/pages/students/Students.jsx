import { Table } from 'reactstrap';
import { Layout } from '../../layout/Layout';
import { TableComponent } from '../../components/table/TableComponent';

export const Students = () => {
  const tableHead = ['#', 'First Name', 'Last Name', 'Username'];
  const tableBody = [
    ['1', 'Mark', 'Otto', '@mdo'],
    ['2', 'Jacob', 'Thornton', '@fat'],
    ['3', 'Larry', 'the Bird', '@twitter'],
  ];
  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Students</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
