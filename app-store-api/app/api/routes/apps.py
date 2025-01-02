from app.db.mongo import db
from fastapi import APIRouter
from app.migrations.v20241230_add_app_collection import apps

router = APIRouter()

@router.get("/") # response_model=UserResponse)
async def read_items():
    # items = await db["apps"].find().to_list(100)
    return apps


@router.get("/{app_id}")
async def read_app(app_id: int):

    result = [x for x in apps if x["id"]==app_id]
    if len(result) == 0:
        return {"message": "App not found"}
    return result[0];