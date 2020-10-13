from flask import Flask
from .Modules import PostgresConnector
def create_app():
    database_conn = PostgresConnector()
    app = Flask(__name__)


    @app.route('/games/submit')
    def submit_games():
        return 'Hello, World!'

    @app.route('/games/get')
    def get_games():
        return "Hi there"

    return app
if __name__ == "__main__":
    create_app().run(debug=True)