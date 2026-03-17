from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber

app = FastAPI()

# CORS (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Function to extract text
def extract_text(file):
    text = ""
    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text

@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    resume_text = extract_text(file)

    return {
        "message": "Resume uploaded successfully",
        "resume_preview": resume_text[:200],  # first 200 chars
        "question": "Tell me about yourself"
    }