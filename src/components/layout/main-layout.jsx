import React from 'react'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

const MainLayout = ({children}) => (
    <>
    <Header />
        {children}
    <Footer />
    </>
)

export default MainLayout;