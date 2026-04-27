import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { FaFileExcel, FaSearch } from "react-icons/fa";

export default function ExcelViewer() {
  const [data, setData] = useState<any[][]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<any[][]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fileUrl = "/docs/inventario.xlsx";

  useEffect(() => {
    const loadExcel = async () => {
      try {
        setLoading(true);

        const res = await fetch(fileUrl);
        if (!res.ok) throw new Error("No se pudo cargar el archivo");

        const ab = await res.arrayBuffer();
        const workbook = XLSX.read(ab, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const [headerRow = [], ...rows] = json as any[];

        setHeaders(headerRow);
        setData(rows);
        setFilteredData(rows);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadExcel();
  }, []);

  // 🔍 FILTRO EN TIEMPO REAL
  useEffect(() => {
    if (!search.trim()) {
      setFilteredData(data);
      return;
    }

    const lowerSearch = search.toLowerCase();

    const filtered = data.filter((row) =>
      row.some((cell) =>
        String(cell).toLowerCase().includes(lowerSearch)
      )
    );

    setFilteredData(filtered);
  }, [search, data]);

  return (
    <section id="catalogo" className="px-4 my-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">

          {/* TÍTULO */}
          <div className="flex items-center gap-3">
            <FaFileExcel className="text-green-600 text-3xl" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              Catálogo de medicamentos
            </h2>
          </div>

          {/* 🔍 BUSCADOR */}
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar medicamento..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            />
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-pulse text-gray-500 text-lg">
              Cargando catálogo...
            </div>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="text-center py-10 text-red-500 font-semibold">
            ❌ Error al cargar el catálogo
          </div>
        )}

        {/* TABLA */}
        {!loading && !error && headers.length > 0 && (
          <div className="overflow-auto max-h-[600px] border rounded-xl">
            <table className="min-w-full text-sm text-center">

              {/* HEADERS */}
              <thead className="bg-gray-200 sticky top-0 z-10">
                <tr>
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 font-bold text-gray-700 whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {filteredData.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t transition ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50`}
                  >
                    {headers.map((_, j) => (
                      <td key={j} className="px-4 py-2 whitespace-nowrap">
                        {row[j] ?? "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        {/* SIN RESULTADOS */}
        {!loading && !error && filteredData.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No se encontraron resultados 🔍
          </div>
        )}

      </div>
    </section>
  );
}