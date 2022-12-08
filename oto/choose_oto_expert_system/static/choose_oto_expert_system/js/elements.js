$(document).ready(function(e) {

    const array_select_tinh = { "ha-noi": 12, "ho-chi-minh": 12, "ha-tinh": 11 };
    const array_phi_dk_bien_so = { "ha-noi": 20000000, "ho-chi-minh": 20000000 }

    let selected_tinh = $('#select_tinh').find(":selected").val();
    if (array_select_tinh[selected_tinh] != null) {
        $('#phi_truoc_ba').text(array_select_tinh[selected_tinh])
    } else {
        $('#phi_truoc_ba').text(10)
    }
    $('#select_tinh').change(function() {
        let selected_tinh = $('#select_tinh').find(":selected").val();
        if (array_select_tinh[selected_tinh] != null) {
            $('#phi_truoc_ba').text(array_select_tinh[selected_tinh])
        } else {
            $('#phi_truoc_ba').text(10)
        }
    });

    let gia_niem_yet = parseInt($('#gia_niem_yet').text())
    let phi_truoc_ba = parseInt($('#phi_truoc_ba').text())
    let phi_truoc_ba_tinh = parseInt(gia_niem_yet) * parseInt(phi_truoc_ba) / 100
    let phi_su_dung_duong_bo = parseInt($('#phi_su_dung_duong_bo').text())
    let bao_hiem_trach_nhiem = parseInt($('#bao_hiem_trach_nhiem').text())
    let phi_dk_bien_so = parseInt($('#phi_dk_bien_so').text()) // thay đổi tùy theo tỉnh
    let phi_dang_kiem = parseInt($('#phi_dang_kiem').text())
    let tong_cong = 0


    let select_tinh = $('#select_tinh').find(":selected").val();
    if (array_phi_dk_bien_so[select_tinh] != null) {
        phi_dk_bien_so = array_phi_dk_bien_so[select_tinh];
    } else {
        phi_dk_bien_so = 20000000;
    }

    $('#select_tinh').change(function() {
        let select_tinh = $('#select_tinh').find(":selected").val();
        if (array_phi_dk_bien_so[select_tinh] != null) {
            phi_dk_bien_so = array_phi_dk_bien_so[select_tinh];
        } else {
            phi_dk_bien_so = 1000000;
        }
        phi_truoc_ba = parseInt($('#phi_truoc_ba').text())
        $('#phi_su_dung_duong_bo').text($('#phi_su_dung_duong_bo').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
        $('#bao_hiem_trach_nhiem').text($('#bao_hiem_trach_nhiem').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
        $('#phi_dk_bien_so').text(phi_dk_bien_so.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
        $('#phi_dang_kiem').text($('#phi_dang_kiem').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
        phi_truoc_ba_tinh = parseInt(gia_niem_yet) * parseInt(phi_truoc_ba) / 100
        $('#phi_truoc_ba_tinh').text(phi_truoc_ba_tinh.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
        tong_cong = gia_niem_yet + phi_truoc_ba_tinh + phi_su_dung_duong_bo + bao_hiem_trach_nhiem + phi_dk_bien_so +
            phi_dang_kiem;
        $('#tong_cong').text(tong_cong.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))
    });

    $('#phi_su_dung_duong_bo').text($('#phi_su_dung_duong_bo').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    $('#bao_hiem_trach_nhiem').text($('#bao_hiem_trach_nhiem').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    $('#phi_dk_bien_so').text($('#phi_dk_bien_so').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    $('#phi_dang_kiem').text($('#phi_dang_kiem').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    $('#gia_niem_yet').text($('#gia_niem_yet').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    $('#gia_la_banh_niem_yet').text($('#gia_la_banh_niem_yet').text().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
    $('#phi_truoc_ba_tinh').text(phi_truoc_ba_tinh.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));

    tong_cong = gia_niem_yet + phi_truoc_ba_tinh + phi_su_dung_duong_bo + bao_hiem_trach_nhiem + phi_dk_bien_so +
        phi_dang_kiem;
    $('#tong_cong').text(tong_cong.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."))

    function LoadListCard() {
        $.ajax({
            url: "/list_cars",
            success: function(data) {
                const list_cars_items_more = $('#list_cars_items_more');
                let list_cars = "";
                $.each(data, function(index, element) {
                    if (0 <= index && index < 4) {
                        list_cars += `
                            <div class="col-8 col-sm-3 col-md-3">
                                <div class="card mb-3" style="width: 15rem; height: 20rem">
                                <a href="/elements.html?tenxe=${element.tenxe}"><img src="../static/choose_oto_expert_system/images/cars/${element.danh_sach_hinh.split(',')[0]}" style="height: 10rem" class="card-img-top" alt="${element.danh_sach_hinh.split(',')[0]}"></a>
                                    <div class="card-body">
                                    <h5 class="card-title"><a href="/elements.html?tenxe=${element.tenxe}">${element.ten_xe}</a></h5>
                                    <p class="card-text limit-text"><a href="/elements.html?tenxe=${element.tenxe}">${element.mo_ta_chi_tiet != 'none' ? element.mo_ta_chi_tiet : 'Hãng xe top đầu thế giới năm 2019'}</a></p>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                });
                //                console.log('list_cars\n' + list_cars)
                $('#list_cars_items_more').html(list_cars);
            }
        });
    }

    function addDotPrice(price) {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }

    LoadListCard();

    $('#vaytien_btntinhlai').on('click', function(e) {
        let SoTienVay = parseInt($('#vaytien_sotienvay').val()) || 0;
        let KiHanVay = parseInt($('#vaytien_kihanvay').val()) || 0;
        let LaiXuat = parseInt($('#vaytien_laixuat').val()) || 0;

        SoTienVay = SoTienVay < 0 ? 0 : SoTienVay;
        KiHanVay = KiHanVay < 0 ? 0 : KiHanVay;
        LaiXuat = LaiXuat < 0 ? 0 : LaiXuat;

        if (SoTienVay == 0 ||
            KiHanVay == 0) {
            $('#TinhTienVayMessage_ p').text('Thông Báo: Vui lòng không để trống');
            $('#TinhTienVayMessage_').removeClass('fade');

            var toastElList = [].slice.call(document.querySelectorAll('.toast'))
            var toastList = toastElList.map(function(toastEl) {
                return new bootstrap.Toast(toastEl)
            })
            console.log(toastElList)
            toastList[0].show()
            return 0;
        } else {
            $('#TinhTienVayMessage_').addClass('fade');
        }

        SoTienGocPhaiTraHangThang = SoTienVay / KiHanVay / 12 || 0;
//        LaiXuatHangThang = (SoTienVay * KiHanVay / 12) * ((LaiXuat) / 12);
        LaiXuatHangThang = SoTienGocPhaiTraHangThang * ((LaiXuat/100) * KiHanVay);
        TongSoTienPhaiTra = SoTienVay + LaiXuatHangThang * 12 * KiHanVay;

        console.log("Số tiền góc phải trả hàng tháng: " + SoTienGocPhaiTraHangThang.toFixed(2))
        console.log("Số tiền lãi phải trả hàng tháng: " + LaiXuatHangThang.toFixed(2))
        console.log("Số tiền phải trả : " + TongSoTienPhaiTra.toFixed(2))

        $('#tiengoc').text(addDotPrice(SoTienGocPhaiTraHangThang.toFixed(2)))
        $('#tienlai').text(addDotPrice(LaiXuatHangThang.toFixed(2)))
        $('#tongtien').text(addDotPrice(TongSoTienPhaiTra.toFixed(2)))

        $('#exampleModal').modal('show');

    })

    $('#SoTienCoTheVayBtn').on('click', function() {
        let ThuNhapHangThang = parseInt($('#ThuNhapHangThang').val()) || 0 < 0;
        let ChiTieuHangThang = parseInt($('#ChiTieuHangThang').val()) || 0;
        let KyHanVay = parseInt($('#KyHanVay').val()) || 0;
        let LaiXuatTienVay = parseInt($('#LaiXuatTienVay').val()) || 0;


        ThuNhapHangThang = ThuNhapHangThang < 0 ? 0 : ThuNhapHangThang;
        ChiTieuHangThang = ChiTieuHangThang < 0 ? 0 : ChiTieuHangThang;
        KyHanVay = KyHanVay < 0 ? 0 : KyHanVay;

        if (ThuNhapHangThang == 0 ||
            KyHanVay == 0) {
            $('#TinhTienVayMessage p').text('Thông Báo: Vui lòng không để trống');
            $('#TinhTienVayMessage').removeClass('fade');
            return 0;
        } else {
            $('#TinhTienVayMessage').addClass('fade');
        }


        let TongKetSoTien = ThuNhapHangThang - ChiTieuHangThang;


        let SoTienCoTheVay = ThuNhapHangThang * KyHanVay * 12;
//        let SoTienPhaiTra = TongKetSoTien * KyHanVay * 12 + TongKetSoTien * LaiXuatTienVay * KyHanVay;
        let SoTienPhaiTra = TongKetSoTien * KyHanVay * 12;
        let TienLaiHangThang = TongKetSoTien * LaiXuatTienVay / 100  * KyHanVay ;
        let TongSoTienPhaiTra = SoTienPhaiTra + TienLaiHangThang * KyHanVay * 12

        $('#SoTienCoTheVay').html(addDotPrice(SoTienCoTheVay.toFixed(2)));
        $('#SoTienPhaiTra').html(addDotPrice(SoTienPhaiTra.toFixed(2)));
        $('#TienLaiHangThang').html(addDotPrice(TienLaiHangThang.toFixed(2)));
        $('#TongSoTienPhaiTra').html(addDotPrice(TongSoTienPhaiTra.toFixed(2)));
        $('#SoTienCoTheVayModal').modal('show');
    })

    // $("input[type=number").attr({
    //     "max": 10, // substitute your own
    //     "min": 2 // values (or variables) here
    // });


});