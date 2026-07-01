import { Code2, Copy } from "lucide-react";

type SqlViewerProps = {
  sql: string;
};

function highlightSQL(line: string) {
  const KEYWORDS = [
    "SELECT",
    "FROM",
    "WHERE",
    "JOIN",
    "ON",
    "AND",
    "OR",
    "GROUP",
    "BY",
    "ORDER",
    "DESC",
    "ASC",
    "LIMIT",
    "AVG",
    "COUNT",
    "MAX",
    "MIN",
    "AS",
    "DISTINCT",
    "IN",
    "LIKE",
    "BETWEEN",
    "HAVING",
    "LEFT",
    "RIGHT",
    "INNER",
    "OUTER",
  ];

  const tokens = line.split(/(\s+|,|;|\(|\))/);

  return tokens.map((token, index) => {
    const upper = token.toUpperCase();

    // SQL Keywords
    if (KEYWORDS.includes(upper)) {
      return (
        <span
          key={index}
          className="text-pink-400 font-semibold"
        >
          {token}
        </span>
      );
    }

    // String Literals
    if (/^'.*'$/.test(token)) {
      return (
        <span
          key={index}
          className="text-lime-400"
        >
          {token}
        </span>
      );
    }

    // Numbers
    if (/^\d+$/.test(token)) {
      return (
        <span
          key={index}
          className="text-yellow-300"
        >
          {token}
        </span>
      );
    }

    // Operators
    if (
      ["=", ">", "<", ">=", "<=", "<>", "!=", "*"].includes(token)
    ) {
      return (
        <span
          key={index}
          className="text-cyan-400"
        >
          {token}
        </span>
      );
    }

    // Default
    return (
      <span
        key={index}
        className="text-slate-200"
      >
        {token}
      </span>
    );
  });
}

export default function SqlViewer({ sql }: SqlViewerProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(sql);
  };

  const lines = sql
    ? sql.split("\n")
    : ["-- Generated SQL will appear here --"];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-9 h-9 rounded-full bg-indigo-500/20 flex items-center justify-center">

            <Code2
              size={20}
              className="text-indigo-400"
            />

          </div>

          <h2 className="text-xl font-semibold">
            Generated SQL
          </h2>

        </div>

        <button
          onClick={copyToClipboard}
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-lg
            border
            border-slate-700
            hover:bg-slate-800
            transition
          "
        >
          <Copy size={18} />
          Copy SQL
        </button>

      </div>

      {/* SQL Code */}

      <div className="bg-[#0b1120] overflow-x-auto">

        {lines.map((line, index) => (

          <div
            key={index}
            className="
              grid
              grid-cols-[60px_1fr]
              font-mono
              text-[17px]
            "
          >

            {/* Line Numbers */}

            <div
              className="
                py-2
                text-center
                text-slate-500
                border-r
                border-slate-800
                select-none
              "
            >
              {index + 1}
            </div>

            {/* SQL */}

            <div className="px-8 py-2 whitespace-pre-wrap">
              {highlightSQL(line)}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}