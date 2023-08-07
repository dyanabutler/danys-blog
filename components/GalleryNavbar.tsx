"use client"
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'


const GalleryNavbar: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <nav className="w-full h-20 mx-auto px-5 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="flex justify-between items-center md:items-center">
        <Link href="/">
          <h1 className="font-bold text-xl cursor-pointer mt-4">
         Dyana Butler!
          </h1>
        </Link>

        <div className="flex items-center mt-4">
          <Link href="/">
            <h2 className="font-medium text-sm mr-4 cursor-pointer">
              Home
            </h2>
        
          </Link>
          

          {currentTheme === 'dark' ? (
            <button
            onClick={() => setTheme("light")}
            className="bg-slate-100 p-2 rounded-xl"
          >
            <RiSunLine size={25} color="black" />
          </button>
        ) : (
          <button
            onClick={() => setTheme("dark")}
            className="bg-slate-100 p-2 rounded-xl"
          >
            <RiMoonFill size={25} />
          </button>
          )}
        </div>
      </div>
    </nav>
    
  )
}

export default GalleryNavbar


