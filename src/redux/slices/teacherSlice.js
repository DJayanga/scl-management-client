import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiCallHandler from '../../services/apicallHandler';
import { endPoints } from '../../constants/endPoints';

const initialState = {
  teachers: [],
  loading: false,
  error: null,
};

const api = new ApiCallHandler();

export const getTeachers = createAsyncThunk('teacher/getTeachers', () => {
  return api.get(endPoints.teachers);
});

const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      return {
        loading: false,
        ...state,
        teachers: [...state.teachers, action.payload],
      };
    },
    updateTeacher: (state, action) => {
      return {
        loading: false,
        ...state,
        teachers: state.teachers.map((teacher) => {
          if (teacher.id === action.payload.id) {
            return action.payload;
          }
          return teacher;
        }),
      };
    },
    deleteTeacher: (state, action) => {
      return {
        loading: false,
        ...state,
        teachers: state.teachers.filter((teacher) => teacher.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTeachers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getTeachers.fulfilled, (state, { payload }) => {
      state.teachers = payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export const { addTeacher, updateTeacher, deleteTeacher } = teacherSlice.actions;

export default teacherSlice.reducer;
