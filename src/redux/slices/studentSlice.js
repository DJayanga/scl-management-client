import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiCallHandler from '../../services/apicallHandler';
import { endPoints } from '../../constants/endPoints';

const initialState = {
  students: [],
  loading: false,
  error: null,
};

const api = new ApiCallHandler();

export const getStudents = createAsyncThunk('student/getStudents', () => {
  return api.get(endPoints.students);
});

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      return {
        loading: false,
        ...state,
        students: [...state.students, action.payload],
      };
    },

    updateStudent: (state, action) => {
      return {
        loading: false,
        ...state,
        students: state.students.map((student) => {
          if (student.id === action.payload.id) {
            return action.payload;
          }
          return student;
        }),
      };
    },

    deleteStudent: (state, action) => {
      return {
        loading: false,
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getStudents.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getStudents.fulfilled, (state, { payload }) => {
      state.students = payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getStudents.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;
