import React from 'react';
import { Layout } from '../../layout/Layout';
import { AllocationForm } from '../../components/allocationForm/AllocationForm';
import { CardWrapper } from '../../components/cardWrapper/CardWrapper';

export const SingleStudent = () => {
  return (
    <Layout>
      <div className="m-3">
        <h2>Student Detail Report</h2>
        <CardWrapper title="Student Details">
          <div className="p-4">Dasun Jayanga</div>
        </CardWrapper>
        <CardWrapper title="Teacher & Subject Details">
          <div className="p-4">Dasun Jayanga</div>
        </CardWrapper>
      </div>
    </Layout>
  );
};
