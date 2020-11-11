from django.db import models
from django.contrib.auth.models import User

class Cargo(models.Model):
  from_country = models.CharField(max_length=100)
  from_city = models.CharField(max_length=100)
  to_country = models.CharField(max_length=100)
  to_city = models.CharField(max_length=100)
  date = models.DateField()
  volume = models.FloatField()
  weight = models.IntegerField()
  cargo_type = models.CharField(max_length=100, blank=True)
  description = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  closed_at = models.DateTimeField(null=True, blank=True)
  price = models.CharField(max_length=100, blank=True)
  manager = models.ForeignKey(User, related_name="cargos", on_delete=models.CASCADE, null=True)