import * as React from "react";
import { Image } from "antd";
import { ListaDoctori } from "./ListaDoctori";

export interface ProgramareProps {
  navigateToClinics: () => void;
}

export const Programare = ({ navigateToClinics }: ProgramareProps) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Image
        style={{ marginLeft: "1500px", marginTop: "150px" }}
        width={400}
        src="https://www.dentistonline.ro/images/users_cabinete/568/cabinete_18.jpg"
      />
      <ListaDoctori></ListaDoctori>
    </div>
  );
};
