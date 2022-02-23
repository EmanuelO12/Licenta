import * as React from "react";
import List from "@mui/material/List";
import { ClinicsItem } from "./ClinicsItem";
import { mockedClinici } from "../../common/HardcodedData";

export interface ClinicsListProps {
  navigateToAppointment: () => void;
}

export const ClinicsList = ({ navigateToAppointment }: ClinicsListProps) => {
  return (
    <List sx={{ width: "100%", maxWidth: 900, bgcolor: "background.paper" }}>
      {mockedClinici.map((item) => (
        <ClinicsItem
          nume={item.nume}
          adresa={item.adresa}
          navigateToAppointment={navigateToAppointment}
        />
      ))}
    </List>
  );
};
