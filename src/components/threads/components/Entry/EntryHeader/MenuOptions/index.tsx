import MenuOptionsGest from "./MenuOptionsGest";
import MenuOptionsOnwer from "./MenuOptionsOnwer";

type MenuOptionsProps = {
  type: "owner" | "guest";
};

const MenuOptions: React.FC<MenuOptionsProps> = ({ type }) => {
  if (type === "guest") {
    return <MenuOptionsGest />;
  }

  return <MenuOptionsOnwer />;
};

export default MenuOptions;
