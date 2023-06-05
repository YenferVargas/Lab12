from rest_framework import serializers
from .models import Prestamo

class PrestamoSerializer(serializers.ModelSerializer):
    id_prestamo = serializers.IntegerField(read_only=True)
    nombre_usuario = serializers.CharField(source='nombre_usuario.nombre_usuario', read_only=True)

    titulo = serializers.CharField(source='libro.titulo', read_only=True)

    fec_prestamo = serializers.DateField()
    fec_devolucion = serializers.DateField()

    class Meta:
        model = Prestamo
        fields = ('id_prestamo', 'nombre_usuario', 'titulo', 'fec_prestamo', 'fec_devolucion')

    def create(self, validated_data):
        return Prestamo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.nombre_usuario = validated_data.get('nombre_usuario', instance.nombre_usuario)
        instance.titulo = validated_data.get('titulo', instance.titulo)
        instance.fec_prestamo = validated_data.get('fec_prestamo', instance.fec_prestamo)
        instance.fec_devolucion = validated_data.get('fec_devolucion', instance.fec_devolucion)
        instance.save()
        return instance
