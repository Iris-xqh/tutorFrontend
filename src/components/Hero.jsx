import React from 'react';
import { useRef } from 'react';
import { Carousel, Button } from 'antd';
import 'antd/dist/reset.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import imageSrc from '/img/heroSlide.svg';

const Hero = () => {
    const carouselRef = useRef(null);
    const size = 'large';
    return (
        <div className='pt-20'>
            <div>
                <div
                    className="w-screen h-96 text-white flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                >
                    <h1 className="mt-4 mb-2 text-5xl font-bold">在线辅导平台</h1>
                    <h3>还在为作业苦恼吗？来这里找辅导吧！</h3>
                    <Button type="primary" size={size} className="mt-6 bg-black">
                        逛逛广场
                    </Button>
                </div>
            </div>

        </div>
    );

};

export default Hero;
