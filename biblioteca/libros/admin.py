from django.contrib import admin
from .models import Libro
from .models import Prestamo
from .models import Usuario

class LibroAdmin(admin.ModelAdmin):
    list_display = ['id_libro', 'titulo', 'isbn', 'editorial', 'numpags']
    list_filter = ['editorial']


class PrestamoAdmin(admin.ModelAdmin):
    list_display = ['id_prestamo', 'libro', 'nombre_usuario', 'fec_prestamo', 'fec_devolucion']
    list_filter = ['fec_prestamo', 'fec_devolucion']
    search_fields = ['libro__titulo', 'nombre_usuario__nombre_usuario']


class UsuarioAdmin(admin.ModelAdmin):
    list_display = ['id_usuario', 'num_usuario', 'nif', 'nombre_usuario', 'direccion', 'telefono']
    search_fields = ['nombre_usuario', 'nif']


admin.site.register(Prestamo, PrestamoAdmin)
admin.site.register(Libro, LibroAdmin)
admin.site.register(Usuario, UsuarioAdmin)