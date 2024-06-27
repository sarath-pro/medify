import React from 'react'
import BlogCard from './BlogCard'
import "./BlogsAndNews.css"

function BlogsAndNews() {
    return (
        <div className='blogs-news-container'>
            <p id='bandn'>Blogs & News</p>
            <p id='title'>Read Our Latest News</p>
            <div className='blogs-cards-container'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default BlogsAndNews