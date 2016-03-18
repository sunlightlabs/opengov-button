import json
import traceback

from django.http import HttpResponse, JsonResponse
from django.views.generic import TemplateView, ListView
from opengov_button import models
from django.views.decorators.csrf import csrf_exempt


class LinksView(ListView):

    model = models.Link

    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return HttpResponse('works2222')
