import React, { useState } from 'react';
import { Layout } from '../../layout/Layout';
import { FormComponent } from '../../components/form/FormComponent';

export const AddSubject = () => {
  const [subData, setSubData] = useState({
    subjectId: '',
    subjectName: '',
  });

  const fields = [
    {
      name: 'subjectName',
      label: 'Subject Name',
      placeHolder: 'Enter Subject Name',
      value: '',
      type: 'text',
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
        <h2>Add Subject</h2>
        <FormComponent fields={fields} onSubmit={handleSubmit} data={subData} />
      </div>
    </Layout>
  );
};
