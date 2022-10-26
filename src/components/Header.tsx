import { FC } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { darkModeSlice } from '../store/reducers/DarkModeSlice';
import {Link} from 'react-router-dom'
import '../scss/header.scss'


const Header: FC = () => {
   const dispatch = useAppDispatch()
   const { darkMode } = useAppSelector(state => state.darkModeReducer)
   const { toggleThemeMode } = darkModeSlice.actions

   return (
      <header className={darkMode ? 'dark' : ''} >
         <Link to='/' >Were in the world?</Link>
         <button   onClick={() => dispatch(toggleThemeMode(!darkMode))}  >
            {darkMode ?
               <>
                  <MdDarkMode />
                  <span>Light mode</span>
               </>
               :
               <>
                  <MdOutlineDarkMode />
                  <span>Dark mode</span>
               </>}
         </button>
      </header>
   )
}



export default Header