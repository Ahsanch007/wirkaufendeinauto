import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: "Heiko Pasch",
    date: "12 Sep. 2024",
    ratingSrc: "/assets/Rating.svg",
    content: "Ich bin begeistert von Entdecke Solar! Von der Beratung bis zur Inbetriebnahme lief alles reibungslos. Kompetente Mitarbeiter, schnelle Montage und fairer Preis.",
  },
  {
    name: "Ralf Foltmann",
    date: "18 Sep. 2024",
    ratingSrc: "/assets/Rating.svg",
    content: "Der Service war herausragend, die Mitarbeiter stets erreichbar und die Beratung umfassend.",
  },
  {
    name: "Deniz Zeynep",
    date: "12 Sep. 2024",
    ratingSrc: "/assets/Rating.svg",
    content: "Die Beratung war hilfreich und das Angebot klar. Man spart sich tatsächlich unnötige Kosten durch Solar.",
  },
];

export const ReviewsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const renderDots = () => (
    <div className="arrows dots flex gap-3 pt-7 justify-center">
      <img src="/assets/arrow-left.svg" className="w-[24px] h-[12px] cursor-pointer" alt="Previous" onClick={() => sliderRef.current.slickPrev()} />
      <div className="flex items-center gap-2">
        {reviews.map((_, idx) => (
          <div key={idx} className={`dot cursor-pointer w-[8px] h-[8px] rounded-[50%] ${activeSlide === idx ? 'bg-[#071943]' : 'bg-[#0719434D]'}`} onClick={() => sliderRef.current.slickGoTo(idx)}></div>
        ))}
      </div>
      <img src="/assets/arrow-right.svg" className="w-[24px] h-[12px] cursor-pointer" alt="Next" onClick={() => sliderRef.current.slickNext()} />
    </div>
  );

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-[20px] 2xl:px-[60px] px-[20px] py-[20px] md:px-[40px] md:py-[40px] 2xl:py-[56px] border border-[#0000000D] max-w-[420px] 2xl:max-w-[485px]" style={{ boxShadow: '0px 4px 56px 0px #0000001A' }}>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <img src="/assets/person.png" className="w-[32px] h-[32px]" alt={review.name} />
                <h3 className="text-[24px] font-medium">{review.name}</h3>
              </div>
              <p className="text-[#07194380] font-medium text-[20px]">{review.date}</p>
            </div>
            <img src={review.ratingSrc} alt="Rating" className="w-[116px] h-auto py-4" />
            <p className="text-[#071943BF] font-medium text-[20px] leading-[30px]">
              {review.content}
            </p>
          </div>
        ))}
      </Slider>
      {renderDots()}
    </div>
  );
};
