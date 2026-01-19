import WelcomeCard from "../components/WelcomeCard";
import reactLogo from "../assets/react.svg";

function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex items-start justify-center">
      <WelcomeCard
        title="React Journey - starting structure"
        description="WelcomeCard je moje první komponenta ve Vite + React + TypeScript + Tailwind."
        imageSrc={reactLogo}
        imageAlt="React logo"
      />
    </main>
  );
}

export default Home;
