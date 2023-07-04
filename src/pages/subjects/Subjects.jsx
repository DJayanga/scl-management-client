import { useSelector } from 'react-redux';
import { TableComponent } from '../../components/table/TableComponent';
import { Layout } from '../../layout/Layout';

export const Subjects = () => {
  const tableHead = ['#', 'Subject Name'];
  const data = useSelector((state) => state?.subject);
  const tableBody = data?.subjects?.map((subject, index) => {
    return [index + 1, subject.subjectName];
  });
  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Subjects</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
