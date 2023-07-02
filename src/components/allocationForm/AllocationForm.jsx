import { Button, Form, Input, Label } from 'reactstrap';
import './AllocationForm.scss';
import { useState } from 'react';

export const AllocationForm = ({ title, fields, btnName, handleclick, children }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    let hasErrors = false;
    fields.forEach((field) => {
      if (field.required && (!formData[field.name] || formData[field.name].trim() === '')) {
        validationErrors[field.name] = 'This field is required!';
        hasErrors = true;
      }
    });

    setErrors(validationErrors);

    if (!hasErrors) {
      handleclick(formData);
    }
  };

  return (
    <div className="allocation-form mt-5">
      <div className="form-title">{title}</div>
      <div className="form-content">
        <Form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <Label for="teacher">{field.label}</Label>
                <Input
                  type="select"
                  name={field.name}
                  id={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  invalid={!!errors[field.name]}
                >
                  <option value="">{field.placeHolder}</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Input>
                <Button color="primary" type="submit">
                  {btnName}
                </Button>
              </div>
              <div> {errors[field.name] && <span className="text-danger">{errors[field.name]}</span>}</div>
            </div>
          ))}
        </Form>
      </div>
      <div className="child-data">{children}</div>
    </div>
  );
};
