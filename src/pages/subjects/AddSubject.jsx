import React, { useState } from 'react';
import { Layout } from '../../layout/Layout';
import { FormComponent } from '../../components/form/FormComponent';
import ApiCallHandler from '../../services/apicallHandler';
import { useDispatch } from 'react-redux';

export const AddSubject = () => {
  const api = new ApiCallHandler();
  const teacherDispatch = useDispatch();

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
    // const response = api.post(endPoints.subjects, formData);
    const subjectId = 1;
    teacherDispatch({ type: 'subject/addSubject', payload: { ...formData, subjectId: subjectId } });
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
