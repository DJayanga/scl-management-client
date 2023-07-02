import React, { useState } from 'react';
import { Layout } from '../../layout/Layout';
import { FormComponent } from '../../components/form/FormComponent';

export const AddTeacher = () => {
  const [teacherData, setTeacherData] = useState({
    teacherId: '',
    firstName: '',
    lastName: '',
    contactNo: '',
    email: '',
  });

  const fields = [
    {
      name: 'firstName',
      label: 'First Name',
      placeHolder: 'Enter First Name',
      value: '',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      placeHolder: 'Enter Last Name',
      value: '',
      type: 'text',
      required: true,
    },
    {
      name: 'contactNo',
      label: 'Contact Number',
      placeHolder: 'Enter Contact Number',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      placeHolder: 'Enter Email Address',
      type: 'email',
      required: true,
    },
  ];

  const handleSubmit = (formData) => {
    // Handle form submission
    console.log(formData);
  };
  return (
    <Layout>
      <div className="m-3">
        <h2>Add Teacher</h2>
        <FormComponent fields={fields} onSubmit={handleSubmit} data={teacherData} />
      </div>
    </Layout>
  );
};
