import * as React from "react";

import { mockedClinici, mockedDoctori } from "../../common/HardcodedData";
import { List } from "antd";
import { DetaliiDoctor } from "./DetaliiDoctor";

export const ListaDoctori = () => {
  return (
    <List
      grid={{
        gutter: 16,
        column: 2,
      }}
      style={{
        width: "100%",
        maxWidth: 900,
        marginTop: "100px",
        marginLeft: "-150px",
      }}
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 4,
        position: "bottom",
        simple: true,
        hideOnSinglePage: true,
        style: { margin: "0px 230px 0px 0px" },
      }}
      dataSource={mockedDoctori}
      renderItem={(doctor) => <DetaliiDoctor doctor={doctor}></DetaliiDoctor>}
    />
  );
};
