import React, { useState } from 'react';
import { Layout } from '../../layout/Layout';
import { FormComponent } from '../../components/form/FormComponent';

export const AddClassRoom = () => {
  const [classRmData, setClassRmData] = useState({
    classRoomId: '',
    classRoomName: '',
  });

  const fields = [
    {
      name: 'classRoomName',
      label: 'Class Room Name',
      placeHolder: 'Enter Class Room Name',
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
        <h2>Add Class Room</h2>
        <FormComponent fields={fields} onSubmit={handleSubmit} data={classRmData} />
      </div>
    </Layout>
  );
};
