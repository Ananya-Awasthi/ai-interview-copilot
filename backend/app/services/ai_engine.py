import os
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY"),
)

MODEL = "gemini-3-flash-preview"  # stable + fast


def generate_question(role, resume_text):
    prompt = f"""
    You are a friendly professional interviewer.

    Role: {role}

    Candidate Resume:
    {resume_text}

    Instructions:
    - Ask ONLY ONE question
    - Keep it simple and conversational
    - Do NOT make it too long or complex
    - Match the candidate's level (student or beginner)
    - Focus on real experience, not theory

    Example style:
    "Can you tell me about a project you worked on and your role in it?"

    Now ask the question.
    """

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text


def generate_followup(answer):
    prompt = f"""
    Candidate answered: {answer}

    Instructions:
    - Ask ONE follow-up question
    - Keep it short and natural
    - Dig deeper into what the candidate said
    - Do NOT be too technical or complex

    Example:
    "That's interesting — how did you handle challenges in that?"

    Now ask the follow-up.
    """

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text