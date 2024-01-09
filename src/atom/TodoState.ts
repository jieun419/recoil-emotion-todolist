import { atom } from 'recoil';

interface TodoListType {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoState = atom<TodoListType[]>({
  key: 'todoState',
  default: [],
});

export const todoTextState = atom({
  key: 'todoTextState',
  default: '',
});
