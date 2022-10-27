import { FC } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { useTheme } from '../hooks/useTheme'
import {Link} from 'react-router-dom'
import '../scss/header.scss'

const Header: FC = () => {
   const { theme, setTheme } = useTheme()
   const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

   return (
      <header>
         <Link to='/' >Were in the world?</Link>
         <button  onClick={toggleTheme}  >
            {theme === 'dark' ?
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