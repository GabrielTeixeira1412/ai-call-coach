'use client';
export default function ManagerPage(){
  const sessions = (typeof window !== "undefined") ? JSON.parse(localStorage.getItem("ai-call-coach-sessions") || "[]") : [];
  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow p-4">
        <h1 className="text-xl font-semibold mb-4">Manager Ansicht</h1>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead><tr className="text-left border-b">
              <th className="py-2 pr-4">Datum</th>
              <th className="py-2 pr-4">Agent</th>
              <th className="py-2 pr-4">Team</th>
              <th className="py-2 pr-4">Szenario</th>
              <th className="py-2 pr-4">Dauer</th>
              <th className="py-2 pr-4">Score</th>
              <th className="py-2 pr-4">Stärken</th>
              <th className="py-2 pr-4">Verbesserung</th>
            </tr></thead>
            <tbody>
              {sessions.slice().reverse().map((s:any)=>(
                <tr key={s.id} className="border-b align-top">
                  <td className="py-2 pr-4 whitespace-nowrap">{new Date(s.endedAt).toLocaleString()}</td>
                  <td className="py-2 pr-4">{s.agentName}</td>
                  <td className="py-2 pr-4">{s.team}</td>
                  <td className="py-2 pr-4">{s.scenario}</td>
                  <td className="py-2 pr-4">{Math.floor((s.durationSec||0)/60)}:{String((s.durationSec||0)%60).padStart(2,'0')}</td>
                  <td className="py-2 pr-4">{s.eval?.score}</td>
                  <td className="py-2 pr-4">{(s.eval?.strengths||[]).join(", ")}</td>
                  <td className="py-2 pr-4">{(s.eval?.improves||[]).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
