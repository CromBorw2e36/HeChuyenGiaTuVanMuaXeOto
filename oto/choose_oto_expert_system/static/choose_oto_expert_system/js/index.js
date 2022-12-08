$(document).ready(function() {
    $("#submit_form").on('click', function(e) {
        let car_category = $('#car_category').find(":selected").val();
        let car_engine = $('#car_engine').find(":selected").val();
        if (car_category == 'null' && car_engine == 'null') {
            e.preventDefault();
            $('#exampleModal').modal('show')
        }
    });

    let current_page = 0;

    function LoadCars(current_page) {
        $.ajax({
            url: "/list_cars",
            success: function(data) {
                //                console.log(data)
                const list_cars_items = $('#list_cars_items');
                let list_cars = "";
                $.each(data, function(index, element) {
                    if (current_page <= (Math.ceil(data.length / 6) + 2) &&
                        current_page >= 0) {
                        if (current_page <= index && index < (current_page + 6)) {
                            list_cars += `
                            <div class="col-10 col-sm-4 col-md-4">
                                <div class="card mb-3" style="width: 18rem; height: 26rem">
                                    <img src="../static/choose_oto_expert_system/images/cars/${element.danh_sach_hinh.split(',')[0]}" class="card-img-top" alt="${element.danh_sach_hinh.split(',')[0]}">
                                    <div class="card-body">
                                    <h5 class="card-title">${element.ten_xe}</h5>
                                    <p class="card-text limit-text">${element.mo_ta_chi_tiet != 'none' ? element.mo_ta_chi_tiet : 'Hãng xe top đầu thế giới năm 2019'}</p>
                                    <div class="d-flex align-items-center justify-content-center">
                                        <button class="cta">
                                            <span><a href="/elements.html?tenxe=${element.tenxe}" class="">Xem thêm</a></span>
                                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                                <path d="M1,5 L11,5"></path>
                                                <polyline points="8 1 12 5 8 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            `;
                        }
                    } else {
                        if (current_page >= 0)
                            current_page--;
                    }
                });
                list_cars_items.html(list_cars);
            }
        });
    }

    LoadCars(0);

    let pagination_prev = $('#pagination_prev');
    let pagination_next = $('#pagination_next');
    pagination_next.on('click', function(e) {
        e.preventDefault();
        current_page++;
        LoadCars(current_page);
        console.log('pagination_next ' + current_page);

    })

    pagination_prev.on('click', function(e) {
        e.preventDefault();
        if (current_page > 0) {
            current_page--;
            LoadCars(current_page);
            console.log('pagination_prev ' + current_page);
        } else {
            current_page = 0;
        }

    })

    $(document).keypress(function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            let car_category = $('#car_category').find(":selected").val();
            let car_engine = $('#car_engine').find(":selected").val();
            if (car_category == 'null' && car_engine == 'null') {
                e.preventDefault();
                $('#exampleModal').modal('show')
            }
        }
    });



});