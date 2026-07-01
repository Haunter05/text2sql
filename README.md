# 🤖 Text2SQL Assistant

An AI-powered Text-to-SQL application that converts natural language questions into PostgreSQL queries using a locally running Large Language Model (LLM). The generated SQL is validated, executed on a PostgreSQL database, and the results are displayed through a modern React frontend.

---

## 🚀 Features

- 🤖 Natural Language to SQL conversion
- 🧠 Local LLM using **Ollama + Qwen2.5 (1.5B)**
- 🛡️ SQL validation before execution
- 🗄️ PostgreSQL database integration
- ⚡ FastAPI backend
- ⚛️ React + TypeScript frontend
- 🎨 Tailwind CSS user interface
- 📊 Dynamic results table
- 📋 Copy generated SQL
- 💻 Fully local execution (No cloud APIs)

---

# 🏗️ System Architecture

```text
                     User
                       │
                       ▼
        React + TypeScript + Tailwind CSS
                       │
                     Axios
                       │
                       ▼
               FastAPI Backend
                       │
                       ▼
            Ollama + Qwen2.5 (1.5B)
                       │
                SQL Generation
                       │
                       ▼
                 SQL Validator
                       │
                       ▼
             PostgreSQL Database
                       │
                       ▼
              Query Results (JSON)
                       │
                       ▼
             Dynamic Results Table
```

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Lucide React

## Backend

- Python
- FastAPI
- SQLAlchemy
- Ollama
- Qwen2.5 (1.5B)

## Database

- PostgreSQL

---

# 📂 Project Structure

```text
text2sql/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── llm.py
│   │   ├── validator.py
│   │   └── test_generate_sql.py
│   │
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── QueryInput.tsx
│   │   │   ├── SqlViewer.tsx
│   │   │   └── ResultsTable.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/text2sql.git
cd text2sql
```

---

## 2. Backend Setup

Create a virtual environment:

```bash
cd backend

python -m venv myenv
```

Activate it:

### Windows

```bash
myenv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/text2sql
```

Start the backend:

```bash
uvicorn app.main:app --reload
```

---

## 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Open:

```
http://localhost:5173
```

---

# 💡 Example Query

### Input

```
Show students with marks above 90 in DBMS
```

### Generated SQL

```sql
SELECT s.student_name, sp.marks
FROM students s
JOIN student_performance sp
ON s.student_id = sp.student_id
JOIN subjects sub
ON sp.subject_id = sub.subject_id
WHERE sub.subject_name = 'DBMS'
AND sp.marks > 90;
```

### Output

| Student Name | Marks |
|--------------|------:|
| Rahul Roy | 92 |
| Ishita Sen | 96 |
| Megha Bose | 91 |

---

# 📸 Screenshots

>Screenshots.

### Home Page

```
screenshots/home.png
```

### Generated SQL

```
screenshots/sql.png
```

### Query Results

```
screenshots/results.png
```

---

# 📌 Current Capabilities

- Natural language query processing
- SQL generation using a local LLM
- SQL validation for security
- Query execution on PostgreSQL
- Dynamic table generation
- SQL viewer with line numbers
- Copy SQL functionality
- Modern responsive UI


---

# 📜 License

This project is intended for educational and learning purposes.

---

# 👨‍💻 Author

**Subhra Sankha Majumder**

If you found this project helpful, consider giving it a ⭐ on GitHub!