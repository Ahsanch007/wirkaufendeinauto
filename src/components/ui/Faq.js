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
          title: 'Muss ich Gebühren bezahlen, wenn ich mein Auto nicht verkaufe?',
          content:
            'Nein, für dich entstehen keinerlei Gebühren. Unser Service ist vollkommen kostenlos. Übrigens: Bei uns kannst du auch dein defektes Auto verkaufen.',
        },
        {
          id: 2,
          title: 'Wie verkaufe ich mein Auto nachdem ich den endgültigen Verkaufspreis erhalten habe?',
          content:
            'Nachdem du deinen endgültigen Verkaufspreis erhalten hast, buchst du einen Abgabe-Termin in einer unserer Filialen in deiner Nähe. Vor Ort werden die Auto-Details von einem unserer Mitarbeiter bestätigt. Anschließend wird der Kaufvertrag aufgesetzt und mit deiner Unterschrift der Verkauf deines Autos abgeschlossen. Das Auto bleibt direkt in unserer Filiale. Wir überweisen dir dein Geld und melden dein Auto kostenlos für dich ab.',
        },
        {
          id: 3,
          title: 'Wie buche ich meinen Abgabe-Termin?',
          content:
            'Nach der Online-Begutachtung erhältst du per E-Mail deinen endgültigen Verkaufspreis. Gleichzeitig schicken wir dir einen Link, damit du auf unserer Website bequem deinen Abgabe-Termin buchen kannst.',
        },
        {
          id: 4,
          title: 'Wie läuft mein Abgabe-Termin ab?',
          content:
            'Du kommst zu deinem gebuchten Abgabe-Termin in eine unserer über 130 Filialen bundesweit. Ein Mitarbeiter bestätigt deine Eingaben.',
          content2: 'Wir schließen einen Kaufvertrag mit dir ab und überweisen dir den Verkaufspreis.',
          content3: 'Wir kümmern uns um die Abmeldung und schicken dir eine Abmeldebestätigung zu.',
        },
        {
          id: 5,
          title: 'Wie bezahlt ihr den Verkaufspreis für mein Auto?',
          content:
            'Wir überweisen dir nach dem Verkauf den Verkaufspreis umgehend und absolut sicher auf dein Bankkonto. Du erhältst dein Geld komfortabel, zuverlässig und auf sicherem Weg. Eine Barauszahlung ist aus Sicherheits- und organisatorischen Gründen leider nicht möglich.',
        },
        {
          id: 6,
          title: 'Du hast noch weitere Fragen?',
          content:
            'Solltest du noch weitere Fragen haben, dann findest du in unserem FAQ-Bereich die Antwort. Was unsere über 3 Mio. zufriedenen Kunden über uns denken, findest du in unserem Erfahrungen-Bereich.',
        },
      ],
    },
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
  ];

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
                src={activeIndex === index ? '/assets/minus-sign.png' : '/assets/plus.svg'}
                className="w-[14px] h-[14px] filter-red"
                alt="toggle icon"
              />
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-[300px]' : 'max-h-0'
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
