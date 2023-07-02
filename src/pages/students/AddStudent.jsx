import React, { useState } from 'react';
import { Layout } from '../../layout/Layout';
import { Button, Form, FormFeedback, FormGroup, FormText, Input, Label } from 'reactstrap';
import { FormComponent } from '../../components/form/FormComponent';

export const AddStudent = () => {
  const [stdData, setStdData] = useState({
    studentId: '',
    firstname: '',
    lastname: '',
    contactperson: '',
    contactno: '',
    email: '',
    dob: '',
    age: '',
    classroom: '',
  });

  const fields = [
    {
      name: 'firstname',
      label: 'First Name',
      placeHolder: 'Enter First Name',
      value: '',
      type: 'text',
      required: true,
    },
    {
      name: 'lastname',
      label: 'Last Name',
      placeHolder: 'Enter Last Name',
      value: '',
      type: 'text',
      required: true,
    },
    {
      name: 'contactperson',
      label: 'Contact Person',
      placeHolder: 'Enter Contact Person',
      type: 'text',
      required: true,
    },
    {
      name: 'contactno',
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
    {
      name: 'dob',
      label: 'Date of birth',
      placeHolder: 'Enter Date of birth',
      type: 'date',
      required: true,
    },
    {
      name: 'age',
      label: 'Age',
      placeHolder: 'Enter Age',
      type: 'text',
      required: true,
    },
    {
      name: 'classroom',
      label: 'Class Room',
      placeHolder: 'Select Class Room',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Classroom 1',
          value: 'Classroom 1',
        },
        {
          label: 'Classroom 2',
          value: 'Classroom 2',
        },
        {
          label: 'Classroom 3',
          value: 'Classroom 3',
        },
      ],
    },
  ];

  const handleSubmit = (formData) => {
    // Handle form submission
    console.log(formData);
  };
  return (
    <Layout>
      <div className="m-3">
        <h2>Add Students</h2>
        <FormComponent fields={fields} onSubmit={handleSubmit} data={stdData} />
      </div>
    </Layout>
  );
};
