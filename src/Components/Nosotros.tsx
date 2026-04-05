export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="relative bg-cover bg-center py-20 px-6 md:px-20 rounded-3xl"
      style={{ backgroundImage: "url('/medicamentos.jpg')" }}
    >
      <div className="bg-black/70 p-8 rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-red-500">
          ¿Quiénes Somos?
        </h2>

        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
          Somos una empresa comprometida con la salud y el bienestar...
        </p>
      </div>
    </section>
  );
}