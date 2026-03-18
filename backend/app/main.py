from fastapi import FastAPI
from app.routes import resume , interview
from fastapi.middleware.cors import CORSMiddleware

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

@app.get("/")
def home():
    return {"message": "AI Interview Backend Running 🚀"}