from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer
import json

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
  routes = [ {
    'index':'key'
  } ]
  return Response(routes)

@api_view(['GET'])
def getClosestTasks(request):
  tasks = Task.objects.all().order_by('deadline')
  tasks = tasks[:5]
  serializer = TaskSerializer(tasks, many=True)
  print(tasks)
  return Response(serializer.data)
  
@api_view(['GET'])
def getTasks(request, type):
  print('Here')
  tasks = Task.objects.filter(type=type)
  serializer = TaskSerializer(tasks, many=True)
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

@api_view(['POST'])
def addTask(request):
  data = json.loads(request.body)
  serializer = TaskSerializer(data=data)
  print(serializer)
  
  if serializer.is_valid():
    Task.objects.create(
      name=data['name'],
      deadline=data['deadline'],
      type=data['type'],
      notes=data['notes']
    )
  else:
    print(serializer.errors)
  return Response('Something done')
  