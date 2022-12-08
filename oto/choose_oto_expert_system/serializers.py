

from rest_framework import serializers
from .models import info_oto

class GetAllInfo_oto(serializers.ModelSerializer):

    class Meta:
        model = info_oto
        # fields = ('tenxe', 'ten_xe', 'danh_sach_hinh', 'mo_ta_chi_tiet', 'gia_niem_uyet', 'so_cho')
        fields = '__all__'

