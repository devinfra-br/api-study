from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/person', methods=['POST'])
def greet():
    data = request.get_json()

    if not data or 'name' not in data:
        return jsonify({'error': 'Name parameter is missing.'}), 400

    name = data['name']
    message = f'Hello {name}'

    return jsonify({'message': message})

if __name__ == '__main__':
    app.run(debug=True, port=8080)
