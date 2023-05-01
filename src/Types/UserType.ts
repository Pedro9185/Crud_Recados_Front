import TaskType from './TaskType';

type UserType = {
  email: string;
  password: string;
  tasks: TaskType[];
};

export default UserType;
