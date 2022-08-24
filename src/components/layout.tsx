import React, { ReactNode } from 'react'
import { Router } from 'next/router'
import Navbar from './navbar'
import Footer from './footer'
import { FooterProps } from './footerProps'
import { NavbarProps } from './navbarProps'

type Props = {
  router: Router
  children: ReactNode
}

const Layout = ({ router, children }: Props) => (
  <>
    <Navbar links={NavbarProps.links} />
    <div style={{ marginTop: 72 }}>{children}</div>
    <Footer data={FooterProps.data} />
  </>
)

export default Layout
