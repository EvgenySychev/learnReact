
//import './Profile.css';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
    <div>
      <img src='https://ophuket.ru/assets/images/freedom-beach.jpg' />
    </div>
    <div>
      My post
      <div>New post</div>
      <div className={s.posts}>
        <div className={s.item}>
          post1
        </div>
        <div className={s.item}>
          post2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;