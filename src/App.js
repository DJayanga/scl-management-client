import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/Dashboard';
import { ClassRooms } from './pages/classRooms/ClassRooms';
import { Students } from './pages/students/Students';
import { Subjects } from './pages/subjects/Subjects';
import { Teachers } from './pages/teachers/Teachers';
import { AddClassRoom } from './pages/classRooms/AddClassRoom';
import { AddStudent } from './pages/students/AddStudent';
import { AddSubject } from './pages/subjects/AddSubject';
import { Addteacher } from './pages/teachers/Addteacher';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="classrooms">
              <Route index element={<ClassRooms />} />
              <Route path=":id" element={<AddClassRoom />} />
              <Route path="add" element={<AddClassRoom />} />
            </Route>
            <Route path="students">
              <Route index element={<Students />} />
              <Route path=":id" element={<AddStudent />} />
              <Route path="add" element={<AddStudent />} />
            </Route>
            <Route path="subjects">
              <Route index element={<Subjects />} />
              <Route path=":id" element={<AddSubject />} />
              <Route path="add" element={<AddSubject />} />
            </Route>
            <Route path="teachers">
              <Route index element={<Teachers />} />
              <Route path=":id" element={<Addteacher />} />
              <Route path="add" element={<Addteacher />} />
            </Route>

            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
