from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
import requests, bcrypt
from api.models import db, Review
api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():
#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200


# CREAR NUEVO USUARIO CON LA INFORMACION DEL FORMULARIO
@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()  # Obtener datos del formulario
    correo = data.get('email') # Obtiene el valor del campo email dentro del JSON recibido, hago cambio de nombre de email a correo + para evitar confucion con la columna email
    password: str = data.get('password') # con str espera que sea de tipo string mi contraseña 

    # Verificar si el usuario ya existe por su correo 
    if User.query.filter_by(email=correo).first():
        return jsonify({"message": "El usuario ya existe"}), 400 # Busco en la tabla User la firt row donde la col email sea igual al valor de la variable correo.

    # Crear un nuevo usuario
    new_user = User(email=correo)
    new_user.set_password(password) # con esto guardo la contraseña ya salt y hasheada en mi metodo set.password en string 
    
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario registrado con éxito"}), 201

# INICIAR SESIÓN
@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()  # Obtener datos del formulario enviados desde el frond donde consumo esta api
    email = data.get('email')
    password: str = data.get('password')

    #VALIDAR SI USUARIO O CLAVE ES VACÍO
    if not email or not password:
        return jsonify({"message": "Debes ingresar un email o contraseña!"}), 400

    # Iniciar sesión del usuario
    # OBTENER EL USUARIO DESDE LA BD
    user_data: User = User.query.filter_by(email=email).first() # sirve para ver si encuentro el email igual al ingresado si es asi inicia sesion, obteniendo el primer resultado de la consulta
      
    if not user_data:
    # Si no se encuentra un usuario
      return {"error": "Credenciales incorrectas"}, 404
     # Verificar la contraseña usando el método check_password
    if not user_data.check_password(password):
        return jsonify({"error": "Credenciales incorrectas"}), 401

    # Si la contraseña es correcta, generar el token
    token = user_data.crear_token() # y se lo envio a mi frond donde consumo esta api 


    # COMPARAR CONTRASEÑAS con bcrypt
    login = bcrypt.checkpw(password.encode('utf-8'), user_data.password.encode('utf-8')) # comparo la contraseña ingresada con la contraseña en la base de datos ya que user_data tiene acceso
    return jsonify({"message": "Inicio de sesión exitoso", "token": token}), 200

# CODIGO RESEÑAS 
@api.route('/reviews', methods=['GET'])
def get_reviews():
    try:
        reviews = Review.query.all()
        review_list = [review.to_dict() for review in reviews]
        return jsonify(review_list), 200
    except Exception as e:
        raise APIException(str(e), status_code=500)

@api.route('/reviews', methods=['POST'])
def create_review():
    try:
        body = request.get_json()
        if not body or not body.get('text'):
            raise APIException("Review text is required", status_code=400)

        new_review = Review(text=body.get('text'))
        db.session.add(new_review)
        db.session.commit()
        return jsonify(new_review.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        raise APIException(str(e), status_code=500)

@api.route('/reviews/<int:review_id>', methods=['DELETE'])
def delete_review(review_id):
    try:
        review = Review.query.get_or_404(review_id)
        db.session.delete(review)
        db.session.commit()
        return jsonify({"message": "Review deleted successfully"}), 200
    except Exception as e:
        db.session.rollback()
        raise APIException(str(e), status_code=500)

