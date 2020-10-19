from flask import Flask, request, jsonify
from .Modules import PostgresConnector

def create_app():
    database_conn = PostgresConnector()
    app = Flask(__name__)
    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    #submit games to database route
    @app.route('/games/submit', methods=['GET', 'POST'])
    def submit_games():
        game = request.get_json()
        
        return 'Hello, World!'
    #Get Games route
    @app.route('/games/get',  methods=['GET', 'POST'])
    def get_games():
        response =  {}
        try:
            response["games"] = database_conn.getAllGames()
            response["Response"] = 200
        except:
            response["Response"] = 400
            response["Description"] = " unable to retrieve games from database"

        return jsonify(response)

    return app
if __name__ == "__main__":
    create_app().run(debug=True)