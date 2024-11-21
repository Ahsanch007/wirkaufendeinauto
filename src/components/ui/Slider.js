import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 md:right-[-10px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src="/assets/arrow-right.svg" className="w-[24px] h-[12px]" alt="Next" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 md:left-[-24px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <img src="/assets/arrow-left.svg" className="w-[24px] h-[12px]" alt="Previous" />
    </div>
  );
};

export const CustomSlider = () => {
  const slides = [
    {
      id: 1,
      image: '/assets/alex.jpg',
      name: 'Alexander Beck',
      position: 'Geschäftsführer'
    },
    {
      id: 2,
      image: '/assets/christopher.jpg',
      name: 'Christopher Börger',
      position: 'Vertriebsleiter'
    },

  ];

  const settings = {
    dots: false,
    
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <div className="2xl:max-w-[1371px] md:mx-[30px] 2xl:mx-auto">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slick-slide px-2" id={`slide-${slide.id}`}>
              <div className="flex flex-col items-center">
                <div className="w-[314px] h-[380px] flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="py-2 text-[24px] font-semibold text-[#071943]">{slide.name}</h1>
                <p className="text-[#07194380] font-medium text-[20px]">{slide.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};