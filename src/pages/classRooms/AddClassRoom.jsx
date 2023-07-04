import React, { useState } from 'react';
import { Layout } from '../../layout/Layout';
import { FormComponent } from '../../components/form/FormComponent';
import ApiCallHandler from '../../services/apicallHandler';
import { useDispatch } from 'react-redux';

export const AddClassRoom = () => {
  const api = new ApiCallHandler();
  const classRoomDispatch = useDispatch();

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
    // const response = api.post(endPoints.students, formData);
    const clasRmId = 1;
    classRoomDispatch({ type: 'classRoom/addClassRoom', payload: { ...formData, classRoomId: clasRmId } });

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
