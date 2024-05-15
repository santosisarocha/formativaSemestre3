from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.viewsets import  ModelViewSet

# Create your views here.

class UsuarioCustomizadoView(ModelViewSet):
    queryset = UsuarioCustomizado.objects.all()
    serializer_class = UsuarioCustomizadoSerializer

class CategoriaProdutosView(ModelViewSet):
    queryset = CategoriaProdutos.objects.all()
    serializer_class = CategoriaProdutosSerializer

class FotoView(ModelViewSet):
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer

class PecasView(ModelViewSet):
    queryset = Pecas.objects.all()
    serializer_class = PecasSerializer

class ProdutosView(ModelViewSet):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer

class VendasView(ModelViewSet):
    queryset = Vendas.objects.all()
    serializer_class = VendasSerializer

class VendasProdutosView(ModelViewSet):
    queryset = VendasProdutos.objects.all()
    serializer_class = VendaProdutosSerializer
