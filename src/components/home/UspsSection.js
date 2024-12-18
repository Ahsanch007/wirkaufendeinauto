import React from 'react';
const items = [
  {
    imgSrc: '/images/online-survey.png',
    title: 'Faire und professionelle Online-Bewertung',
    description: 'Erhalte einen gerechten Preis, auch wenn du kein Experte bist!',
  },
  {
    imgSrc: '/images/car-sales.png',
    title: 'Autoverkauf in weniger als 24 Stunden',
    description: 'Verkaufe dein Auto an einem Tag - ganz ohne Stress und Verhandlungen!',
  },
  {
    imgSrc: '/images/secure-payment-blue-icon.svg',
    title: 'Profitiere von einem Spitzenpreis',
    description: 'Als größter Autoankäufer Europas garantieren wir dir erstklassige Preise in ganz Europa.',
  },
  {
    imgSrc: '/images/check.png',
    title: 'Kostenlose Abmeldung deines Fahrzeugs',
    description: 'Wir kümmern uns um alle notwendigen Formalitäten für dich.',
  },
];


export const UspsSection = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 pt-[70px] pb-[40px] ">
      <h1 className="text-center mb-[59px] text-[24px] lg:text-[28px] font-bold text-black ">
        Unser Service - Deine Vorteile
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        {items.map((item, index) => (
          <div key={index} className="pt-[36px] px-[25px] pb-[21px]" style={{ boxShadow: '0 0 8px 0 rgba(0,0,0,.12)' }}>
            <div className="flex flex-col gap-3">
              <img src={item.imgSrc} className="w-[64px] h-auto object-cover" alt={item.title} />
              <div className="flex flex-col">
                <h1 className="font-bold text-[16px] text-black leading-1 font-sans">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
