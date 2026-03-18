from fastapi import FastAPI
from app.routes import resume , interview , confidence
import threading
from app.services.ai_engine import start_confidence_tracking
from fastapi.middleware.cors import CORSMiddleware

threading.Thread(target=start_confidence_tracking, daemon=True).start()

app = FastAPI()
# ✅ ADD THIS BLOCK
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for hackathon)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(resume.router)
app.include_router(interview.router)
app.include_router(confidence.router)

@app.get("/")
def home():
    return {"message": "AI Interview Backend Running 🚀"}