from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework_simplejwt.tokens import RefreshToken

from .serializers import (
    RegisterSerializer,
    LoginSerializer,
    ForgotPasswordSerializer,
    CropSerializer,
)
from .models import Crop


class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({
                "message": "User registered successfully",
                "role": user.role
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            access = refresh.access_token
            return Response({
                "message": "Login successful",
                "role": user.role,
                "access": str(access),
                "refresh": str(refresh),
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ForgotPasswordView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = ForgotPasswordSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            return Response(
                {"message": f"Password reset link sent to {email}"},
                status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SellCropView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        serializer = CropSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save(farmer=request.user)
            return Response({
                "message": "Crop uploaded successfully",
                "data": serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        crops = Crop.objects.filter(farmer=request.user)
        serializer = CropSerializer(crops, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class MarketView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        crops = Crop.objects.all().order_by("-created_at")
        serializer = CropSerializer(crops, many=True, context={"request": request})
        return Response(serializer.data, status=status.HTTP_200_OK)


class InfoView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return Response({
            "title": "Taarifa za Kilimo",
            "content": "Hapa utapata makala, mbinu bora, na taarifa muhimu kuhusu kilimo endelevu na masoko ya mazao."
        }, status=status.HTTP_200_OK)