from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    
    # Enable CORS for frontend communication
    CORS(app)
    
    # Add a simple test route directly
    @app.route('/')
    def home():
        return "Flask is working!"
    
    @app.route('/api/test')
    def test():
        return {"message": "API is working!"}
    
    return app