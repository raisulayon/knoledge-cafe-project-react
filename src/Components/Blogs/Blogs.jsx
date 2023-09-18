import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
        <h2 className="text-3xl">Blogs</h2>
        <h3>Blogs: {blogs.length}</h3>
        {
            blogs.map(blog=><Blog 
            key={blog.id}
            handleBookmark={handleBookmark}
            blog={blog}></Blog>)
        }
        </div>
    );
};



export default Blogs;