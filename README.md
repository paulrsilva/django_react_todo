# django_react_todo

A simple application to integrate Django and React in a todo list app.

This application as the first basic steps to create a functional app in Python/Django, integrationg the frontend in React with django, in the same solution, Using the JS Redux library to handle the states and actions in JS.

Django also connects to the Redux, allowing a full and clear integration with react.

## Structure

The project uses the Aplication Django format. The frontend react stuff is in the **frontend** app (folder)

## To install

### Database
1. I'm using a mysql in the project. Please change the database and authentication in <code>gtd/settings.py</code>
1. Create a database with the name you have setted in _DATABASES_ name.


### Python
** OBS: This project uses python3, django 2.1

1. Create your *Virtual Env* _(with conda or in the project root with <code>$ python -m venv ./venv</code>)_;
1. install the Python **requirements** with <code>$ pip install -r requirements.txt</code> from the project root folder;
1. Make the migrations/migrate <code> $ python manage.py makemigrations </code> and <code>$ python manage.py migrate</code>

### React
1. Go to the **frontend** folder and install the _NPM dependencies_ with <code>$ npm install</code>

Now, just run the project from the project root with <code> $ python manage.py runserver 0:8000.

Enjoy

