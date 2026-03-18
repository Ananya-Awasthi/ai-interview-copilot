from faster_whisper import WhisperModel
import os
from dotenv import load_dotenv

load_dotenv()
hf_token = os.getenv("HF_TOKEN")
if hf_token:
    os.environ["HF_TOKEN"] = hf_token

print("Loading Whisper model once...")

try:
    model = WhisperModel("tiny.en", compute_type="int8")
    print("Model loaded ✅")
except Exception as e:
    print("Error loading model:", e)
def transcribe_audio(file_path):
    segments, _ = model.transcribe(file_path)

    text = ""
    for segment in segments:
        text += segment.text + " "

    return text.strip()