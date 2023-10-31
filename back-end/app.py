from flask import Flask, request
from flask_cors import CORS
from flask import jsonify

from ipfs_utils import upload_to_ipfs  # Import the function


app = Flask(__name__)
CORS(app)  # Initialize CORS

@app.route('/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files.get('file')
    if uploaded_file:
        ipfs_hash = upload_to_ipfs(uploaded_file)
        return jsonify({"message": "File uploaded!", "ipfs_hash": ipfs_hash})
    else:
        return "No file uploaded!", 400

if __name__ == '__main__':
    app.run(debug=True)
