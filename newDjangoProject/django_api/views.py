from django.shortcuts import render
from django.http import HttpResponse , JsonResponse #import this
from . import data

import random # random library
facts_array = data.data
# Create your views here.
def home(request): # expect a request
    #send random fact to client
    random_fact = random.choice(facts_array)
   # return HttpResponse(random_fact)
    return JsonResponse({"data": random_fact}) 