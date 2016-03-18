import json
import traceback

from django.http import HttpResponse, JsonResponse
from django.views.generic import TemplateView, ListView, FormView
from opengov_button import models
from django.views.decorators.csrf import csrf_exempt
import traceback

from opengov_button import forms


class LinksView(FormView, ListView):

    model = models.Link
    form_class = forms.LinkForm

    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        form.save()
        return JsonResponse({'status': 'success'})

    def form_invalid(self, form):
        return JsonResponse({'status': 'failure'})

    def post(self, request, *args, **kwargs):
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)
    	# return super().post(request, *args, **kwargs)
        
        # return HttpResponse(request.POST.get('test'))
        # in opengov-button.html <form> element or javascript, add input elements for url, bucket, comment, browser_headers fields
        # to form. Get them via request.POST.get('<input_name>')
        #try:
        #	return JsonResponse({'status':'success'})
        #except:
        #	return JsonResponse({'status': traceback.format_exc()})

        # return HttpResponse('qweqweqwe')
