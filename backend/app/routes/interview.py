from fastapi import APIRouter
from app.services.ai_engine import generate_question

router = APIRouter(prefix="/interview", tags=["Interview"])

@router.post("/start")
def start_interview(role: str, resume_text: str):
    
    question = generate_question(role, resume_text)

    return {
        "question": question
    }