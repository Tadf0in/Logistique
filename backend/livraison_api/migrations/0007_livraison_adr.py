# Generated by Django 4.2.6 on 2023-10-25 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('livraison_api', '0006_livraison_hidden'),
    ]

    operations = [
        migrations.AddField(
            model_name='livraison',
            name='adr',
            field=models.BooleanField(default=False),
        ),
    ]