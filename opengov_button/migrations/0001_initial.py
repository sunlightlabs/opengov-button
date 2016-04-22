# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-18 21:40
from __future__ import unicode_literals

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('url', models.URLField(max_length=1000)),
                ('browser_headers', jsonfield.fields.JSONField(blank=True, null=True)),
                ('bucket', models.CharField(choices=[('NO', 'Not Open'), ('B', 'Broken'), ('IA', 'Not Accessible')], max_length=2)),
                ('comment', models.CharField(blank=True, max_length=8000, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]