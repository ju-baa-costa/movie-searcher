from flask import Flask
from flask_cors import CORS

from routes.movies import movies_bp
from models import create_tables

app = Flask(__name__)

CORS(app)

create_tables()

app.register_blueprint(movies_bp)

if __name__ == "__main__":
    app.run(debug=True)