'use client';
import Link from 'next/link';
import LoginModal from '../loginModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AppDispatch } from '@/redux/store';
import { getUser } from '@/redux/slices/authSlice';
import { logOut } from '@/redux/slices/authSlice';
const Header = ({ modelOpen }: { modelOpen: boolean }) => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: any) => state.auth.user);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuClose = () => {
        setMenuOpen(false);
    };
    // console.log(user);
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])
    return (
        <>
            <div className="w-full h-[80px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ">
                <div className='flex justify-between items-center'>
                    <Link href='/' className='mx-10'>
                        <div className="w-fit h-[110px] flex">
                            <div className="flex items-center">
                                <p className="font-bold text-lime-200 text-2xl">T</p>
                                <p className="font-bold text-lime-300 text-2xl">O</p>
                                <p className="font-bold text-teal-300 text-2xl">K</p>
                                <p className="font-bold text-teal-500 text-2xl">I</p>
                            </div>
                            <div className="flex items-center mx-2">
                                <p className="font-bold text-indigo-300 text-md">c</p>
                                <p className="font-bold text-pink-300 text-md">i</p>
                                <p className="font-bold text-pink-400 text-md">n</p>
                                <p className="font-bold text-amber-500 text-md">e</p>
                                <p className="font-bold text-amber-400 text-md">m</p>
                                <p className="font-bold text-orange-600 text-md">a</p>
                            </div>
                        </div>
                    </Link>
                    <div className="flex justify-start items-center w-[25%]">
                        <Link href="/movies" className='text-1xl font-bold mx-5'>Phim Đang Chiếu</Link>
                        {user ? (
                            <div className="relative inline-block text-left">
                                <button
                                    type="button"
                                    onClick={() => setMenuOpen(!isMenuOpen)}

                                    className="inline-flex items-center justify-center p-2 border border-transparent text-base leading-6 font-medium  transition ease-in-out duration-150"
                                >
                                    <p className="font-bold mr-3">Tài khoản</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[36px] h-[36px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </button>
                                {isMenuOpen && (
                                    <div className="origin-top-right absolute right-[-100px] mt-2 w-56 z-50 backdrop-blur-md bg-gray-100/10 rounded-2xl p-4">
                                        <div className="rounded-2xl">
                                            <div className="py-1 cursor-pointer" onMouseLeave={handleMenuClose}>
                                                <div className="flex flex-col pb-4 justify-center items-center">
                                                    <p>Xin chào: {user.name}</p>
                                                </div>
                                                {user.role === 'Admin' && (
                                                    <div className='flex justify-center items-center hover:underline transition duration-150 ease-in-out'>
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M12 14v2a6 6 0 00-6 6H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm9 6h1v5h-8v-5h1v-1a3 3 0 016 0v1zm-2 0v-1a1 1 0 00-2 0v1h2z" />
                                                        </svg>
                                                        <Link href={'/mytickets'}
                                                            className="block px-4 py-2  w-full text-md text-white "
                                                        >
                                                            Quản lý Admin
                                                        </Link>
                                                    </div>
                                                )}

                                                <div className='flex justify-center items-center hover:underline transition duration-150 ease-in-out'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                                                    </svg>
                                                    <Link href={'/mytickets'}
                                                        className="block px-4 py-2  w-full text-md text-white "
                                                    >
                                                        Thông tin cá nhân
                                                    </Link>
                                                </div>
                                                <div className='flex justify-center items-center hover:underline transition duration-150 ease-in-out'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                                    </svg>

                                                    <Link href={'/mytickets'}
                                                        className="block px-4 py-2  w-full text-md text-white "
                                                    >
                                                        Vé của bạn
                                                    </Link>
                                                </div>
                                                

                                                <div className='flex justify-center items-center hover:underline transition duration-150 ease-in-out'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                                </svg>

                                                    <div onClick={() => logOut(dispatch)}
                                                        className="block px-4 py-2  w-full text-md text-white "
                                                    >
                                                       Đăng xuất
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <LoginModal />
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};
export default Header;