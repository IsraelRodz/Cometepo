import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { FaFileExcel, FaDownload } from "react-icons/fa";

export default function ExcelViewer() {
  const [data, setData] = useState<any[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const fileUrl = "/docs/inventario.xlsx";

  useEffect(() => {
    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const [headerRow, ...rows] = json as any[];

        setHeaders(headerRow);
        setData(rows);
      });
  }, []);

  return (
    <section id="catalogo" className="px-4 my-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <FaFileExcel className="text-green-600 text-3xl" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
              Inventario de medicamentos
            </h2>
          </div>

          <a
            href={fileUrl}
            download
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-bold shadow-md transition"
          >
            <FaDownload /> Descargar Excel
          </a>
        </div>

        {/* TABLA */}
        <div className="overflow-auto max-h-[600px] border rounded-xl">
          <table className="min-w-full text-sm text-left">
            
            {/* HEADERS */}
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-4 py-2 font-bold text-gray-700">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  {headers.map((_, j) => (
                    <td key={j} className="px-4 py-2">
                      {row[j]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}