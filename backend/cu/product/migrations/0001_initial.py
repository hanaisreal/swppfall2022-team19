# Generated by Django 4.1.2 on 2022-11-26 04:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('mainCategory', models.CharField(max_length=100)),
                ('subCategory', models.CharField(max_length=300)),
                ('imageUrl', models.URLField()),
                ('details', models.TextField()),
                ('price', models.IntegerField()),
                ('newProduct', models.BooleanField(default=False)),
                ('averageScore', models.FloatField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('scores', models.CharField(max_length=100)),
                ('comment', models.TextField(blank=True)),
                ('picture', models.ImageField(blank=True, upload_to='%Y/%m/%d')),
                ('likedCount', models.IntegerField(default=0)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
    ]
