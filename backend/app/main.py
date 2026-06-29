from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy import text

from app.database import SessionLocal
from app.llm import generate_sql
from app.validator import validate_sql
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class QueryRequest(BaseModel):
    question: str


@app.get("/")
def home():
    return {
        "message": "Backend is running"
    }


@app.get("/students")
def get_students():

    db = SessionLocal()

    try:

        result = db.execute(text("SELECT * FROM students"))

        students = []

        for row in result:
            students.append(dict(row._mapping))

        return students

    finally:
        db.close()


@app.post("/query")
def query(req: QueryRequest):

    db = SessionLocal()

    try:

        sql = generate_sql(req.question)

        if not validate_sql(sql):
            return {
                "error": "Unsafe SQL generated",
                "generated_sql": sql
            }

        result = db.execute(text(sql))

        rows = []

        for row in result:
            rows.append(dict(row._mapping))

        return {
            "generated_sql": sql,
            "result": rows
        }

    finally:
        db.close()