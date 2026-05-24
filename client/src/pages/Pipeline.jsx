import { useState, useEffect } from "react";
function Pipeline({ goBack })  {
  const [stages, setStages] = useState({});
  useEffect(() => {
  fetch("http://localhost:5000/pipeline")
    .then((res) => res.json())
    .then((data) => setStages(data));
}, []);
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Sales Pipeline</h1>
      <button
  onClick={goBack}
  className="mb-6 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-xl"
>
  ← Back to Dashboard
</button>
      <div className="grid grid-cols-4 gap-6">
        {Object.entries(stages).map(([stage, leads]) => (
          <div key={stage} className="bg-[#1e293b] p-5 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">{stage}</h2>

            <div className="space-y-3">
              {leads.map((lead, index) => (
                <div
                  key={index}
                  className="bg-[#334155] p-3 rounded-xl"
                >
                  {lead}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pipeline;