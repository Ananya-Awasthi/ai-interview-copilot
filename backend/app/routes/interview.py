from fastapi import APIRouter, Form
from app.services.ai_engine import generate_question, generate_followup

router = APIRouter(prefix="/interview", tags=["Interview"])


# 🎯 START INTERVIEW
@router.post("/start")
def start_interview(
    role: str = Form(...),
    resume_text: str = Form(...)
):
    question = generate_question(role, resume_text)
    return {
        "question": question
    }


# 🎤 ANSWER API (UPDATED)
@router.post("/answer")
def process_answer(answer: str = Form(...)):
    
    next_question = generate_followup(answer)

    return {
        "transcribed_text": answer,
        "next_question": next_question
    }