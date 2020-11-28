from rest_framework import viewsets
from rest_framework.decorators import action, api_view
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.response import Response

from .serializers import TodoSerializer
from todos.models import Todo
from datetime import datetime

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = (AllowAny,)

    @action(methods=['post','get'], detail=False)
    def toggle(self, request, *args, **kwargs):
        if request.method == 'POST':
            # todo_id = request.POST.get('id')
            todo_id = request.data['id']
            todo = Todo.objects.get(id=todo_id)
            if todo.done:
                todo.done=False
            else:
                todo.done=True
            todo.save()
        elif request.method == 'GET':
            todo_id = int(request.query_params['id'])
            todo = Todo.objects.get(id=todo_id)
            if todo.done:
                todo.done=False
            else:
                todo.done=True
            todo.save()

        list_queryset = (list(self.queryset.values()))

        for item in list_queryset:
            item['created_at'] = item['created_at'].strftime("%d/%m/%Y %H:%M:%S")

        return Response(list_queryset)
