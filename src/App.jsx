import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState(0)

  const handleBookmark = blog =>{
    console.log('bookmark will be soon')
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
