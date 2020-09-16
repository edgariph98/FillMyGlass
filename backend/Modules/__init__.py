import os
import psycopg2

if __name__ == "__main__":
    
    DATABASE_URL = "postgres://ptqrgclmgivpym:f0fba45a182c237971dec7bca287fd4ace81bcb536e2d70e1cf8e5d4ebd7a816@ec2-34-192-30-15.compute-1.amazonaws.com:5432/d11khruk7et3io"

    conn = psycopg2.connect(DATABASE_URL, sslmode='require')
