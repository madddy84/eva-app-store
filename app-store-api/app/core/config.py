from pydantic import BaseSettings

class Settings(BaseSettings):
    database_url: str 
    mongo_url: str
    secret_key: str 


    class Config:
        env_file = ".env"

settings = Settings()

print("DB Url:" + settings.database_url)