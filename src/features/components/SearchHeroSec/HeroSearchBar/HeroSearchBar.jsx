import { IoSearchOutline } from 'react-icons/io5'
import styles from './HeroSearchBar.module.css'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

export default function HeroSearchBar({ param }) {
  const searchInputRef = useRef()
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchInputRef.current.value.trim() === "") {
      toast.error("يرجى كتابة موضع البحث اولا")
      return
    }

    navigate(`/search?q=${searchInputRef.current.value}`)
  }

  return (
    <form onSubmit={handleSearchSubmit} className={`${styles['search-bar']} d-flex`}>
      <div className={`${styles['search-bar__input']}`}>
        <input
          type="text"
          name='search'
          className='text--dark'
          placeholder='بحث'
          defaultValue={param}
          ref={searchInputRef}
        />
      </div>
      <button className={`${styles['search-bar__submit']}`}>
        <IoSearchOutline />
      </button>
    </form>
  )
}
