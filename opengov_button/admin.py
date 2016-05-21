from django.contrib import admin
from opengov_button import models

class LinkView(admin.ModelAdmin):

    list_display = ['url', 'title', 'comment', 'bucket', 'assignee']

admin.site.register(models.Link, LinkView)