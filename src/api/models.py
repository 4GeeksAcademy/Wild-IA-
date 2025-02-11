from flask import request, jsonify
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
import jwt
from flask import current_app
from flask_sqlalchemy import SQLAlchemy
import bcrypt

db = SQLAlchemy()

# TABLA DE USUARIOS
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    is_active = db.Column(db.Boolean, default=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password 
        }

    def set_password(self, password):
        """Encripta la contraseña usando bcrypt."""
        password_bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password_bytes, salt)
        self.password = hashed_password.decode('utf-8')

    def check_password(self, password):
        """Verifica la contraseña usando bcrypt."""
        return bcrypt.checkpw(
            password.encode('utf-8'),
            self.password.encode('utf-8')
        )

     # Método para crear el token
    def crear_token(self):
        token = jwt.encode({
            'user_id': self.id,
            'email': self.email,
            'exp': datetime.utcnow() + timedelta(hours=1)
        }, 'clave-secreta-123', algorithm='HS256')
        
        return token

# TABLA DE RESEÑAS
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(500), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "created_at": self.created_at.isoformat()
        }