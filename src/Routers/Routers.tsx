import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { SignIn } from '../pages/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import { selectAll } from '../store/modules/NotesSlice';
import { useAppSelector } from '../store/hooks';
import Notes from '../pages/Notes';

export function Routers() {
  const notesRedux = useAppSelector(selectAll);
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notes" element={<Notes data={notesRedux} />} />
    </Routes>
  );
}
