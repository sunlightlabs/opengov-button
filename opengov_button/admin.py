from django.contrib import admin
from opengov_button import models

class LinkView(admin.ModelAdmin):

    list_display = ['url', 'comment', 'bucket', 'browser_headers']

admin.site.register(models.Link, LinkView)