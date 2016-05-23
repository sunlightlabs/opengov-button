from django.core.management.base import BaseCommand, CommandError
from opengov_button.models import User


class Command(BaseCommand):

    help = 'Import base Sunlight users.'
    users = [
        ['crd', 'cdunwell@sunlightfoundation.com', 'vitaminD'],
        ['alo', 'alo@sunlightfoundation.com', 'vitaminD'],
        # TODO add base users here, you can always add more at from admin interface
    ]

    def add_arguments(self, parser):
        pass # no arguments needed

    def handle(self, **options):
        try:
            for user in self.users:
                User.objects.create_user(username=user[0], email=user[1], password=user[2])
        except:
            raise CommandError("Unknown Error")
