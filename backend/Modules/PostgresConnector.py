import os
import psycopg2


class PostgresConnector:
    def __init__(self):
        self.DATABASE_URL = ""
        self.conn = psycopg2.connect(self.DATABASE_URL, sslmode='require')
        self.cursor = self.conn.cursor()
    def executeQuery(self, query):
        self.cursor.execute(query)

    def submitGame(self, gameName, gameType, description, players):
        query = """INSERT INTO "Games" ("name", "type", "description","players") 
                    VALUES (\'{}\',\'{}\',\'{}\',{}); """
        query = query.format(gameName,gameType,description,players)
        print(query)
        self.executeQuery(query)

    


if __name__ == "__main__":
    dbConnector = PostgresConnector()
    dbConnector.submitGame("randomGame","Music","play this game like this",2)
