import Hero from "@/components/Hero";

export default function Home() {

  return (
    <main>

      <Hero />

      <section
        id="library"
        className="
          min-h-screen
          bg-black
          text-white
          flex
          items-center
          justify-center
        "
      >

        <h2 className="text-4xl font-bold">
          THE LIBRARY
        </h2>

      </section>

    </main>
  );
}