from rest_framework import serializers
from .models import Meeting
from django.contrib.auth.models import User
from rest_framework.validators import UniqueTogetherValidator

class MeetingSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')

    def validate(self, data):
        """
        Check that start is before finish.
        """
        for m in Meeting.objects.all():
            if self.instance:
                if m.id == self.instance.id:
                    continue

            if m.sinceWhen > data['sinceWhen']:
                if m.sinceWhen < data['tilWhen']:
                    raise serializers.ValidationError("time interval error")
            elif m.tilWhen > data['sinceWhen']:
                raise serializers.ValidationError("time interval error")

        if data['sinceWhen'] > data['tilWhen']:
            raise serializers.ValidationError("finish must occur after start")
        return data

    class Meta:
        model = Meeting
        fields = ('id', 'created', 'sinceWhen', 'tilWhen', 'user',)


class UserSerializer(serializers.ModelSerializer):
    meeting = serializers.PrimaryKeyRelatedField(many=True, queryset=Meeting.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'meeting')
