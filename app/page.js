import LandingPage from "@/components/LandingPage";
import LoginUp from "@/components/LoginUp";
import Hero from "@/components/header/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title="Introducing LWS Shop Center"
        subTitle="Your whole week at a glance"
      />
      <main>
        <LandingPage />
        <LoginUp />
      </main>
    </>
  );
}
