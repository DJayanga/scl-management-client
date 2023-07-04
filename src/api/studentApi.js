import axios from 'axios';
import {
  getStudentsStart,
  getStudentsSuccess,
  getStudentsFailure,
  getStudentStart,
  getStudentSuccess,
  getStudentFailure,
  addStudentStart,
  addStudentSuccess,
  addStudentFailure,
  updateStudentStart,
  updateStudentSuccess,
  updateStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  deleteStudentFailure,
} from '../slices/studentSlice';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchStudents = () => async (dispatch) => {
  try {
    dispatch(getStudentsStart());
    const response = await axios.get(`${baseUrl}/students`);
    dispatch(getStudentsSuccess(response.data));
  } catch (error) {
    dispatch(getStudentsFailure(error.message));
  }
};

export const fetchStudent = (id) => async (dispatch) => {
  try {
    dispatch(getStudentStart());
    const response = await axios.get(`${baseUrl}/students/${id}`);
    dispatch(getStudentSuccess(response.data));
  } catch (error) {
    dispatch(getStudentFailure(error.message));
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    dispatch(addStudentStart());
    const response = await axios.post(`${baseUrl}/students`, student);
    dispatch(addStudentSuccess(response.data));
  } catch (error) {
    dispatch(addStudentFailure(error.message));
  }
};

export const updateStudent = (student) => async (dispatch) => {
  try {
    dispatch(updateStudentStart());
    const response = await axios.put(`${baseUrl}/students/${student.id}`, student);
    dispatch(updateStudentSuccess(response.data));
  } catch (error) {
    dispatch(updateStudentFailure(error.message));
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch(deleteStudentStart());
    await axios.delete(`${baseUrl}/students/${id}`);
    dispatch(deleteStudentSuccess(id));
  } catch (error) {
    dispatch(deleteStudentFailure(error.message));
  }
};
