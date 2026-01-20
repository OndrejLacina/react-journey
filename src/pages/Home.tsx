import WelcomeCard from "../components/WelcomeCard";
import reactLogo from "../assets/react.svg";

function Home() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">
          <span className="text-cyan-300">Junior React dev</span> in progress
        </h1>
        <p className="text-slate-300">
          Moje nedokonalá cesta k React vývojáři. První ukázkový projekt na
          stacku React + TS + Tailwind + Vite + Vercel.
        </p>
      </div>

      <WelcomeCard
        title="React Journey"
        description="WelcomeCard je moje první komponenta ve Vite + React + TypeScript + Tailwind."
        imageSrc={reactLogo}
        imageAlt="React logo"
      />
    </section>
  );
}

export default Home;
