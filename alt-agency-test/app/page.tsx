import Hero from "./components/hero";
import LogoArea from "./components/logoarea";
import Process from "./components/process";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Hero />
          <LogoArea />
          <Process />
      </main>
    </div>
  );
}
