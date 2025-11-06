from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from pydantic import BaseModel
from typing import Union

import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

IMG_PATH = os.path.join("img","me.png")

@app.get("/api/skills")
def log_skills():
    return [{"name": "Python", "level": "Advanced"},
            {"name": "React", "level": "Intermediate"},
            {"name": "FastAPI", "level": "Advanced"},]

@app.get("/api/my-img")
def get_my_img():
    if os.path.exists(IMG_PATH):
        return FileResponse(IMG_PATH,media_type="img/png")
    return {"Error":"Img not found"}

app.mount("/",StaticFiles(directory="../personal-website/dist",html=True),name="fontend")