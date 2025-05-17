from django.apps import AppConfig


class SicoConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'sico'

    def ready(self):
        import sico.signals
