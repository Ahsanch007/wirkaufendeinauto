import React from 'react';

export const FactsSection = () => {
  return (
    <div className=" bg-black text-white py-[58px]">
      <div className="max-w-[1200px] w-full mx-auto px-[15px]">
        <h1 className="text-center mb-[30px] lg:text-[28px] text-[24px] font-bold ">Zahlen & Fakten</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[15px]">
          <div className="text-center">
            <h1 className="text-[52px] lg:text-[80px] leading-normal font-bold ">4+ Mio.</h1>
            <p className="lg:text-[20px]">
              Mehr als 4 Mio.
              <br />
              zufriedene Kunden
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-[52px] lg:text-[80px] leading-normal font-bold ">30 Sek.</h1>
            <p className="lg:text-[20px]">
              Alle 30 Sekunden bewerten
              <br />
              wir ein Auto
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-[52px] lg:text-[80px] leading-normal font-bold ">120+</h1>
            <p className="lg:text-[20px]">
              Mehr als 120 Filialen in ganz
              <br />
              Deutschland
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
