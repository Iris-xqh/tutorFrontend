import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="bg-white flex flex-col w-full h-full ">
            <Navbar />
            <Hero />
            <div className="h-[600px] w-full px-6 md:px-12 pb-12 pt-20 flex flex-wrap justify-between">

                <div
                    className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?w=1200')" }}
                ></div>

                <div className="bg-white text-orange-900 md:h-full w-full md:flex-1 flex justify-center items-center">
                    <div className="px-8 md:px-16">
                        <h1 className="text-lg md:text-3xl mb-6">寻找作业帮助</h1>
                        <p className="mb-6 leading-normal text-sm md:text-base"> 一些介绍，有关寻求帮助者能在该application做什么 <a href="#more" className="text-black text-sm">Read More</a></p>
                        <a href="#" className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">发布任务</a>
                    </div>
                </div>

            </div>

            <div className="h-[600px] w-full px-6 md:px-12 pb-12 pt-10 flex flex-wrap justify-between">


                <div className="bg-white text-orange-900 md:h-full w-full md:flex-1 flex justify-center items-center">
                    <div className="px-8 md:px-16">
                        <h1 className="text-lg md:text-3xl mb-6">帮助别人</h1>
                        <p className="mb-6 leading-normal text-sm md:text-base"> 另一个介绍，有关帮助别人作业的人能在该网站做什么 <a href="#more" className="text-black text-sm">Read More</a></p>
                        <a href="#" className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100">发布个人简介</a>
                    </div>
                </div>

                <div
                    className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?w=1200')" }}
                ></div>

            </div>
        </div>
    );

};

export default Home;
