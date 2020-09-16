from flask import Flask
app = Flask(__name__)

@app.route('/games/submit')
def submit_games():
    return 'Hello, World!'

@app.route('/games/get')
def get_games():
    return "Hi there"
if __name__ == "__main__":
    app.run()