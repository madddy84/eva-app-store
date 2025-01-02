from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import auth, users, apps


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(apps.router, prefix="/apps", tags=["apps"])
app.include_router(users.router, prefix="/health", tags=["health"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI Authentication App"}

