export default function Home() {

  async function getSignal() {
    const res = await fetch("https://YOUR-RENDER-URL.onrender.com/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ pair: "EURUSD" })
    });

    const data = await res.json();
    alert(data.signal + " (" + data.confidence + ")");
  }

  return (
    <div style={{ padding: 50 }}>
      <h1>OCRILLA FX AI</h1>
      <button onClick={getSignal}>
        Get Signal
      </button>
    </div>
  );
}
