import PropTypes from 'prop-types';
import {BsBookmarkPlusFill} from 'react-icons/bs';


const Blog = ({blog, handleBookmark}) => {
    const {id, cover, title, author, author_img, publish_date, reading_times, hashtags}= blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`}/>
            <div className='flex justify-between items-center mx-4'>
                <div className='flex items-center gap-2 my-4'>
                    <img className='w-14' src={author_img}/>
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_times} min to read</span>
                    <button onClick={handleBookmark}><BsBookmarkPlusFill></BsBookmarkPlusFill></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>
            {
            hashtags.map((hash, idx)=><span key={idx}><a href=''>#{hash}</a> </span>)
            }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
};

export default Blog;