import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Capabilities } from "@/components/sections/capabilities";
import { Experience } from "@/components/sections/experience";
import { Approach } from "@/components/sections/approach";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Capabilities />
      <Experience />
      <Approach />
      <About />
      <Contact />
    </>
  );
}
