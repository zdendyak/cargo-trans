# Generated by Django 3.0.7 on 2020-10-26 17:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cargos', '0003_auto_20200924_2143'),
    ]

    operations = [
        migrations.AddField(
            model_name='cargo',
            name='manager',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cargos', to=settings.AUTH_USER_MODEL),
        ),
    ]