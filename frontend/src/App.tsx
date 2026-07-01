import { useState } from "react";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [sql, setSql] = useState("");
  const [result, setResult] = useState<Record<string, unknown>[]>([]);

  const askQuestion = async () => {
  try {   

    const response = await axios.post(
      "http://127.0.0.1:8000/query",
      {
        question: question
      }
    );

    setSql(response.data.generated_sql);
    setResult(response.data.result);

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Text2SQL
      </h1>

      <div className="max-w-4xl mx-auto">

        <input
            type="text"
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="
              w-full
              p-4
              rounded-lg
              bg-slate-800
              border
              border-slate-700
              outline-none
            "
        />

      <button
          onClick={askQuestion}
          className="
            mt-4
            px-6
            py-3
            bg-blue-600
            rounded-lg
            hover:bg-blue-700
          "
      >
        Ask
      </button>

    <p className="mt-4 text-green-400">
      {question}
    </p>

        <div className="mt-10">

          <h2 className="text-2xl font-semibold mb-3">
            Generated SQL
          </h2>

          <div className="bg-slate-800 p-4 rounded-lg">
            <pre>{sql}</pre>
          </div>

        </div>

        <div className="mt-10">

          <h2 className="text-2xl font-semibold mb-3">
            Results
          </h2>

      <div className="bg-slate-800 p-4 rounded-lg overflow-x-auto">

        {result.length > 0 ? (

          <table className="min-w-full border-collapse">

            <thead>

              <tr>

                {Object.keys(result[0]).map((key) => (

                  <th
                    key={key}
                    className="border border-slate-600 px-4 py-2 text-left"
                  >
                    {key}
                  </th>

                ))}

              </tr>

            </thead>

            <tbody>

              {result.map((row, index) => (

                <tr key={index}>

                  {Object.values(row).map((value, i) => (

                    <td
                      key={i}
                      className="border border-slate-600 px-4 py-2"
                    >
                      {String(value)}
                    </td>

                  ))}

                </tr>

              ))}

            </tbody>

          </table>

        ) : (

          <p>No results</p>

        )}

      </div>

        </div>

      </div>

    </div>
  )
}

export default App
