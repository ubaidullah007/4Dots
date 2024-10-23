import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioItem {
  title: string;
  subTitle: string;
  img: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    img: '/portfolio-img/1/1.jpg',
    title: 'Mails',
    subTitle: 'Mobile app',
  },
  {
    img: '/portfolio-img/1/5.jpg',
    title: 'Enzsan',
    subTitle: 'Obertauern',
  },
  {
    img: '/portfolio-img/1/3.jpg',
    title: 'Zumar',
    subTitle: 'Web Agency',
  },
  {
    img: '/portfolio-img/1/6.jpg',
    title: 'Bono',
    subTitle: 'Mobile app',
  },
];

const PortfolioSlider = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full">
              {/* Left side: Image and text */}
              <div className="w-1/2 flex flex-col justify-center pl-16">
                <h1 className="text-white text-4xl">{item.title}</h1>
                <h2 className="text-gray-400 text-2xl">{item.subTitle}</h2>
              </div>
              {/* Right side: Next slide text */}
              <div className="w-1/2 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
