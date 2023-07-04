import { Layout } from '../../layout/Layout';
import { TableComponent } from '../../components/table/TableComponent';
import { useSelector } from 'react-redux';

export const ClassRooms = () => {
  const tableHead = ['#', 'Class Room Name'];
  const data = useSelector((state) => state?.classRoom);
  const tableBody = data?.classRooms?.map((classRoom, index) => {
    return [index + 1, classRoom.classRoomName];
  });
  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Class Rooms</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
