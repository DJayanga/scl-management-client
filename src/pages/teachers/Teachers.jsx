import { useSelector } from 'react-redux';
import { TableComponent } from '../../components/table/TableComponent';
import { Layout } from '../../layout/Layout';

export const Teachers = () => {
  const tableHead = ['#', 'Name', 'Contact Number', 'Email'];
  const data = useSelector((state) => state?.teacher);
  const tableBody = data?.teachers?.map((teacher, index) => {
    return [index + 1, teacher.firstName + ' ' + teacher.lastName, teacher.contactNo, teacher.email];
  });

  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Teachers</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
