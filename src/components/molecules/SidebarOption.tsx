import { ReactElement } from "react";
import "./SidebarOption.css";

type Props = {
  text: string;
  Icon: ReactElement;
  active?: boolean;
};

const SidebarOption = ({ text, Icon, active }: Props) => (
  <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
    {Icon}
    <h2>{text}</h2>
  </div>
);

export default SidebarOption;
