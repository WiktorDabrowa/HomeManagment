# Generated by Django 4.0.5 on 2022-12-06 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('shopping', 'Shopping'), ('homework', 'Homework'), ('bills', 'Bills'), ('plans', 'Plans'), ('other', 'Other')], max_length=10)),
                ('name', models.CharField(max_length=30)),
                ('deadline', models.DateField(blank=True)),
                ('notes', models.TextField(blank=True)),
            ],
        ),
    ]
