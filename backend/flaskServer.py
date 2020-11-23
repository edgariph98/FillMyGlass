from flask import Flask, request, jsonify
from .Modules import PostgresConnector
import json

def create_app():
    database_conn = PostgresConnector()
    app = Flask(__name__)
    app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
    #submit games to database route
    @app.route('/games/submit', methods=['GET', 'POST'])
    def submit_games():
        response = {}
        try:
            game = request.get_json()
            print("New Request:",end="")
            print(json.dumps(game,indent=4))
            database_conn.submitGame(game["game-name"], game["media-name"],game["media-type"], game["description"],game["players"], game["url"],game["imageURL"])
            response["Response"] = 200
            response["Description"] = "New Game Submitted"

        except: 
            response["Response"] = 400
            response["Description"] = "Unable to submit game into database"
        
        return jsonify(response)
    #Get Games route
    @app.route('/games/get/all',  methods=['GET', 'POST'])
    def get_games_all():
        response =  {}
        try:
            response["games"] = database_conn.getAllGames()
            response["Response"] = 200
        except:
            response["Response"] = 400
            response["Description"] = " unable to retrieve games from database"

        return jsonify(response)

    
    @app.route('/games/get',  methods=['GET', 'POST'])
    def get_games():
        response =  {}
        try:
            myRequest = request.get_json()
            
            response["games"] = database_conn.getGames(myRequest["keyword"],myRequest["media-type"], myRequest["players"])
            response["Response"] = 200
        except:
            response["Response"] = 400
            response["Description"] = " unable to retrieve game media types from database"

        return jsonify(response)


    @app.route('/games/get/mediatypes',  methods=['GET', 'POST'])
    def get_media_types():
        response =  {}
        try:
            
            response["media-types"] = database_conn.getMediaTypes()
            response["Response"] = 200
        except:
            response["Response"] = 400
            response["Description"] = " unable to retrieve games from database"

        return jsonify(response)
    return app

if __name__ == "__main__":
    create_app().run(debug=True)