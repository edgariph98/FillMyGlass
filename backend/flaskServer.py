from flask import Flask, request
from .Modules import PostgresConnector

def create_app():
    database_conn = PostgresConnector()
    app = Flask(__name__)


    @app.route('/games/submit', methods=['GET', 'POST'])
    def submit_games():
        game = request.get_json()
        print(game)
        return 'Hello, World!'

    @app.route('/games/get',  methods=['GET', 'POST'])
    def get_games():
        return "Hi there"

    return app
if __name__ == "__main__":
    create_app().run(debug=True)