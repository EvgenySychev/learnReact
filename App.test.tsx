import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {DialogsItemPropsType, MessagesDataType, postDataType} from "./index";

let post: Array<postDataType> = [
  {id: 1, message: 'Hi? How are you?', likesCount: 12},
  {id: 2, message: "It's my first post", likesCount: 11}
]

let dialogs: Array<DialogsItemPropsType> = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'}
]

let messages: Array<MessagesDataType> = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'}
]


test('renders learn react link', () => {
  render(<App dialogs={dialogs} messages={messages} post={post} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
