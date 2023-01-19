import React from 'react'
import Header from '../components/Header'
import Footer  from '../components/Footer'
import Tabs from '../utils/Tabs'
import SellerDetails from '../components/SellerDetails'
import SellerPropertyDetails from '../components/SellerPropertyDetails'
import Messages from '../components/Messages'
import Banner from '../components/Banner'
import SellerModule from "../pages/SellerModule"

const SellerPage = () => {
  return (
    <section className='bg-white' >
      <Header />
      <Banner />
      {/* <SellerModule /> */}
      <Tabs />
      {/* <Footer /> */}
    </section>
  )
}

export default SellerPage
