from django.db import models

# Create your models here.

class Cargo(models.Model):
  from_country = models.CharField(max_length=100)
  from_city = models.CharField(max_length=100)
  to_country = models.CharField(max_length=100)
  to_city = models.CharField(max_length=100)
  date = models.DateField()
  volume = models.FloatField()
  weigth = models.IntegerField()
  cargo_type = models.CharField(max_length=100)
  description = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  closed_at = models.DateTimeField(null=True, blank=True)