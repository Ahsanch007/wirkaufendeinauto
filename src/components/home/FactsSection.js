import React from 'react';

export const FactsSection = () => {
  return (
    <div className=" bg-black text-white py-[58px]">
      <div className="max-w-[1200px] w-full mx-auto px-[15px]">
        <h1 className="text-center mb-[30px] lg:text-[28px] text-[24px] font-bold ">Zahlen & Fakten</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
          <div className="text-center">
            <h1 className="text-[52px] lg:text-[80px] leading-normal font-bold ">500+</h1>
            <p className="lg:text-[20px]">
              zufriedene Kunden
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-[52px] lg:text-[80px] leading-normal font-bold ">Einfach</h1>
            <p className="lg:text-[20px]">
              Formular ausfüllen
              <br />
              Auto verkaufen
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-[52px] lg:text-[80px] leading-normal font-bold ">Gute</h1>
            <p className="lg:text-[20px]">
              Preise &
              <br />
              Konditionen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
