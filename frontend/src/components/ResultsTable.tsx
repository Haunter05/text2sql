import { Database } from "lucide-react";

type ResultsTableProps = {
  result: Record<string, unknown>[];
};

export default function ResultsTable({ result }: ResultsTableProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800">

        <div className="flex items-center gap-3">
          <Database className="text-indigo-400" size={22} />

          <h2 className="text-lg font-semibold">
            Query Results
          </h2>
        </div>

        <span className="text-sm text-slate-400">
          {result.length} row{result.length !== 1 ? "s" : ""}
        </span>

      </div>

      {/* Empty State */}
      {result.length === 0 ? (

        <div className="p-10 text-center text-slate-500">
          No results yet.
        </div>

      ) : (

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-950">

              <tr>

                {Object.keys(result[0]).map((key) => (

                  <th
                    key={key}
                    className="
                      px-6
                      py-4
                      text-left
                      text-sm
                      uppercase
                      tracking-wider
                      text-slate-400
                    "
                  >
                    {key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </th>

                ))}

              </tr>

            </thead>

            <tbody>

              {result.map((row, index) => (

                <tr
                  key={index}
                  className="
                    border-t
                    border-slate-800
                    hover:bg-slate-800/50
                    transition
                  "
                >

                  {Object.values(row).map((value, i) => (

                    <td
                      key={i}
                      className="px-6 py-4 text-slate-200"
                    >
                      {String(value)}
                    </td>

                  ))}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}