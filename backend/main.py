from fastapi import FastAPI
from chatbot.chatbot_routes import router as chatbot_router

# ADD THESE IMPORTS
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ADD THIS BLOCK
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for hackathon)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chatbot_router)