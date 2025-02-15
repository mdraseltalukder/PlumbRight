import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import Header from '../Pages/Header'

export default function Root() {
  return (
    <>
        <Header />
        <main>
         <Outlet/>
            <Footer/>
        </main>
    </>
  )
}
