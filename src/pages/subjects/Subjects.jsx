import { TableComponent } from '../../components/table/TableComponent';
import { Layout } from '../../layout/Layout';

export const Subjects = () => {
  const tableHead = ['#', 'Subject Name'];
  const tableBody = [
    ['1', 'Subject 01'],
    ['2', 'Subject 02'],
    ['3', 'Subject 03'],
  ];
  return (
    <Layout>
      <div className="m-3">
        <h2>ALL Subjects</h2>
        <TableComponent tableHead={tableHead} tableBody={tableBody} />
      </div>
    </Layout>
  );
};
