import React from 'react';
import Notes from '../AddNotes';
import { useAppSelector } from '../../store/hooks';
import { selectAll } from '../../store/modules/NotesSlice';

const AllNotes: React.FC = () => {
  const notesRedux = useAppSelector(selectAll);
  return <Notes data={notesRedux} />;
};

export default AllNotes;
