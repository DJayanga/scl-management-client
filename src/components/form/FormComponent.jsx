import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { ageCalculator } from '../../services/ageCalculator';

export const FormComponent = ({ fields, onSubmit, data }) => {
  const [formData, setFormData] = useState(data || {});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'dob') {
      const age = ageCalculator(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        age: age.toString(),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (name === 'age') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          age: null,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};
    let hasErrors = false;
    fields.forEach((field) => {
      if (field.required && (!formData[field.name] || formData[field.name].trim() === '')) {
        validationErrors[field.name] = 'This field is required';
        hasErrors = true;
      }

      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          validationErrors[field.name] = 'Invalid email address';
          hasErrors = true;
        }
      }

      if (field.name === 'contactno' && formData[field.name]) {
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(formData[field.name])) {
          validationErrors[field.name] = `${field.label} needs to be 10 digits`;
          hasErrors = true;
        }
      }
    });

    setErrors(validationErrors);

    if (!hasErrors) {
      onSubmit(formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className=" mt-4">
      <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        {fields.map((field, index) => (
          <FormGroup key={index} className="p-2">
            <Label for={field.name}>{field.label}</Label>
            {field.type === 'select' ? (
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
            ) : field.name === 'age' ? (
              <Input
                type="text"
                name={field.name}
                id={field.name}
                placeholder={field.placeHolder}
                value={formData[field.name] || ''}
                readOnly
                invalid={!!errors[field.name]}
              />
            ) : (
              <Input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeHolder}
                value={formData[field.name] || ''}
                onChange={handleChange}
                invalid={!!errors[field.name]}
              />
            )}
            {errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
          </FormGroup>
        ))}
      </div>
      <div className="d-flex justify-content-end mt-4">
        <Button color="primary" type="submit" style={{ width: '200px', marginLeft: 'auto' }}>
          Submit
        </Button>
      </div>
    </Form>
  );
};
