from .views import *
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'categoria-produtos',CategoriaProdutosView)
router.register(r'foto',FotoView)
router.register(r'pecas',PecasView)
router.register(r'produtos',ProdutosView)
router.register(r'vendas',VendasView)
router.register(r'vendas-produtos',VendasProdutosView)

urlpatterns = router.urls











