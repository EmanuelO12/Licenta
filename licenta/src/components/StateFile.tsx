import { useState } from "react";

export enum Screens {
  Loading,
  HealthProblem,
  Clinics,
  Appointment,
}

export const useApp = () => {
  const [screens, setScreens] = useState<number>(Screens.Loading);
  const [headerVisible, setHeaderVisible] = useState<boolean>(true);
  const [headerTitle, setHeaderTitle] = useState("");
  const [backButtonVisible, setBackButtonVisible] = useState(false);

  const navigateToClinics = () => {
    setScreens(Screens.Clinics);
    setBackButtonVisible(true);
    setHeaderVisible(true);
    setHeaderTitle("Clinicile disponibile pentru problema ta");
  };
  const navigateToHealthProblems = () => {
    setScreens(Screens.HealthProblem);
    setBackButtonVisible(false); 
    setHeaderVisible(true);
    setHeaderTitle("Diagnosticarea problemei");
  };
  const navigateToAppointment = () => {
    setScreens(Screens.Appointment);
    setBackButtonVisible(true);
    setHeaderVisible(true);
    setHeaderTitle("Appointment");
  };

  return {
    screens,
    headerVisible,
    headerTitle,
    backButtonVisible,
    navigateToClinics,
    navigateToHealthProblems,
    navigateToAppointment,
  };
};
