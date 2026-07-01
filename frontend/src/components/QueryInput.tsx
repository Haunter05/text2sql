type QueryInputProps = {
  question: string;
  setQuestion: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
};

export default function QueryInput({
  question,
  setQuestion,
  onSubmit,
  loading,
}: QueryInputProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

      <h2 className="text-xl font-semibold mb-2">
        Ask your question
      </h2>

      <p className="text-slate-400 mb-6">
        Describe what data you want in plain English.
      </p>

      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="e.g. Show students with marks above 90 in DBMS"
        className="
          w-full
          rounded-xl
          bg-slate-950
          border
          border-slate-700
          px-5
          py-4
          text-white
          placeholder:text-slate-500
          outline-none
          focus:ring-2
          focus:ring-indigo-500
          transition
        "
      />

      <div className="mt-6 flex justify-end">

        <button
        onClick={onSubmit}
        disabled={loading}
        className="
            bg-indigo-600
            hover:bg-indigo-500
            disabled:bg-slate-700
            disabled:cursor-not-allowed
            transition
            px-8
            py-3
            rounded-xl
            font-semibold
            shadow-lg
            shadow-indigo-600/30
        "
        >
        {loading ? "Generating..." : "Generate SQL"}
        </button>

      </div>

    </div>
  );
}