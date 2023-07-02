import { Layout } from '../../layout/Layout';
import { TableComponent } from '../../components/table/TableComponent';

export const ClassRooms = () => {
  const tableHead = ['#', 'Class Room Name'];
  const tableBody = [
    ['1', 'Class 01'],
    ['2', 'Class 02'],
    ['3', 'Class 03'],
  ];
  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Class Rooms</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
