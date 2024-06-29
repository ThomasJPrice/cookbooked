'use client'

import { Bookmark, BookmarkCheck } from "lucide-react"
import { Button } from "../ui/button"
import { useState, useEffect } from "react"

const BookmarkButton = ({ id }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarkedItems = localStorage.getItem('bookmarks') ? localStorage.getItem('bookmarks').split(',') : [];
    setIsBookmarked(bookmarkedItems.includes(id));
  }, [id]);

  const toggleBookmark = () => {
    const bookmarkedItems = localStorage.getItem('bookmarks') ? localStorage.getItem('bookmarks').split(',') : [];
    if (isBookmarked) {
      const updatedItems = bookmarkedItems.filter(item => item !== id);
      localStorage.setItem('bookmarks', updatedItems);
    } else {
      bookmarkedItems.push(id);
      localStorage.setItem('bookmarks', bookmarkedItems);
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Button variant='icon' onClick={toggleBookmark}>
      {isBookmarked ? <BookmarkCheck /> : <Bookmark />}
    </Button>
  )
}

export default BookmarkButton;
