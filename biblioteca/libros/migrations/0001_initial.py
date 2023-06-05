# Generated by Django 4.2.1 on 2023-06-05 08:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Autor',
            fields=[
                ('id_autor', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_autor', models.CharField(max_length=100)),
                ('nacionalidad', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Libro',
            fields=[
                ('id_libro', models.IntegerField(primary_key=True, serialize=False)),
                ('cod', models.IntegerField()),
                ('titulo', models.CharField(max_length=100)),
                ('isbn', models.CharField(max_length=30)),
                ('editorial', models.CharField(max_length=60)),
                ('numpags', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id_usuario', models.IntegerField(primary_key=True, serialize=False)),
                ('num_usuario', models.IntegerField()),
                ('nif', models.CharField(max_length=20)),
                ('nombre_usuario', models.CharField(max_length=100)),
                ('direccion', models.CharField(max_length=250)),
                ('telefono', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('id_prestamo', models.IntegerField(primary_key=True, serialize=False)),
                ('fec_prestamo', models.DateField()),
                ('fec_devolucion', models.DateField()),
                ('nombre_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='libros.usuario')),
                ('titulo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='libros.libro')),
            ],
        ),
    ]