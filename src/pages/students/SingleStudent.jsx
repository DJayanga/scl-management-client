import React from 'react';
import { Layout } from '../../layout/Layout';
import { AllocationForm } from '../../components/allocationForm/AllocationForm';
import { CardWrapper } from '../../components/cardWrapper/CardWrapper';
import { FormComponent2 } from '../../components/form/FormComponent2';
import { TableComponent } from '../../components/table/TableComponent';

export const SingleStudent = () => {
  return (
    <Layout>
      <div className="m-3">
        <h2>Student Detail Report</h2>
        <CardWrapper title="Student Details">
          <div className="m-4">
            <FormComponent2 />
          </div>
        </CardWrapper>
        <CardWrapper title="Teacher & Subject Details">
          <div className="m-4">
            <TableComponent
              tableHead={['Subject', 'Teacher ']}
              tableBody={[
                ['Maths', 'Mr. John'],
                ['Science', 'Mr. John'],
                ['English', 'Mr. John'],
                ['History', 'Mr. John'],
              ]}
            />
          </div>
        </CardWrapper>
      </div>
    </Layout>
  );
};
