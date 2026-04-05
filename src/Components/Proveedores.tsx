export default function Proveedores() {
  const proveedores = [
    'lab_.jpeg','lab_1.jpeg','lab_2.jpeg','lab_3.png','lab_4.jpeg',
    'pisa.jpg','LAB_7.jpg','LAB_8.jpg','LAB_9.jpg','LAP_10.jpg',
    'LAB_11.jpg','LAB_12.jpg','LAB_14.jpeg','lab_15.png','lab_16.png',
    'lab_17.jpg','lab_18.jpg',
  ];

  return (
    <section id="proveedores">
      <h2 className="text-4xl text-center text-red-500 mb-10 font-bold">
        Nuestros Proveedores
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {proveedores.map((img, i) => (
          <div key={i} className="w-40 h-40 bg-white/5 rounded-xl flex items-center justify-center p-3">
            <img
              src={`/Laboratorios/${img}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}