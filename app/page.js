import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  const title = "Hi my name is Ivan Lomeli✌️";
  const text =
    "I'm Front end Developer, currently I work with HTML, CSS, SASS Tailwind, JS, React and more.";
  return (
    <>
      <Hero title={title} text={text} />
      <Projects />
    </>
  );
}
