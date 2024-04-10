import { Link } from 'react-router-dom';
import bannerImg from '../Images/banner.png'
function Banner() {

    const userString = localStorage.getItem("user")
    const user = JSON.parse(userString)
    return (
        <>
            <div className='mt-6 mb-20 flex justify-between items-center w-[70%] m-auto'>
                <div className='w-[50%]'>
                    <h1 className='text-[40px] mb-2'>Projectile</h1>
                    <p className='text-[20px] underline'>Perfect place for your projects.</p>
                    <p>Facing problems to manage your personal or team projects? use <span className='text-cyan-600 font-semibold'>Projectile.</span> You can manage your projects in a esay way.</p>
                    <button className='bg-cyan-400 px-4 py-2 rounded-sm font-semibold mt-4'><Link className='flex flex-row justify-between items-center' to='/signup'>
                        {
                            user?.email ? "Alredy have account" : "Sign Up"
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link></button>
                </div>
                <div className='w-[50%]'>
                    <img className='w-full' src={bannerImg} alt="" />
                </div>
            </div>
        </>
    );
}

export default Banner;