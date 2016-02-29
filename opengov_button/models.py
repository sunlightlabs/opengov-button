from django.db import models
from django.core import serializers
from jsonfield import JSONField


class AbstractManager(models.Manager):

    def get_or_instantiate(self, **kwargs):
        """
        Allows us to check for whether an object exists and if not instantiate it (without saving to database).

        @param kwargs:
        @type kwargs:
        @return:
        @rtype:
        """
        obj = self.filter(**kwargs).first()
        return obj if obj else self.model(**kwargs)


class AbstractModel(models.Model):

    class Meta:
        abstract = True

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = AbstractManager()

    def serialize(self, to_format):
        return serializers.serialize(to_format, [self,])


class Link(AbstractModel):

    BUCKETS = (
        ('NO', 'Not Open'),
        ('B', 'Broken'),
        ('IA', "Not Accessible"),
        # add more buckets here
    )

    url = models.URLField(max_length=1000)
    browser_headers = JSONField()
    bucket = models.CharField(choices=BUCKETS, max_length=2)
    comment = models.CharField(max_length=8000)