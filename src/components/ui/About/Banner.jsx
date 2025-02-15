
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <>
    <section >
      <div className=" AboutBanner text-white py-12" style={{
        backgroundImage: `url('images/aboutBanner.jpg')`       
      }}>
   <h1>About Us</h1>
   <span>The Plumbing has been in business since 1978 ________</span>
      </div>
<div className="flex gap-2 items-center px-5 py-2 shadow-2xl ">
    <Link to="/">Home</Link>
    <span > ⩺ </span>
    <span to="#">About Us</span>
</div>

    </section>
    </>
  )
}
