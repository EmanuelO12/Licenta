import "./App.css";
import { Clinics } from "./components/ClinicsComp/Clinics";
import { Loading } from "./components/Loading";
import { SiteHeader } from "./components/Header";
import { HealthProblemPage } from "./components/HealthProblem/HealthProblemPage";
import { Navigation } from "./components/Navigation";
import { useApp } from "./components/StateFile";
import { Programare } from "./components/Programare/Programare";

export const App = () => {
  const {
    screens,
    headerVisible,
    headerTitle,
    backButtonVisible,
    navigateToClinics,
    navigateToHealthProblems,
    navigateToAppointment,
  } = useApp();
  return (
    <div>
      <SiteHeader
        backButtonVisible={backButtonVisible}
        screens={screens}
        headerTitle={headerTitle}
        headerVisible={headerVisible}
        navigateToAppointment={navigateToAppointment}
        navigateToClinics={navigateToClinics}
        navigateToHealthProblems={navigateToHealthProblems}
      />
      <Navigation activeScreen={screens}>
        <Loading navigateToHealthProblems={navigateToHealthProblems}></Loading>
        <HealthProblemPage navigateToClinics={navigateToClinics} />
        <Clinics navigateToAppointment={navigateToAppointment} />
        <Programare navigateToClinics={navigateToClinics} />
      </Navigation>
    </div>
  );
};

export default App;
