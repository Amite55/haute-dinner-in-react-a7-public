
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 my-4">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl font-bold">Haute <span className="text-green-500">Dinner</span></a>
                <div className="flex ml-20 gap-6">
                    <p className="btn btn-ghost text-xl">Home</p>
                    <p className="btn btn-ghost text-xl">Recipes</p>
                    <p className="btn btn-ghost text-xl">About</p>
                    <p className="btn btn-ghost text-xl">Search</p>
                </div>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 rounded-full md:w-auto" />
                    </div>
                    <div className="dropdown  dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className=" rounded-full justify-center items-center text-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;