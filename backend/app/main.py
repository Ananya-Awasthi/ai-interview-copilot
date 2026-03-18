from fastapi import FastAPI
from app.routes import resume, interview, confidence
import threading
from app.services.vision import start_confidence_tracking

threading.Thread(target=start_confidence_tracking, daemon=True).start()

app = FastAPI()

app.include_router(resume.router)
app.include_router(interview.router)
app.include_router(confidence.router)

@app.get("/")
def home():
    return {"message": "AI Interview Backend Running 🚀"}