import MobMenuHandler from "../molecules/mob-menu-handler";
import Logo from "../ui/logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <MobMenuHandler />
    </nav>
  );
}
