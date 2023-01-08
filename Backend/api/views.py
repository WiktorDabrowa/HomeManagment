from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer
import json

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
  routes ={
    '5 Closest tasks':'/closest_tasks',
    'Shopping':'/tasks/shopping',
    'Bills':'/tasks/bills',
    'Homework':'/tasks/homework',
    'Plans':'/tasks/plans',
    'Other':'/tasks/other',
    'Single Task':'/task/{task id}',
    'All Tasks':'tasks'
  }
  return Response(routes)
# Get All tasks
@api_view(['GET'])
def getAllTasks(request):
  tasks = Task.objects.all()
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data)

# Get tasks with closest deadlines excluding tasks
# without a deadline
@api_view(['GET'])
def getClosestTasks(request):
  tasks = Task.objects.all().exclude(deadline = None).order_by('deadline')
  tasks = tasks[:5]
  serializer = TaskSerializer(tasks, many=True)
  print(tasks)
  return Response(serializer.data)
  
# Get Tasks of particular type
@api_view(['GET'])
def getTasks(request, type):
  tasks = Task.objects.filter(type=type)
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data)

# Get or update single task
@api_view(['GET', 'PUT'])
def getTask(request,id):
  if request.method == 'GET':
    task = Task.objects.get(id=id)
    serializer = TaskSerializer(task)
    return Response(serializer.data)
  elif request.method == 'PUT':
    print(f'editing item {id}')
    data = json.loads(request.body)
    serializer = TaskSerializer(data=data)
    item = Task.objects.get(id=id)
    if serializer.is_valid():
      print('Here')
      item.notes = data['notes']
      item.name = data['name']
      item.deadline = data['deadline']
      item.save()
      return Response(f'item {id} edited')
    return Response(serializer.errors)
    
# Delete task
@api_view(['DELETE'])
def deleteTask(request,id):
  print(id)
  task = Task.objects.get(id=id)
  task.delete()
  return Response(f'Task {id} deleted')

# Add task
@api_view(['POST'])
def addTask(request):
  data = json.loads(request.body)
  serializer = TaskSerializer(data=data)
  
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
  