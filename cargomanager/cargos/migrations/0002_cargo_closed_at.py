# Generated by Django 3.0.7 on 2020-07-08 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cargos', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cargo',
            name='closed_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
