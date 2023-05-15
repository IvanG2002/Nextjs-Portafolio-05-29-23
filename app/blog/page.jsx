import Hero from "@/components/Hero";

function Blogpage() {
  const title = "Blog 📧";
  const text =
    "Here you can research for ways to learn web development and how you can learn programming and web development";
  return (
    <div>
      <Hero title={title} text={text} />
      <h1 className="font-bold text-4xl bg-slate-900 py-10 text-white relative  px-10 text-center">
        Work in progress
      </h1>
    </div>
  );
}

export default Blogpage;
