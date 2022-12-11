import './AboutUs.tsx';
import { FirstPart } from './FirstPart/FirstPart';
import { OurClientSay } from './OurClientSay/OurClientSay';
import { OurFeatures } from './OurFeatures/OurFeatures';

export const AboutUs = () => {
  return (
    <>
      <FirstPart />
      <OurFeatures />
      <OurClientSay />
    </>
  );
};
