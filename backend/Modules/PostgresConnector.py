import os
import psycopg2
###
#Connecting to database -> heroku pg:psql -app fill-my-glass

class PostgresConnector:
    def __init__(self):
        self.DATABASE_URL = os.environ["DATABASE_URI"]
        self.conn = psycopg2.connect(self.DATABASE_URL, sslmode='require')
        self.cursor = self.conn.cursor()
    def executeQuery(self, query, read):
        result = None
        self.cursor.execute(query)
        if read:
            result = self.cursor.fetchall()
        #result = None
        self.conn.commit()
        return result

    def submitGame(self, gameName,media_name, media_type, game_rules, players):
        query = """INSERT INTO "Games" ("game_name","media_name","media_type","game_rules","players" ) 
                    VALUES (\'{}\', \'{}\', \'{}\', \'{}\', {}); """
        query = query.format(gameName, media_name, media_type, game_rules, players)
        print(query)
        self.executeQuery(query,False)

    def getAllGames(self):
        query = """ SELECT * FROM \"Games\"; """
        games = self.executeQuery(query, True)
        gameList = []
        for row in games:
            game = {}
            game["game-name"] = row[1]
            game["media-name"] = row[2]
            game["media-type"] = row[3]
            game["description"] = row[4]
            game["players"] = row[5]
            gameList.append(game)
            #print(row)
        return gameList
    


if __name__ == "__main__":
    dbConnector = PostgresConnector()
    #dbConnector.submitGame("randomGame2","Pop style","Music", "play this game like this now please",10)
    dbConnector.getAllGames()
