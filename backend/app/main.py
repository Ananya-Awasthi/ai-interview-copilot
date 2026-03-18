from fastapi import FastAPI
from app.routes import resume , interview

app = FastAPI()

app.include_router(resume.router)
app.include_router(interview.router)

@app.get("/")
def home():
    return {"message": "AI Interview Backend Running 🚀"}