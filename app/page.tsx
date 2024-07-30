"use client";
// use client
import React, { useState } from 'react';
import { HomeScreen } from "@/components/component/home-screen";
import {ProjectsPage} from "@/components/component/projects-page";
import { AcademicPage } from '@/components/component/academic-page';

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
        />
      )}
      {currentScreen === 'project' && (
        <ProjectsPage 
          onNavigateToHome={() => handleNavigate('home')}
          onNavigateToAcademics={() => handleNavigate('academic')}
        />
      )}
      {currentScreen === 'academic' && (
        <AcademicPage 
          onNavigateToHome={() => handleNavigate('home')} 
          onNavigateToProject={() => handleNavigate('project')}
        />
      )}
    </>
  );
}