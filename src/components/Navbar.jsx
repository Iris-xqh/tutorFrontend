const Navbar = () => {
    return (
        <div>
            <header className="flex flex-wrap items-center justify-between px-12 p-4 h-20 -mb-32">

                <div className="w-full md:w-auto">
                    <div className="flex items-center">
                        < img src="/img/logo.jpg" alt="Findollar Logo" className="w-13 h-12 mr-2" />
                        <span className="text-xl font-bold">代写帮</span>
                    </div>
                </div>

                <ul className="flex-1 flex justify-center md:justify-end list-reset">
                    <li>
                        <a href="#" className="text-base text-gray-800 no-underline hover:text-black">主页</a>
                    </li>
                    {/* <li class="ml-8">
                        <a href="#" class="text-sm text-gray-800 no-underline hover:text-black">Products</a>
                    </li> */}
                    <li className="ml-8">
                        <a href="#" className="text-base text-gray-800 no-underline hover:text-black">发布任务</a>
                    </li>
                    <li className="ml-8 hidden md:inline">
                        <a href="#" className="text-base font-bold px-4 py-3 no-underline text-white bg-black hover:bg-gray-800">登陆</a>
                    </li>
                </ul>

            </header>
        </div>
    );
};

export default Navbar;