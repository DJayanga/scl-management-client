import React from 'react';
import { Layout } from '../../layout/Layout';
import { AllocationForm } from '../../components/allocationForm/AllocationForm';
import { TableComponent } from '../../components/table/TableComponent';

export const AllocateClassRooms = () => {
  const fields = [
    {
      name: 'teacher',
      label: 'Teacher',
      placeHolder: 'Select a Teacher',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Teacher 1',
          value: 'Teacher 1',
        },
        {
          label: 'Teacher 2',
          value: 'Teacher 2',
        },
        {
          label: 'Teacher 3',
          value: 'Teacher 3',
        },
      ],
    },
  ];

  const handleTeacherSubmit = (formData) => {
    // Handle form submission
    console.log(formData);
  };

  const handleSubjectSubmit = (formData) => {
    // Handle form submission
    console.log(formData);
  };

  return (
    <Layout>
      <div className="m-3">
        <h2>Allocate Class Rooms</h2>
        <AllocationForm fields={fields} title="Teacher's Details" btnName="Save" handleclick={handleTeacherSubmit} />
        <AllocationForm
          fields={fields}
          title="Allocated Class Rooms"
          btnName="Allocate"
          handleclick={handleSubjectSubmit}
        >
          <TableComponent
            tableHead={['Class Room', 'Action']}
            tableBody={[
              ['Grade 5', 'Deallocated'],
              ['Grade 8', 'Deallocated'],
            ]}
          />
        </AllocationForm>
      </div>
    </Layout>
  );
};
