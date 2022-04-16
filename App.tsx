import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogsItemPropsType, MessagesDataType, postDataType} from "./index";

type DialogsPropsType = {
    dialogs:Array<DialogsItemPropsType>
    messages: Array<MessagesDataType>
    post:Array<postDataType>
}

const App = (props:DialogsPropsType) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header />
          <Navbar />

          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs/*' element={<Dialogs dialogs = {props.dialogs} messages={props.messages}/>}/>
              <Route path='/profile/*' element={<Profile post = {props.post} />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />}/>
              <Route path='/settings/*' element={<Settings />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>)
}

export default App;