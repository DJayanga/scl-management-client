import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiCallHandler from '../../services/apicallHandler';
import { endPoints } from '../../constants/endPoints';

const initialState = {
  subjects: [],
  loading: false,
  error: null,
};

const api = new ApiCallHandler();

export const getSubjects = createAsyncThunk('subject/getSubjects', () => {
  return api.get(endPoints.subjects);
});

const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    addSubject: (state, action) => {
      return {
        loading: false,
        ...state,
        subjects: [...state.subjects, action.payload],
      };
    },
    updateSubject: (state, action) => {
      return {
        loading: false,
        ...state,
        subjects: state.subjects.map((subject) => {
          if (subject.id === action.payload.id) {
            return action.payload;
          }
          return subject;
        }),
      };
    },
    deleteSubject: (state, action) => {
      return {
        loading: false,
        ...state,
        subjects: state.subjects.filter((subject) => subject.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSubjects.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getSubjects.fulfilled, (state, { payload }) => {
      state.subjects = payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getSubjects.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { addSubject, updateSubject, deleteSubject } = subjectSlice.actions;

export default subjectSlice.reducer;
