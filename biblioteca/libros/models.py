from django.db import models
from re import I


# Create your models here.
class Libro(models.Model):
    id_libro = models.IntegerField(primary_key=True)
    cod = models.IntegerField()
    titulo = models.CharField(max_length=100)
    isbn = models.CharField(max_length=30)
    editorial = models.CharField(max_length=60)
    numpags = models.IntegerField()

    def tit_comp(self):
        return"{}".format(self.titulo)
    def __str__(self)-> str:
        return self.tit_comp()

class Autor(models.Model):
    id_autor = models.IntegerField(primary_key=True)
    nombre_autor = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=60)

class Usuario(models.Model):
    id_usuario = models.IntegerField(primary_key=True)
    num_usuario = models.IntegerField()
    nif = models.CharField(max_length=20)
    nombre_usuario = models.CharField(max_length=100)
    direccion = models.CharField(max_length=250)
    telefono = models.CharField(max_length=20)

    def nom_comp(self):
        return"{}".format(self.nombre_usuario)
    def __str__(self) -> str:
        return self.nom_comp()
    
class Prestamo(models.Model):
    id_prestamo = models.IntegerField(primary_key=True)
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE)
    nombre_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    fec_prestamo = models.DateField()
    fec_devolucion = models.DateField()

    def titulo_libro(self):
        return str(self.libro)

    def __str__(self) -> str:
        return self.titulo_libro()
