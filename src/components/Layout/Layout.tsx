import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import { StoryCard } from '../storyCard/StoryCard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main>
            <ToastContainer />
            <Navbar />
            {children}
            <div className="relative">
                <div className="absolute w-full translate-y-[-50%]">
                    <StoryCard />
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Layout