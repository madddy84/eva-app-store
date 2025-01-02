# filepath: /Users/madhukarbhandari/Eva/app-store-api/app/db/mongo.py
from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings

client = AsyncIOMotorClient(settings.mongo_url)
db = client.get_database("app_store")