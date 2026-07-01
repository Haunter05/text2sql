import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import QueryInput from "./components/QueryInput";
import SqlViewer from "./components/SqlViewer";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [question, setQuestion] = useState("");
  const [sql, setSql] = useState("");
  const [result, setResult] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/query",
        {
          question,
        }
      );

      setSql(response.data.generated_sql);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4338ca25,transparent_60%)]" />

      <div className="relative px-6 py-10">

        <Header />

        <div className="max-w-6xl mx-auto space-y-8">

          <QueryInput
            question={question}
            setQuestion={setQuestion}
            onSubmit={askQuestion}
            loading={loading}
          />

          <SqlViewer sql={sql} />

          <ResultsTable result={result} />

        </div>

      </div>

    </div>
  );
}

export default App;