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
If pip gives you a version warning, try `python3 -m pip install --upgrade pip`

Create new virtual environment

```bash
    virtualenv venv
```

Activating virtual environment

- Windows

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
Unix. You can log into heroku and click on Fill-My-Glass, go to Resources, click on Heroku Postgres, go to Settings, 
then click on Database Credentials. DATABASE_URI=postgres://...
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
### Frontend

Requirements:

- npm

Installing node_modules

```bash
    1. Navigate to 'frontend' folder
    2. npm install
    3. npm install react-player --save
    4. npm install react-share --save
```

Start Frontend React Server

```bash
    1. Navigate to 'frontend' folder
    2. npm start
```

If `npm start` gives you an error “npm ERR! code ELIFECYCLE...” do `npm cache clean --force` then `npm install` again and if it asks you to, do `npm audit fix`. Now you can try `npm start` again.

```
    3. Navigate to localhost:3000
```

## Contributing

Contributors:

- Alicia
- Ross
- Adam
- Alyssa
- Edgar
