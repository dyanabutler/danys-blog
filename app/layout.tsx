"use client"
import "../styles/globals.css"
import { Navbar } from "@/components/Navbar"
import GalleryNavbar from "@/components/GalleryNavbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import { usePathname } from 'next/navigation'
import PostsNavbar from "@/components/PostsNavbar"

interface RootLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, showNavbar = true }) => {
  const pathname = usePathname()

  let NavbarComponent;

  if (pathname === '/gallery') {
    NavbarComponent = GalleryNavbar;
  } else if (showNavbar) {
    NavbarComponent = Navbar;
  }

  if (pathname === '/blog') {
    NavbarComponent = PostsNavbar;
  } else if (showNavbar) {
    NavbarComponent = Navbar;
  }

  if (pathname === '/blog/posts/') {
    NavbarComponent = PostsNavbar;
  } else if (showNavbar) {
    NavbarComponent = Navbar;
  }

  return (
    <html lang="en">
      <head />
      <body >
        <ThemeProvider enableSystem={true} attribute="class">
          {NavbarComponent && <NavbarComponent />}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
