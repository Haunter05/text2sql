import { Code2, Copy } from "lucide-react";

type SqlViewerProps = {
  sql: string;
};

export default function SqlViewer({ sql }: SqlViewerProps) {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sql);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">

      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <Code2 className="text-indigo-400" size={22} />

          <h2 className="font-semibold text-lg">
            Generated SQL
          </h2>

        </div>

        <button
          onClick={copyToClipboard}
          className="
            flex
            items-center
            gap-2
            text-sm
            text-slate-300
            hover:text-white
            transition
          "
        >
          <Copy size={18} />
          Copy SQL
        </button>

      </div>

      <pre
        className="
          font-mono
          text-sm
          text-green-400
          bg-slate-950
          p-6
          overflow-x-auto
          whitespace-pre-wrap
        "
      >
{sql || "-- SQL will appear here --"}
      </pre>

    </div>
  );
}