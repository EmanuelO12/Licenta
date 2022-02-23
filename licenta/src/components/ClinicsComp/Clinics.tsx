import * as React from "react";
import { ClinicsList } from "./ClinicsList";

export interface ClinicsProps {
  navigateToAppointment: () => void;
}

export const Clinics = ({ navigateToAppointment }: ClinicsProps) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
    >
      <ClinicsList navigateToAppointment={navigateToAppointment} />
    </div>
  );
};
