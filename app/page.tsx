"use client";
// use client
import React, { useState } from 'react';
import { HomeScreen } from "@/components/component/home-screen";
import {ProjectsPage} from "@/components/component/projects-page";
import { AcademicPage } from '@/components/component/academic-page';
import { ContactScreen } from '@/components/component/contact-screen';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<string>('home');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <>
      {currentScreen === 'home' && (
        <HomeScreen
          onNavigateToProject={() => handleNavigate('project')}
          onNavigateToAcademics={() => handleNavigate('academic')}
          onNavigateToContact={() => handleNavigate('contact')}
        />
      )}
      {currentScreen === 'project' && (
        <ProjectsPage 
          onNavigateToHome={() => handleNavigate('home')}
          onNavigateToAcademics={() => handleNavigate('academic')}
          onNavigateToContact={() => handleNavigate('contact')}
        />
      )}
      {currentScreen === 'academic' && (
        <AcademicPage 
          onNavigateToHome={() => handleNavigate('home')} 
          onNavigateToProject={() => handleNavigate('project')}
          onNavigateToContact={() => handleNavigate('contact')}
        />
      )}
      {currentScreen === 'contact' && (
        <ContactScreen 
          onNavigateToHome={() => handleNavigate('home')} 
          onNavigateToProject={() => handleNavigate('project')}
          onNavigateToAcademics={() => handleNavigate('academic')}
        />
      )}
    </>
  );
}