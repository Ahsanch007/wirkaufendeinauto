import React from 'react';
const items = [
  {
    imgSrc: '/images/free-online-car-assessment-icon.svg',
    title: 'Faire & professionelle Online-Bewertung',
    description: 'Bei uns erhältst du einen fairen Preis auch ohne Experte zu sein!',
  },
  {
    imgSrc: '/images/24h-car-sale-icon.svg',
    title: 'Autoverkauf innerhalb von 24 Stunden',
    description: 'Verkaufe dein Auto innerhalb eines einzigen Tages - stressfrei und ganz ohne Verhandeln!',
  },
  {
    imgSrc: '/images/secure-payment-blue-icon.svg',
    title: 'Erhalte einen Mega Preis',
    description: 'Als Europas größter Autoankäufer bieten wir dir europaweit Mega Preise.',
  },
  {
    imgSrc: '/images/car-sales-contract-icon.svg',
    title: 'Kostenlose Abmeldung deines Autos',
    description: 'Wir übernehmen den kompletten Papierkram für dich.',
  },
];
export const UspsSection = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 pt-[70px] pb-[40px] ">
      <h1 className="text-center mb-[59px] text-[24px] lg:text-[28px] font-bold text-black ">
        4 Gründe warum du an uns verkaufen solltest
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        {items.map((item, index) => (
          <div key={index} className="pt-[36px] px-[25px] pb-[21px]" style={{ boxShadow: '0 0 8px 0 rgba(0,0,0,.12)' }}>
            <div className="flex gap-3">
              <img src={item.imgSrc} className="w-[68px] h-[66px] object-cover" alt={item.title} />
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
