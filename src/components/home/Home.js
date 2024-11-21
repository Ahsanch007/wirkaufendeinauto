import React from 'react';
import { StorageSection } from './StorageSection';
import { UspsSection } from './UspsSection';
import { FactsSection } from './FactsSection';
import { FaqSection } from './FaqSection';
export const Home = () => {
  return (
    <div>
      <StorageSection />
      <UspsSection />
      <FactsSection />
      <FaqSection />
    </div>
  );
};
