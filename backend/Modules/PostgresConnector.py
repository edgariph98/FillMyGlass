import os
import psycopg2
import json
###
#Connecting to database -> heroku pg:psql -app fill-my-glass

class PostgresConnector:
    def __init__(self):
        self.DATABASE_URL = os.environ["DATABASE_URI"]
        self.conn = psycopg2.connect(self.DATABASE_URL, sslmode='require')
        self.cursor = self.conn.cursor()
    #executing query and returning value if we want to read it
    def executeQuery(self, query, read):
        result = None   
        self.cursor.execute(query)
        if read:
            result = self.cursor.fetchall()
        #result = None
        self.conn.commit()
        return result
    #game submission to database
    def submitGame(self, gameName,media_name, media_type, game_rules, players, url, imageURL):
        gameName = self.parseStringArgument(gameName)
        media_name = self.parseStringArgument(media_name)
        game_rules = self.parseStringArgument(game_rules)
        query = """INSERT INTO "Games" ("game_name","media_name","media_type","game_rules","players", "url","image_url") 
                    VALUES (\'{}\', \'{}\', \'{}\', \'{}\', {},\'{}\', \'{}\'); """
        query = query.format(gameName, media_name, media_type, game_rules, players, url,imageURL)
        #print(query)
        self.executeQuery(query,False)

    
    #gets all games from database
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
            game["url"] = row[6] if row[6] else "None"
            game["imageURL"] = row[7] if row[7] else "None"
            gameList.append(game)
            #print(row)
        return gameList
    def getGames(self, keyword, media_type, players):
        gameList = []
        query  = ""
        if not players:
            players = 1

        #all parameters 
        if keyword and media_type and players:
            keyword = self.parseStringArgument(keyword)
            keyword =  "%" + keyword + "%"
            query = """SELECT * FROM "Games"
                        WHERE media_type = \'{}\'
                            AND "players" >= {}
                                AND (game_rules ILIKE \'{}\'
                                    OR game_name ILIKE \'{}\'
                                    OR media_name ILIKE  \'{}\');"""
            query = query.format(media_type,players,keyword,keyword,keyword)
        #only media type
        if not keyword and media_type:
            query = """SELECT * FROM "Games"
                        WHERE media_type = \'{}\'
                            AND "players" >= {};"""

            query = query.format(media_type,players)
        #only keyword
        if not media_type and keyword:
            keyword =  "%" + keyword + "%"
            query = """SELECT * FROM "Games"
                        WHERE "players" >= {}
                                AND (game_rules ILIKE \'{}\'
                                    OR game_name ILIKE \'{}\'
                                    OR media_name ILIKE  \'{}\');"""

            query = query.format(players,keyword,keyword,keyword)
        #only players
        if not media_type and not keyword:
            query = """SELECT * FROM "Games"
                        WHERE "players" >= {};"""
            query = query.format(players)
        games = self.executeQuery(query, True)
        #print(query)
        for row in games:
            game = {}
            game["game-name"] = row[1]
            game["media-name"] = row[2]
            game["media-type"] = row[3]
            game["description"] = row[4]
            game["players"] = row[5]
            game["url"] = row[6] if row[6] else "None"
            game["imageURL"] = row[7] if row[7] else "None"
            gameList.append(game)

        return gameList
    def parseStringArgument(self,string):
        parsedString = string.replace('"','\\"').strip()
        return parsedString

    def getMediaTypes(self):
        query = """SELECT DISTINCT media_type FROM "Games";"""

        rows = self.executeQuery(query,True)

        media_types =[]
        for row in rows:
            media_types.append(row[0])

        return media_types

    


if __name__ == "__main__":
    dbConnector = PostgresConnector()
    #dbConnector.submitGame("randomGame3","Pop style","Music", "play this game like this now please",10,"")
    print(len(dbConnector.getAllGames()))
    #print(json.dumps(dbConnector.getGames("","",3), indent=4))
