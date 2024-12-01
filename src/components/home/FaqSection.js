import React from 'react';
import { Faq } from '../ui/Faq';

export const FaqSection = () => {
  return (
    <div id="faq" className="lg:pt-[100px] bg-[#F0F0F0] lg:pb-[150px] py-[40px] px-[15px] mx-auto 2xl:max-w-[1520px] ">
      <div className="text-center">
        <h1 className="text-[35px] text-black  mb-[30px] ">Häufige Fragen</h1>
      </div>
      <div className="pt-5 max-w-[800px] mx-auto">
        <Faq />
      </div>
    </div>
  );
};
