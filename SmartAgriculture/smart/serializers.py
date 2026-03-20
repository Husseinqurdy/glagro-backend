from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import User, Crop


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ["email", "full_name", "password"]

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data["email"],
            password=validated_data["password"],
            full_name=validated_data["full_name"]
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        # authenticate hutumia USERNAME_FIELD (ambayo ni email kwa model yako)
        user = authenticate(username=data["email"], password=data["password"])
        if not user:
            raise serializers.ValidationError("Invalid credentials")
        if not user.is_active:
            raise serializers.ValidationError("User account is disabled")
        return user


class ForgotPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()


class CropSerializer(serializers.ModelSerializer):
    farmer_name = serializers.CharField(source="farmer.full_name", read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Crop
        fields = [
            "id",
            "crop_name",
            "quantity",
            "price",
            "location",
            "image",
            "created_at",
            "farmer_name",
        ]

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None