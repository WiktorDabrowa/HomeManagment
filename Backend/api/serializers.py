from rest_framework.serializers import ModelSerializer
from .models import Task


class TaskSerializer(ModelSerializer):
  def to_internal_value(self, data):
    if 'deadline' in data and data['deadline'] == '': 
      data['deadline'] = None
    return super(TaskSerializer, self).to_internal_value(data)
  class Meta:
    model = Task
    fields = '__all__'