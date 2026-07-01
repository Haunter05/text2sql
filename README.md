# 🤖 Text2SQL Assistant

An AI-powered Text-to-SQL application that converts natural language questions into PostgreSQL queries using a local Large Language Model (LLM). The generated SQL is validated, executed on a PostgreSQL database, and the results are displayed through a modern React frontend.

---

## 📸 Preview

> Add screenshots here after the UI redesign.

| Home Page | Query Results |
|-----------|---------------|
| ![Home](README_assets/home.png) | ![Results](README_assets/results.png) |

---

## ✨ Features

- 🧠 Natural Language → SQL conversion
- 🤖 Local LLM using **Ollama + Qwen2.5 (1.5B)**
- 🛡️ SQL validation before execution
- 🗄️ PostgreSQL database integration
- ⚡ FastAPI REST API
- ⚛️ React + TypeScript frontend
- 🎨 Tailwind CSS UI
- 📊 Dynamic results table
- 💻 Fully local execution (No cloud APIs)

---

# 🏗️ Architecture

```text
                 User
                   │
                   ▼
        React + TypeScript + Tailwind
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

## Backend

- Python
- FastAPI
- SQLAlchemy
- Ollama
- Qwen2.5 (1.5B)

## Database

- PostgreSQL

---

# 📁 Project Structure

```text
text2sql/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── llm.py
│   │   └── validator.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/Haunter05/text2sql.git
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

Visit:

```
http://localhost:5173
```

---

# 💡 Example

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
WHERE sub.subject_name='DBMS'
AND sp.marks > 90;
```

### Output

| Student Name | Marks |
|--------------|------:|
| Rahul Roy | 92 |
| Ishita Sen | 96 |
| Megha Bose | 91 |

---

# 📌 Current Features

- ✅ Natural language to SQL conversion
- ✅ SQL execution on PostgreSQL
- ✅ SQL validation
- ✅ Dynamic table rendering
- ✅ Modern React frontend
- ✅ Local LLM inference

---

# 🔮 Future Improvements

- Better prompt engineering
- Multi-database support
- Query history
- User authentication
- Export results to CSV
- Docker support
- Schema auto-discovery
- Syntax highlighting for SQL
- Responsive dashboard

---

# 📄 License

This project is developed for educational and learning purposes.

---

# 👨‍💻 Author

**Subhra Sankha Majumder**

If you found this project useful, consider giving it a ⭐ on GitHub.