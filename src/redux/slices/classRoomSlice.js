import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiCallHandler from '../../services/apicallHandler';
import { endPoints } from '../../constants/endPoints';

const initialState = {
  classRooms: [],
  loading: false,
  error: null,
};

const api = new ApiCallHandler();

export const getClassRooms = createAsyncThunk('classRoom/getClassRooms', () => {
  return api.get(endPoints.classRooms);
});

const classRoomSlice = createSlice({
  name: 'classRoom',
  initialState,
  reducers: {
    addClassRoom: (state, action) => {
      return {
        loading: false,
        ...state,
        classRooms: [...state.classRooms, action.payload],
      };
    },
    updateClassRoom: (state, action) => {
      return {
        loading: false,
        ...state,
        classRooms: state.classRooms.map((classRoom) => {
          if (classRoom.id === action.payload.id) {
            return action.payload;
          }
          return classRoom;
        }),
      };
    },
    deleteClassRoom: (state, action) => {
      return {
        loading: false,
        ...state,
        classRooms: state.classRooms.filter((classRoom) => classRoom.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getClassRooms.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getClassRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.classRooms = action.payload;
    });

    builder.addCase(getClassRooms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { addClassRoom, updateClassRoom, deleteClassRoom } = classRoomSlice.actions;

export default classRoomSlice.reducer;
