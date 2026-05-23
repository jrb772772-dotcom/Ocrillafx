
from fastapi import FastAPI

app = FastAPI()

signals = [
    {
        "pair": "EUR/USD",
        "signal": "BUY",
        "entry": 1.08450,
        "tp1": 1.08520,
        "tp2": 1.08600,
        "tp3": 1.08750,
        "tp4": 1.08900,
        "sl": 1.08320,
        "confidence": "84%"
    }
]

@app.get("/")
def root():
    return {"message": "OCRILLA FX AI Backend Running"}

@app.get("/signals")
def get_signals():
    return signals
