# Fill-my-glass

Fill my glass is an app that gives and takes suggestions on different drinking games, based of different media
such as:
 - Movies
 - TV Shows
 - Music

## Installation
 - pull from master branch
### Backend
#### Virtual environment 
Requirements:
- python3
- pip

Installing virtualenv (Windows and Unix)
```bash
    pip install virtualenv
```
Create new virtual environment
```bash
    virtualenv venv
```
Activating virtual environment
-   Windows
```bash
    venv\\bin\\activate
```
- Unix
```bash
    source venv/bin/activate
```

Installing python libraries
```bash
    pip install -r backend/requirements.txt
```
Setting up database credentials, (DATABASE_URI) can be found under heroku resources tab
Unix
```bash
    export DATABASE_URI=DatabaseURI
```
Windows
Unix
```bash
    set DATABASE_URI=DatabaseURI
```

starting Flask Server
```bash
    python wsgi.py
```
## Contributing
Contributors:
- Alicia 
- Ross
- Adam
- Alyssa
- Edgar 