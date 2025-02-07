import React from 'react'
import {Outlet} from "react-router-dom"

import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam beatae distinctio quod labore quo voluptatibus vitae adipisci sunt, illo consectetur hic mollitia at, quia asperiores, quisquam ipsam totam molestiae. Amet!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit praesentium modi sequi eligendi velit nesciunt illum voluptatibus facilis optio inventore? Nobis repellendus ipsa ad perspiciatis, debitis eius hic a nesciunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ab iusto ad iure sapiente ut sequi, cumque magni placeat accusamus minima illo facilis magnam ipsum nostrum. Alias quaerat beatae officia.
        <Footer/>
    </>
  )
}

export default Layout