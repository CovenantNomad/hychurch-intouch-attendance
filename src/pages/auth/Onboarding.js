import React from 'react';
//components
import AuthContainer from '../../components/blocks/containers/AuthContainer';
import AuthNavbar from '../../components/blocks/navbars/AuthNavbar';
import ForwardSection from '../../components/atoms/ForwardSection';
import AuthFooter from '../../components/blocks/footers/AuthFooter';
import OnboardingHero from '../../components/blocks/heros/OnboardingHero';

const Onboarding = () => {
  return (
    <AuthContainer>
      <AuthNavbar />
      <OnboardingHero />
      <ForwardSection />
      <AuthFooter />
    </AuthContainer>
  );
}

export default Onboarding;