from flask import Flask, request, jsonify
from flask_cors import CORS
import database

app = Flask(__name__)
CORS(app)

# Initialize database
database.init_db()

# Get all recognitions
@app.route('/recognitions', methods=['GET'])
def get_recognitions():
    recognitions = database.get_all_recognitions()
    return jsonify(recognitions)

# Submit a new recognition
@app.route('/recognitions', methods=['POST'])
def add_recognition():
    data = request.json
    database.add_recognition(
        staff_name=data['staff_name'],
        department=data['department'],
        tags=data['tags'],
        note=data['note']
    )
    return jsonify({'message': 'Recognition saved!'}), 201

# Get strengths for a staff member
@app.route('/strengths/<staff_name>', methods=['GET'])
def get_strengths(staff_name):
    strengths = database.get_strengths(staff_name)
    return jsonify(strengths)

if __name__ == '__main__':
    app.run(debug=True)