export default function NotFound() {
  return (
    <main className="
      min-h-screen
      bg-black
      text-white
      flex
      flex-col
      items-center
      justify-center
    ">

      <h1 className="
        text-7xl
        font-black
        text-[#ccff00]
      ">
        404
      </h1>

      <p className="text-2xl mt-4">
        Workout not found
      </p>

      <p className="text-gray-400 mt-2">
        The workout you are looking for does not exist.
      </p>

    </main>
  );
}