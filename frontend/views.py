from django.shortcuts import render
from django.views.generic.detail import DetailView
from todos.models import Todo

def index(request):
    print('algo')
    return render(request, 'frontend/index.html')

class TodoDetailView(DetailView):
    print('algo')
    model = Todo
    template_name = 'frontend/index.html'

