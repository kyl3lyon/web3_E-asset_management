"""
This module initializes a Flask web server and defines routes for asset management.
"""

from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

NODE_SERVER_URL = "http://localhost:5001"  # Assuming the Node server runs on port 5001

@app.route('/')
def index():
    return "Digital Asset Management API"

@app.route('/test', methods=['GET'])
def test():
    return "Test successful!"

@app.route('/upload', methods=['POST'])
def upload():
    # TODO: Receive the file from the frontend
    # For now, let's assume it's in the form field named 'file'
    uploaded_file = request.files.get('file')

    if not uploaded_file:
        return jsonify({"error": "No file uploaded"}), 400

    # Send the file to the Node.js microservice for storage
    response = requests.post(f"{NODE_SERVER_URL}/store", files={"file": uploaded_file})

    # Check if the upload to the microservice was successful
    if response.status_code != 200:
        return jsonify({"error": "Failed to store the file"}), 500

    # Return the response from the microservice to the frontend
    return response.json()

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Flask runs on port 5000 by default, but it's good to specify
