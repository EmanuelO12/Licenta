import * as React from 'react';
import Button from '@mui/material/Button';

export interface ProgramareProps {
    navigateToClinics:()=>void;
}

export  const Programare=({navigateToClinics}:ProgramareProps)=>{
  return (
      <div>
          
          <Button size="large" style={{marginLeft:"1150px", marginTop:"30px"}} onClick={()=>{navigateToClinics()}}>🡸 Inapoi</Button>
      </div>
  );
}