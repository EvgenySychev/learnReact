import s from './MyPosts.module.css';
import Post from './Post/Post';

type postDataType = {
    id: number
    message: string
    likesCount: number
}

type postPropsType = {
    post:Array<postDataType>
}

const MyPosts = (props:postPropsType) => {


    let postsElements =   props.post.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;