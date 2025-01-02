# FastAPI Authentication and Authorization Project

This project is a FastAPI application that implements user authentication and authorization using a PostgreSQL database. It includes user registration, login functionality, and user management features.

## Project Structure

```
fastapi-auth-app
├── app
│   ├── api
│   │   ├── dependencies.py
│   │   ├── routes
│   │   │   ├── auth.py
│   │   │   └── users.py
│   ├── core
│   │   ├── config.py
│   │   └── security.py
│   ├── db
│   │   ├── base.py
│   │   ├── models
│   │   │   └── user.py
│   │   └── session.py
│   ├── main.py
│   └── schemas
│       └── user.py
├── alembic
│   ├── env.py
│   ├── script.py.mako
│   └── versions
├── alembic.ini
├── requirements.txt
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd fastapi-auth-app
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```

4. **Configure the database:**
   Update the database connection settings in `app/core/config.py`.

5. **Run database migrations:**
   ```
   alembic upgrade head
   ```

6. **Start the FastAPI application:**
   ```
   uvicorn app.main:app --reload
   ```

## Usage

- **User Registration:** Send a POST request to `/auth/register` with user details.
- **User Login:** Send a POST request to `/auth/login` with credentials.
- **Fetch User Details:** Send a GET request to `/users/me` with a valid token.

## License

This project is licensed under the MIT License.