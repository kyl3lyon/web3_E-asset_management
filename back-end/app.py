from flask import Flask, request
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)
CORS(app)  # Initialize CORS

@app.route('/upload', methods=['POST'])
def upload_file():
    uploaded_file = request.files.get('file')  # 'file' is the name attribute from your HTML form
    if uploaded_file:
        # TODO: Upload to IPFS here
        return jsonify({"message": "File uploaded!"}), 200
    else:
        return "No file uploaded!", 400

if __name__ == '__main__':
    app.run(debug=True)
