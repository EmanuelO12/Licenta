import { Card, Avatar } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import Divider from "@mui/material/Divider";
import { Doctori } from "../../common/common";

const { Meta } = Card;
export interface DetaliiDoctorProps {
  doctor: Doctori;
}

export const DetaliiDoctor = ({ doctor }: DetaliiDoctorProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://www.publicdomainpictures.net/pictures/210000/velka/doctor-1490804718D0I.jpg"
          />
        }
        actions={[
          <CalendarOutlined
            key="CalendarOutlined"
            style={{ fontSize: "20px" }}
          />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={doctor.nume + " " + doctor.prenume}
          description="This is the description"
        />
      </Card>
    </div>
  );
};
