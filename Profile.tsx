import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import post from "./MyPosts/Post/Post";
import {postDataType} from "../../index";

type ProfilePropsType = {
    post:Array<postDataType>
}
const Profile = (props:ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts post = {props.post}/>
    </div>
}

export default Profile;