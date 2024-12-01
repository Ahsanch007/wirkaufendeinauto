import React from 'react';
export const StorageSection = () => {
  const devices = [
    {
      number: 1,
      desc: 'Kostenlose Online-Bewertung',
      title: 'Bewerte dein Auto in nur wenigen Schritten - gib einfach die Informationen zu deinem Fahrzeug ein',
    },
    {
      number: 2,
      desc: 'Erhalte deinen endgültigen Verkaufspreis online',
      title: 'Unsere Fachleute senden dir deinen endgültigen Verkaufspreis per E-Mail zu',
    },
    {
      number: 3,
      desc: 'Verkaufe dein Auto auf Wunsch',
      title: 'Vereinbare einen Termin in einer unserer Filialen - Verkaufe dein Auto in weniger als einer Stunde',
    },
  ];

  return (
    <div className="md:py-[100px] py-[40px] bg-[#0719430D]">
      <div className="max-w-[986px] w-full mx-auto text-center">
        <h1 className=" font-medium md:text-[56px] text-[30px]  text-black leading-normal md:leading-[56px]">
          bruchsalerautomobile.de <br /> Problemlos ihr Auto verkaufen
        </h1>
      </div>
      <div className=" max-w-[1120px] w-full mx-auto">
        <div className="grid py-5 xl:py-[80px]  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {devices.map((items, index) => (
            <div className="text-center flex relative flex-col gap-2 items-center" key={index}>
              <div className="w-[98px] h-[98px] rounded-[50%]  bg-[#ee202c] text-white font-semibold text-[58.53px] flex items-center justify-center ">
                {items.number}
              </div>
              <p className="text-[20px] text-black font-semibold   w-full mx-auto ">{items.desc}</p>
              <p className="text-[16px] text-black font-normal   w-full mx-auto ">{items.title}</p>
              {index !== devices.length - 1 && (
                <div className="h-[1.5px] w-[150px] bg-[#0719434D] hidden md:block absolute right-[-80px] top-[20%]"></div>
              )}
            </div>
          ))}
        </div>
        <div className="  flex justify-center">
          <button className="py-[14px] px-[28px] rounded-[10px] bg-[#ee202c] text-white font-semibold text-[20px]">
            Jetzt verkaufen
          </button>
        </div>
      </div>
    </div>
  );
};
