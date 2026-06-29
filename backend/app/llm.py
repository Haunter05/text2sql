import ollama


def generate_sql(question: str):

    prompt = f"""
You are an expert PostgreSQL assistant.

Database Schema:

students(
    student_id,
    student_name,
    semester
)

subjects(
    subject_id,
    subject_name
)

student_performance(
    student_id,
    subject_id,
    marks,
    attendance
)

Relationships:
student_performance.student_id -> students.student_id
student_performance.subject_id -> subjects.subject_id

Rules:
1. Return ONLY PostgreSQL SQL.
2. Never explain.
3. Never use markdown.
4. Never use ```sql.
5. Never generate DROP, DELETE, UPDATE, INSERT, ALTER or TRUNCATE.
6. Use JOIN whenever necessary.
7. Use subject names correctly.

Example:

Question:
Show students with marks above 90 in DBMS

SQL:
SELECT s.student_name, sp.marks
FROM students s
JOIN student_performance sp
ON s.student_id = sp.student_id
JOIN subjects sub
ON sub.subject_id = sp.subject_id
WHERE sub.subject_name='DBMS'
AND sp.marks > 90;

User Question:
{question}
"""

    try:
        response = ollama.chat(
            model="qwen2.5:1.5b",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        sql = response["message"]["content"]

        sql = sql.replace("```sql", "")
        sql = sql.replace("```", "")
        sql = sql.replace("SQL:", "")
        sql = sql.replace("sql:", "")
        sql = sql.strip()

        print("\nGenerated SQL:")
        print(sql)

        return sql
    except Exception as e:
        return f"ERROR: {str(e)}"