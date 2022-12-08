from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import info_oto, cost_oto
from swiplserver import PrologMQI, create_posix_path
import os

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import GetAllInfo_oto

class GetAllInfo_otoAPIView(APIView):
    def get(self, request):
        list_cars = info_oto.objects.all().order_by('-gia_niem_uyet').values()
        # many=true(nhieu object)
        mydata = GetAllInfo_oto(list_cars, many=True)
        return Response(data=mydata.data, status=status.HTTP_200_OK)

# Create your views here.
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def connect_and_query_prolog(query_string):
    with PrologMQI() as mqi:
        with mqi.create_thread() as prolog:
            path = create_posix_path(os.path.join(PROJECT_ROOT, "choose_oto_expert_system", "oto.pl"))
            # truy vấn prolog
            prolog.query(f'consult("{path}").')
            query_string = f"vehicle_line(X,{query_string})."
            result = prolog.query(query_string)
            return result

def index(request):
    title = "Hệ chuyên gia tư vấn ô-tô"
    manufacturer = ""
    car_category = ""
    car_engine = ""
    query_string = ""
    tenxe = ""
    # kiểm tra tất cả biến trong GET có tồn tại hay không - sau đó truy connect_and_query_prolog rồi truyền đến trang elments
    if 'manufacturer' in request.GET.keys()\
            and 'car_category' in request.GET.keys()\
            and 'car_engine' in request.GET.keys():
        manufacturer = request.GET['manufacturer']
        car_category = request.GET['car_category']
        car_engine = request.GET['car_engine']
        # if car_engine == 'null' and car_category == 'null':
        #     messages.success(request, 'Form submission successful')
        #     return HttpResponseRedirect(request.path_info)
        if car_category == 'null' and car_engine != 'null':
            query_string = f"manufacturer('{manufacturer}'), car_engine('{car_engine}')"
        elif car_engine == 'null' and car_category != 'null':
            query_string = f"manufacturer('{manufacturer}'), car_category('{car_category}')"
        elif car_engine != 'null' and car_category != 'null':
            query_string = f"manufacturer('{manufacturer}'),car_category('{car_category}'),car_engine('{car_engine}')"
        if query_string != "" :
            tenxe = connect_and_query_prolog(query_string)
            if tenxe:
                tenxe = tenxe[0]['X']
                if len(tenxe) > 0:
                    # result = info_oto.objects.get(tenxe ="DBS-2021")
                    result = info_oto.objects.get(tenxe=tenxe)
                    result_cost_oto = cost_oto.objects.get(pk=1)
                    title = result.ten_xe
                    danh_sach_hinh = result.danh_sach_hinh.split(',')
                    sub_thong_tin = result.mo_ta_chi_tiet.split('.')[0]
                    if sub_thong_tin == 'none':
                        sub_thong_tin = ''
                        result.mo_ta_chi_tiet = 'Không có mô tả hiển thị'
                    return render(request, "choose_oto_expert_system/elements.html", {"title": title, "item": result,
                                                                                      "danh_sach_hinh": danh_sach_hinh,
                                                                                      "sub_mo_ta_chi_tiet": sub_thong_tin,
                                                                                      "cost_oto": result_cost_oto,
                                                                                      "home_page": "active"})
            else:
                return render(request, 'choose_oto_expert_system/index.html', {"title": title,
                                                                               "home_page": "active",
                                                                               'modal_': "true"})
    else:
        # truy vấn prolog
        # tenxe = connect_and_query_prolog()
        # tenxe = tenxe[0]['X']
        return render(request, 'choose_oto_expert_system/index.html', {"title": title,
                                                                       "home_page": "active"})

def about(request):
    title = "Giới thiệu"
    return render(request, "choose_oto_expert_system/about.html", {"title": title,
                                                                   "about_page": "active"})

def element(request):
    # http: // 127.0.0.1: 8000 / elements.html?tenxe = DBS - 2021
    try:
        tenxe = request.GET['tenxe']
        if tenxe:
            # result = info_oto.objects.get(tenxe ="DBS-2021")
            result = info_oto.objects.get(tenxe=tenxe)
            result_cost_oto = cost_oto.objects.get(noi_dk='cac tinh khac')
            title = result.ten_xe
            danh_sach_hinh = result.danh_sach_hinh.split(',')
            sub_thong_tin = result.mo_ta_chi_tiet.split('.')[0]
            if sub_thong_tin == 'none':
                sub_thong_tin = ''
                result.mo_ta_chi_tiet = 'Không có mô tả hiển thị'
            return render(request, "choose_oto_expert_system/elements.html", {"title": title, "item": result,
                                                                            "danh_sach_hinh": danh_sach_hinh,
                                                                            "sub_mo_ta_chi_tiet": sub_thong_tin,
                                                                            "cost_oto": result_cost_oto})
        else:
            return render(request, 'choose_oto_expert_system/Error404.html')
    except:
            return render(request, 'choose_oto_expert_system/Error404.html')

def list_cars(request):
    return HttpResponse('101')

def notfound(request):
    return render(request, "choose_oto_expert_system/Error404.html", status=404)

def error_404_view(request, exception):
    return render(request,'choose_oto_expert_system/Error404.html', status=404)