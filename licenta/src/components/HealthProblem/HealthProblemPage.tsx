import * as React from 'react';
import Button from '@mui/material/Button';

export interface HealthProblemPageProps {
    navigateToClinics:()=>void;
}

export  const HealthProblemPage=({navigateToClinics}:HealthProblemPageProps)=>{
  return (
      <div>
          
          <Button onClick={navigateToClinics}>asd</Button>
      </div>
  );
}