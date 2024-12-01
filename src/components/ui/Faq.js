import React, { useState, useRef } from 'react';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Verpachtung');
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: 'Verpachtung',
      faqItems: [
        {
          id: 1,
          title: 'Entstehen Gebühren, wenn ich mein Auto nicht verkaufe?',
          content:
            'Nein, es fallen keine Gebühren für dich an. Unser Service ist vollständig kostenlos. Übrigens kannst du auch ein defektes Auto bei uns verkaufen.',
        },
        {
          id: 2,
          title: 'Wie gehe ich vor, nachdem ich den endgültigen Verkaufspreis erhalten habe?',
          content:
            'Sobald du deinen endgültigen Verkaufspreis erhalten hast, kannst du einen Termin zur Abgabe in einer unserer Filialen in deiner Nähe buchen. Vor Ort werden die Fahrzeugdetails von einem unserer Mitarbeiter überprüft. Danach wird der Kaufvertrag erstellt und mit deiner Unterschrift abgeschlossen. Dein Auto bleibt direkt in unserer Filiale, und wir überweisen dir das Geld sowie kümmern uns um die kostenlose Abmeldung.',
        },
        {
          id: 3,
          title: 'Wie kann ich meinen Abgabe-Termin buchen?',
          content:
            'Nach der Online-Begutachtung erhältst du per E-Mail deinen endgültigen Verkaufspreis. Gleichzeitig senden wir dir einen Link zu, über den du bequem auf unserer Website deinen Abgabe-Termin buchen kannst.',
        },
        {
          id: 4,
          title: 'Wie erfolgt die Zahlung des Verkaufspreises für mein Auto?',
          content:
            'Nach dem Verkauf überweisen wir dir den Verkaufspreis schnell und sicher auf dein Bankkonto. Du erhältst dein Geld bequem, zuverlässig und auf einem sicheren Weg. Eine Barauszahlung ist aus Sicherheits- und organisatorischen Gründen leider nicht möglich.',
        },
        {
          id: 5,
          title: 'Hast du noch weitere Fragen?',
          content:
            'Wenn du noch weitere Fragen hast, findest du möglicherweise die Antwort in unserem FAQ-Bereich.',
        },
      ],
    },
  ];
  /*{
    category: "Projekte",
    faqItems: [
    ]
  },
  {
    category: "Technologie",
    faqItems: [
    ]
  },
  {
    category: "Umgebung",
    faqItems: [
    ]
  }*/

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
    setActiveIndex(null);
  };

  const activeFaqItems = faqData.find((item) => item.category === activeFilter)?.faqItems || [];

  return (
    <div className="md:pl-3 flex flex-col gap-3">
      {activeFaqItems.map((item, index) => (
        <div key={item.id}>
          <div
            className="md:p-[20px] p-[10px]   cursor-pointer    border-b border-[#ee202c] bg-transparent"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center  justify-between">
              <h3 className="font-semibold text-black text-[18px] leading-[28px]">{item.title}</h3>
              <img
                src={activeIndex === index ? '/images/minus-sign.png' : '/images/plus.svg'}
                className="w-[14px] h-[14px] filter-red"
                alt="toggle icon"
              />
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[300px]' : 'max-h-0'
                }`}
              style={{
                height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
              }}
            >
              <div className="p-[10px] mt-2">
                <p className="text-[16px]  text-black leading-normal mb-2">{item.content}</p>
                <p className="text-[16px]  text-black leading-normal mb-2">{item.content2}</p>
                <p className="text-[16px]   text-black leading-normal  ">{item.content3}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
