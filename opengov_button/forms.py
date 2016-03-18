from django.forms import ModelForm
from opengov_button import models


class LinkForm(ModelForm):

	class Meta:
		model = models.Link
		fields = ['url', 'browser_headers', 'bucket', 'comment']
