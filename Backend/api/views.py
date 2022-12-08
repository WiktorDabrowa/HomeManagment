from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
  routes = [ {
    'index':'key'
  } ]
  return Response(routes)

@api_view(['GET'])
def getTasks(request, type):
  task = Task.objects.filter(type=type)
  serializer = TaskSerializer(task, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getTask(request,id):
  task = Task.objects.get(id=id)
  serializer = TaskSerializer(task)
  return Response(serializer.data)

@api_view(['DELETE'])
def deleteTask(request,id):
  print(id)
  task = Task.objects.get(id=id)
  task.delete()
  return Response(f'Task {id} deleted')
  