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

Question:
Show all students

SQL:
SELECT *
FROM students;

Question:
Show all students in semester 6

SQL:
SELECT *
FROM students
WHERE semester = 6;

Question:
Show students with attendance below 80

SQL:
SELECT s.student_name, sp.attendance
FROM students s
JOIN student_performance sp
ON s.student_id = sp.student_id
WHERE sp.attendance < 80;

Question:
Average marks in DBMS

SQL:
SELECT AVG(sp.marks)
FROM student_performance sp
JOIN subjects sub
ON sp.subject_id = sub.subject_id
WHERE sub.subject_name='DBMS';

Question:
Who scored the highest marks in DBMS

SQL:
SELECT s.student_name, MAX(sp.marks) AS highest_marks
FROM students s
JOIN student_performance sp
ON s.student_id = sp.student_id
JOIN subjects sub
ON sp.subject_id = sub.subject_id
WHERE sub.subject_name='DBMS'
GROUP BY s.student_name
ORDER BY highest_marks DESC
LIMIT 1;

Question:
Who scored the lowest marks in DBMS

SQL:
SELECT s.student_name, MIN(sp.marks) AS lowest_marks
FROM students s
JOIN student_performance sp
ON s.student_id = sp.student_id
JOIN subjects sub
ON sp.subject_id = sub.subject_id
WHERE sub.subject_name='DBMS'
GROUP BY s.student_name
ORDER BY lowest_marks
LIMIT 1;

Question:
How many students are there

SQL:
SELECT COUNT(*) AS total_students
FROM students;

Question:
Show students sorted by marks in DBMS

SQL:
SELECT s.student_name, sp.marks
FROM students s
JOIN student_performance sp
ON s.student_id = sp.student_id
JOIN subjects sub
ON sp.subject_id = sub.subject_id
WHERE sub.subject_name='DBMS'
ORDER BY sp.marks DESC;

If the question cannot be answered using the given schema,
return exactly:

CANNOT_GENERATE_SQL

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