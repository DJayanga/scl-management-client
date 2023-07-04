import { configureStore } from '@reduxjs/toolkit';
import studentSlice from './slices/studentSlice';
import classRoomSlice from './slices/classRoomSlice';
import teacherSlice from './slices/teacherSlice';
import subjectSlice from './slices/subjectSlice';

const store = configureStore({
  reducer: {
    student: studentSlice,
    classRoom: classRoomSlice,
    teacher: teacherSlice,
    subject: subjectSlice,
  },
});

export default store;
