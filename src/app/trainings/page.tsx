import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import TrainingTabs from "@/components/TrainingTabs";

export const metadata: Metadata = { title: "Trainings" };

export default function TrainingsPage() {
  return (
    <>
      <PageHero title="Trainings & Workshops" sub="Open courses for doctors, nurses and hospital managers — BLS, ACLS, IPC, IPSG and more." />
      <section className="section py-16">
        <TrainingTabs />
      </section>
      <CtaBand />
    </>
  );
}
