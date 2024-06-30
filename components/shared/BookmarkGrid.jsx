'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import RecipePreview from "./RecipePreview"

const BookmarkGrid = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    setBookmarks(localStorage.getItem('bookmarks').split(','))
  }, [])

  console.log(bookmarks);
  

  return (
    <div className="mt-8 max-w-[1024px] mx-auto px-2 pb-8">
      {bookmarks ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookmarks.map((item, index) => (
            <RecipePreview id={item} key={item+index} />
          ))}
        </div>
      ) : (
        <p className="text-center">You don't have any bookmarks. <Link className="font-bold text-primary" href='/'>Add some!</Link></p>
      )}
    </div>
  )
}

export default BookmarkGrid 