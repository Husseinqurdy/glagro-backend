from django.urls import path
from .views import (
    RegisterView,
    LoginView,
    ForgotPasswordView,
    SellCropView,
    MarketView,
    InfoView,
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("forgot-password/", ForgotPasswordView.as_view(), name="forgot_password"),

    path("sell/", SellCropView.as_view(), name="sell_crop"),
    path("market/", MarketView.as_view(), name="market"),
    path("info/", InfoView.as_view(), name="info"),

    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]