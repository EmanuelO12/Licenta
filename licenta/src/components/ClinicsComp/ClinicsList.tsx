import * as React from "react";
import { ClinicsItem } from "./ClinicsItem";
import { mockedClinici } from "../../common/HardcodedData";
import { List } from "antd";
export interface ClinicsListProps {
  navigateToAppointment: () => void;
}

export const ClinicsList = ({ navigateToAppointment }: ClinicsListProps) => {
  return (
    <List
      style={{ width: "100%", maxWidth: 900 }}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={mockedClinici}
      renderItem={(item) => (
        <ClinicsItem
          nume={item.nume}
          adresa={item.adresa}
          navigateToAppointment={navigateToAppointment}
        />
      )}
    />
  );
};
