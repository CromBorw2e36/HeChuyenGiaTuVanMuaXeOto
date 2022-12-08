from django.db import models

# tao csdl

#thong tin oto
class info_oto(models.Model):
    tenxe = models.CharField(max_length=255)
    ten_xe = models.CharField(max_length=255)
    danh_sach_hinh = models.CharField(max_length=500)
    mo_ta_chi_tiet = models.CharField(max_length=3000)
    gia_niem_uyet = models.IntegerField()
    dong_co = models.CharField(max_length=255)
    cong_xuat = models.CharField(max_length=255)
    momen_xoan = models.CharField(max_length=255)
    ho_so = models.CharField(max_length=255)
    he_dan_dong = models.CharField(max_length=255)
    so_cho = models.IntegerField()

#du tinh chi phi
class cost_oto(models.Model):
    phi_su_dung_duong_bo = models.IntegerField()
    bao_hiem_trach_nhiem = models.IntegerField()
    phi_dk_bien_so = models.IntegerField()
    phi_dang_kiem = models.IntegerField()
    noi_dk = models.CharField(max_length=255)
    phi_truoc_ba = models.IntegerField()