import Navbar from "@/components/organisms/nav-bar";
import Typography from "@/components/ui/typography";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <header className="container mx-auto py-4">
        <Navbar />
        <div className="mt-32 max-w-3xl">
          <Typography size={"h1"} type="h1" weight={"bold"}>
            Digitale Förderung, die deine Vision vorantreibt
          </Typography>
          <Typography className="mt-2 text-xl">
            Wie wir gemeinsam Hürden in Chancen verwandeln
          </Typography>
          <Typography className="mt-2">
            Die ersten 100 Tage entscheiden oft über den Erfolg eines Projekts –
            in dieser Phase zählt jeder Euro, jeder Tag, jedes Gespräch. Wir
            wissen: Was dich bremst, sind nicht die großen Fragen, sondern die
            kleinen Hürden. Die Reibungsverluste zwischen Antragstellung und
            Umsetzung. Die Unsicherheit, ob Investitionen jetzt getätigt werden
            sollen oder später.
          </Typography>
        </div>
      </header>
      <main>
        <section className="container mx-auto mt-16">
          <Typography size={"h2"} type="h2" weight={"bold"}>
            Genau hier setzen wir an mit 30 % Förderung auf!
          </Typography>
          <Typography className="mt-2">
            Entwicklungsleistungen schaffen wir Luft nach oben. Nicht als
            Rabatt, sondern als strategischer Hebel. Denn dein Budget soll dort
            fließen, wo es Impact generiert – in Prototypen, Markttests,
            skalierbare Technologie. Ohne dass du dich zwischen
            Liquiditätssicherung und Innovationskraft entscheiden musst.
          </Typography>
          <Typography className="mt-2">
            • Mehr Budgetflexibilität, um Kapazitäten in Innovation statt in
            Verwaltung zu investieren. • Sofortige Entlastung – keine langen
            Vorlaufzeiten, keine komplexen Anträge. • Agile Umsetzung, die deine
            Idee schneller vom Konzept in die Realität bringt. Wir wissen: Die
            größten Innovationen entstehen dort, wo Visionen nicht an Prozessen
            scheitern.
          </Typography>
          <Typography className="mt-2">Was das für dich bedeutet:</Typography>
        </section>
      </main>
      <footer></footer>
    </HydrateClient>
  );
}
