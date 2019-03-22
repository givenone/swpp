from django.db import models
from django.contrib.auth.models import User

class Meeting(models.Model):

    created = models.DateTimeField(auto_now_add=True)
    sinceWhen = models.DateTimeField()
    tilWhen = models.DateTimeField()
    user = models.ForeignKey(User, related_name='meeting', on_delete=models.CASCADE)

    class Meta:
        ordering = ('created',)

