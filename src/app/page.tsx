import Navbar from "@/components/organisms/nav-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/ui/logo";
import { HydrateClient } from "@/trpc/server";
import Image from "next/image";

export default async function Home() {
  const technologies = [
    { name: "Next.js", icon: "/images/stack/Nextjs-logo.svg" },
    { name: "Vercel", icon: "/images/stack/vercel-black.svg" },
    { name: "AWS", icon: "/images/stack/logo_aws-1.png" },
    { name: "Firebase", icon: "/images/stack/firebase.svg" },
    { name: "Supabase", icon: "/images/stack/supabase.webp" },
    { name: "Tailwind", icon: "/images/stack/tailwind.svg" },
    { name: "React", icon: "/images/stack/react.svg" },
    { name: "Resend", icon: "/images/stack/resend.svg" },
    { name: "Flutter", icon: "/images/stack/flutter.svg" },
    { name: "Docker", icon: "/images/stack/docker.svg" },
  ];

  return (
    <HydrateClient>
      <header className="container mx-auto py-4">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6">
          {/* HERO SECTION */}
          <section className="text-center py-20">
            <h1 className="text-5xl font-bold leading-tight">
              Wir entwickeln Apps für Web und Mobile.
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Spezialisiert auf Software-, Web- und App-Entwicklung. Von der Idee bis zum skalierbaren Produkt.
            </p>
            <div className="mt-6">
              <Button size="lg" className="text-xl">Kostenloses Erstgespräch</Button>
            </div>
          </section>

          {/* TEAM SECTION */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center">Unser Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { name: "Miro", role: "Software Entwicklung" },
                { name: "Lidija", role: "UI/UX Design" },
                { name: "David", role: "Software Entwicklung" },
                { name: "Allan", role: "Branding & Positionierung" },
              ].map((member) => (
                <Card key={member.name} className="text-center p-6">
                  <CardTitle>{member.name}</CardTitle>
                  <CardContent>{member.role}</CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* TECH STACK SECTION */}
          <section className="py-16 bg-gray-100 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Wir arbeiten mit modernsten Technologien</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-8 mt-8 text-center">
              {technologies.map((tech) => (
                <div key={tech.name} className="p-6 border rounded-lg bg-white shadow-sm flex flex-col items-center">
                  <Image
                    src={tech.icon}
                    width={109}
                    height={44}
                    alt="Tech Logo"
                    className=""
                  />
                  <p className="mt-3 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center">Selektierte Projekte, die wir umgesetzt haben</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[
                {
                  name: "Das Flughafen Taxi",
                  url: "https://www.das-flughafentaxi-wien.at/",
                  img: "/images/clients/dasflughafentaxi.png",
                },
                {
                  name: "Teppich Reinigung Wien",
                  url: "https://www.teppich-reinigung.wien/",
                  img: "/images/clients/teppichreinigungwien.png",
                },
              ].map((project) => (
                <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    <CardHeader>
                      <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>
          </section>
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center">
              Wie wir arbeiten:
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-center">
              Wir setzen auf Agile Prozesse.<br />
              Wir sind ergebnisorientiert.<br />
              Die Sichtweise des Benutzers steht im Mittelpunkt.<br />
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-center">
              Die größten Innovationen entstehen dort, wo Visionen nicht an Prozessen
              scheitern.
            </p>
          </section>

          <section className="py-8 mx-auto">
            <h2 className="text-3xl font-bold text-center">
              Kontakt
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed text-center">
              Wir machen ein kostenloses Erstgespräch, um dein Projekt, deine Ziele und Herausforderungen
              ausführlich zu besprechen.
            </p>

            <div className="mt-6 text-center">
              <Button size="lg">Kostenloses Erstgespräch</Button>
            </div>
          </section>
        </div>
      </header>
      <main>

      </main>
      <footer className="bg-gray-100 text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Address & Impressum */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">Adresse</h3>
            <p className="mt-2 text-gray-400 font-bold">
              HeyIO <br />
            </p>
            <p className="mt-2 text-gray-400">Mariahilfer Straße 101/1/21<br />1060 Wien<br />Österreich</p>
          </div>

          {/* Right Side: Logo & Contact */}
          <div>
            <Logo />

            <h3 className="mt-6 text-xl font-bold text-gray-900">Kontaktiere uns</h3>
            <p className="mt-2 text-gray-400">E-Mail: hello@heyio.at</p>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 mt-12 text-sm">
          © {new Date().getFullYear()} HeyIO. Alle Rechte vorbehalten.
        </div>
      </footer>
    </HydrateClient>
  );
}
