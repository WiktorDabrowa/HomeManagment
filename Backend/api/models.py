from django.db import models

class Task(models.Model):
  type_choices = [
    ('shopping','Shopping'),
    ('homework','Homework'),
    ('bills','Bills'),
    ('plans','Plans'),
    ('other','Other')
  ]
  type=models.CharField(max_length=10, choices=type_choices)
  name=models.CharField(max_length=40,)
  deadline=models.DateField(blank=True, null=True)
  notes=models.TextField(blank=True)
  def __str__(self):
    return f'{self.type} | {self.name} | {self.deadline}' 