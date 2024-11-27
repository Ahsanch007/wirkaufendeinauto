import React from 'react';

export const Footer = () => {
  return (
    <div className="py-[20px] px-[15px] bg-black text-white">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid py-5 grid-cols-1 md:grid-cols-3 gap-[15px]">
          <div className="">
            <p className="mb-[15px]  text-[16px] font-normal">wirkaufendeinauto.de</p>
            <ul className="pl-[50px]  list-disc">
              <li className="hover:underline cursor-pointer">Häufige Fragen</li>

              <li className="hover:underline cursor-pointer">Verkauf</li>
            </ul>
          </div>
          <div className="">
            <p className="mb-[15px]  text-[16px] font-normal">Kundenservice</p>
            <ul className="pl-[50px]  list-disc">
              <li className="hover:underline cursor-pointer">Impressum</li>
              <li className="hover:underline cursor-pointer">AGB</li>
              <li className="hover:underline cursor-pointer">Datenschutz</li>
            </ul>
          </div>
        </div>
        <h1 className="text-center">© bruchsalerautoverkauf 2012-2024</h1>
      </div>
    </div>
  );
};
