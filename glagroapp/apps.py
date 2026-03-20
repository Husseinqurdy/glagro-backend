from django.apps import AppConfig

class GlagroappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'glagroapp'

    def ready(self):
        import glagroapp.signals
