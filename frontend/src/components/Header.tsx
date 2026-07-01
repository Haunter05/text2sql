import { Bot } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center mb-12">

      <div className="flex justify-center mb-5">

        <div
          className="
            w-20
            h-20
            rounded-2xl
            bg-indigo-600/20
            border
            border-indigo-500/40
            flex
            items-center
            justify-center
            shadow-lg
            shadow-indigo-500/20
          "
        >
          <Bot size={42} className="text-indigo-400" />
        </div>

      </div>

      <h1
        className="
          text-5xl
          font-extrabold
          tracking-tight
          bg-gradient-to-r
          from-indigo-400
          via-blue-400
          to-cyan-400
          bg-clip-text
          text-transparent
        "
      >
        Text2SQL Assistant
      </h1>

      <p className="mt-4 text-slate-400 text-lg">
        Convert natural language into SQL queries.
      </p>

    </header>
  );
}