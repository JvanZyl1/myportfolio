"use client";
// use client
import React, { useState } from 'react';
import { HomeScreen } from "@/components/component/home-screen";
import {ProjectsPage} from "@/components/component/projects-page";

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
        />
      )}
      {currentScreen === 'project' && (
        <ProjectsPage 
          onNavigateToHome={() => handleNavigate('home')} 
        />
      )}
    </>
  );
}