from django.contrib import admin
from .models import Post

# Register your models here.
print('admin ', dir(admin.AdminSite.login))
admin.site.register(Post)
