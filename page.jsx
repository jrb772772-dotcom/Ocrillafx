
export default function Home() {
  const signals = [
    {
      pair: "EUR/USD",
      type: "BUY",
      entry: "1.08450",
      tp1: "1.08520",
      tp2: "1.08600",
      tp3: "1.08750",
      tp4: "1.08900",
      sl: "1.08320",
      confidence: "84%"
    },
    {
      pair: "XAU/USD",
      type: "SELL",
      entry: "2352.10",
      tp1: "2348.00",
      tp2: "2343.00",
      tp3: "2337.00",
      tp4: "2330.00",
      sl: "2358.00",
      confidence: "81%"
    }
  ];

  return (
    <main style={{padding: 40, fontFamily: "Arial"}}>
      <h1>OCRILLA FX AI</h1>
      <p>Advanced AI Forex Signal Dashboard</p>

      {signals.map((s, i) => (
        <div key={i} style={{
          border: "1px solid #ccc",
          padding: 20,
          marginTop: 20,
          borderRadius: 10
        }}>
          <h2>{s.pair} - {s.type}</h2>
          <p>Entry: {s.entry}</p>
          <p>TP1: {s.tp1}</p>
          <p>TP2: {s.tp2}</p>
          <p>TP3: {s.tp3}</p>
          <p>TP4: {s.tp4}</p>
          <p>SL: {s.sl}</p>
          <p>Confidence: {s.confidence}</p>
        </div>
      ))}
    </main>
  );
}
