from django.db import models
from django.contrib.auth.models import User

class Todo(models.Model):
    owner = models.ForeignKey(
        User, related_name="todos", on_delete=models.CASCADE, null=True)
    task = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.task
