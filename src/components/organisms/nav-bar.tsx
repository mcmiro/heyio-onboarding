import Logo from "../ui/logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <a href="">Kontakt</a>
    </nav>
  );
}
