import Hero from "./components/hero";
import LogoArea from "./components/logoarea";
import Process from "./components/process";
import CaseStudies from "./components/casestudies";
import ProblemSolvers from "./components/problemsolvers";
import Insights from "./components/insights";
import TeamOfExperts from "./components/teamofexperts";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
          <Hero />
          <LogoArea />
          <Process />
          <CaseStudies />
          <ProblemSolvers />
          <Insights />
          <TeamOfExperts />
      </main>
    </div>
  );
}
