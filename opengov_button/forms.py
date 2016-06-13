from django.forms import ModelForm
from opengov_button import models


class LinkForm(ModelForm):

	class Meta:
		model = models.Link
		fields = ['url', 'title', 'bucket', 'comment', 'req_headers', 'resp_headers']
