from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')

class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = { 'password': { 'write_only': True }}

    def create(self, validate_data):
      user = User.objects.create_user(
        validate_data['username'],
        validate_data['email'],
      )
      user.set_password(validate_data['password'])
      user.is_active = True
      user.save()
      return user

    def update(self, instance, validate_data):
      if 'password' in validate_data:
        password = validate_data.pop('password')
        instance.set_password(password)
      return super(UserSerializer, self).update(instance, validate_data)

class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect credentials")