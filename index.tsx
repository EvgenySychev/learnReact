import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogsItemPropsType = {
    name: string
    id: number
}

export type MessagesDataType = {
    message: string
    id: number
}

export type postDataType = {
    id: number
    message: string
    likesCount: number
}

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


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} post={post} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
