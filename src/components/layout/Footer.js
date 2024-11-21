import React from 'react';

export const Footer = () => {
  return (
    <div className="py-[20px] px-[15px] bg-black text-white">
      <div className="max-w-[1200px] mx-auto w-full">
        <p>wirkaufendeinauto.de International</p>
        <div className="flex flex-wrap gap-[10px] py-3">
          <img src="/images/flag-vivid-de.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-at.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-es.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-fr.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-be.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-v2-it.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-nl.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-se.png" className="w-[34px] h-auto" alt="" />
          <img src="/images/flag-vivid-pt.png" className="w-[34px] h-auto" alt="" />
        </div>
        <div className="grid py-5 grid-cols-1 md:grid-cols-3 gap-[15px]">
          <div className="">
            <p className="mb-[15px]  text-[16px] font-normal">wirkaufendeinauto.de</p>
            <ul className="pl-[50px]  list-disc">
              <li className="hover:underline cursor-pointer">Erfahrungen</li>
              <li className="hover:underline cursor-pointer">Häufige Fragen</li>
              <li className="hover:underline cursor-pointer">Unsere Filialen</li>
              <li className="hover:underline cursor-pointer">Jobs</li>
              <li className="hover:underline cursor-pointer">Presse</li>
              <li className="hover:underline cursor-pointer">Expansions Ziele</li>
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
          <div className="">
            <p className="mb-[15px]  text-[16px] font-normal">Informationen</p>
            <ul className="pl-[50px]  list-disc">
              <li className="hover:underline cursor-pointer">Magazin</li>
              <li className="hover:underline cursor-pointer">Themen</li>
              <li className="hover:underline cursor-pointer">Affiliate-Partner werden</li>
              <li className="hover:underline cursor-pointer">Autofinanzierung</li>
              <li className="hover:underline cursor-pointer">Straßenverkehrsamt</li>
              <li className="hover:underline cursor-pointer">Händler</li>
            </ul>
          </div>
        </div>
        <h1 className="text-center">© wirkaufendeinauto.de 2012-2024</h1>
      </div>
    </div>
  );
};
