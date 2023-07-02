import { TableComponent } from '../../components/table/TableComponent';
import { Layout } from '../../layout/Layout';

export const Teachers = () => {
  const tableHead = ['#', 'Name', 'Contact Number', 'Email'];
  const tableBody = [
    ['1', 'Dasun Jayanga', '0712345678', 'das@ashas.com'],
    ['2', 'Dasun Jayanga', '0712345678', 'das@ashas.com'],
    ['3', 'Dasun Jayanga', '0712345678', 'das@ashas.com'],
  ];

  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Teachers</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
