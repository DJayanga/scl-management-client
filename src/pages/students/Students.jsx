import { Layout } from '../../layout/Layout';
import { TableComponent } from '../../components/table/TableComponent';
import { useSelector } from 'react-redux';

export const Students = () => {
  const tableHead = ['#', 'Name', 'Class Room', 'Email', 'Contact Number'];
  const data = useSelector((state) => state?.student);
  const tableBody = data?.students?.map((student, index) => {
    return [index + 1, student.firstname + ' ' + student.lastname, student.classroom, student.email, student.contactno];
  });
  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Students</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
