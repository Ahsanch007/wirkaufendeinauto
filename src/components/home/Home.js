import React from 'react';
import { StorageSection } from './StorageSection';
import { UspsSection } from './UspsSection';
import { FactsSection } from './FactsSection';
import { FaqSection } from './FaqSection';
import DynamicCarDetailsForm from './Calculator';
export const Home = () => {
  return (
    <div>
      <DynamicCarDetailsForm />
      <StorageSection />
      <UspsSection />
      <FactsSection />
      <FaqSection />
    </div>
  );
};
