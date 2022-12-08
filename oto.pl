% manufacturer  -> manufacturer
% car category  -> car_category
% car engine    -> car_engine
% vehicle line  -> vehicle_line

% Aston martin

vehicle_line('DBS-2021', manufacturer('aston-martin'), car_category('sieu-xe-the-thao'),car_engine('5_2_v12')).
vehicle_line('DBX-2021', manufacturer('aston-martin'), car_category('sieu-xe-the-thao'),car_engine('4_0_V8')).
vehicle_line('V8-Vantage-2021', manufacturer('aston-martin'), car_category('sieu-xe-the-thao'),car_engine('4_0_twin_turbo_V8')).

vehicle_line('DBS_2021', manufacturer('aston-martin'), car_engine('5_2_v12')).
vehicle_line('DBX-2021', manufacturer('aston-martin'), car_engine('4_0_v8')).
vehicle_line('V8-Vantage-2021', manufacturer('aston-martin'), car_engine('4_0_twin_turbo_v8')).

%Audi

vehicle_line('A4-2021',manufacturer('audi'),car_category('xe-sang-co-nho'),car_engine('tfsi_2_0_mild_hybrid_12v')).
vehicle_line('Q2-2021',manufacturer('audi'),car_category('xe-sang-co-nho'),car_engine('tfsi_1_4_cylinder_on_demand')).
vehicle_line('A6-2021',manufacturer('audi'),car_category('xe-sang-co-trung'),car_engine('tfsi_2_0_mild_hybrid_12v')).
vehicle_line('A7-2021',manufacturer('audi'),car_category('xe-sang-co-trung'),car_engine('tfsi_3_0_mild_hybrid_48v')).
vehicle_line('Q7-2021',manufacturer('audi'),car_category('xe-sang-co-trung'),car_engine('tfsi_2_0')).
vehicle_line('Q8-2021',manufacturer('audi'),car_category('xe-sang-co-lon'),car_engine('tfsi_3_0_mild_hybrid_48v')).

vehicle_line('A4-2021',manufacturer('audi'),car_engine('tfsi_2_0_mild_hybrid_12v')).
vehicle_line('Q2-2021',manufacturer('audi'),car_engine('tfsi_1_4_cylinder_on_demand')).
vehicle_line('A6-2021',manufacturer('audi'),car_engine('tfsi_2_0_mild_hybrid_12v')).
vehicle_line('A7-2021',manufacturer('audi'),car_engine('tfsi_3_0_mild_hybrid_48v')).
vehicle_line('Q7-2021',manufacturer('audi'),car_engine('tfsi_2_0')).
vehicle_line('Q8-2021',manufacturer('audi'),car_engine('tfsi_3_0_mild_hybrid_48v')).


vehicle_line('A4-2021_Q2-2021',manufacturer('audi'),car_category('xe-sang-co-nho')).
vehicle_line('A6-2021_A7-2021_Q7-2021',manufacturer('audi'),car_category('xe-sang-co-trung')).
vehicle_line('Q8-2021',manufacturer('audi'),car_category('xe-sang-co-lon')).

vehicle_line('Q3-2021',manufacturer('audi'),car_engine('tfsi_1_4')).
vehicle_line('Q5-2021',manufacturer('audi'),car_engine('45_tfsi_2_0')).

% Audi
vehicle_line('series-2022', manufacturer('ford'),car_engine('2_0_i4_tdci_truc_cam_kep')).
vehicle_line('ecosport-2021', manufacturer('ford'),car_engine('3_xi_lanh_thang_hang_duratec_ti_vct')).
vehicle_line('ecosport-2021', manufacturer('ford'),car_engine('3_xi_lanh_thang_hang_ecoboost')).
vehicle_line('everest-2022', manufacturer('ford'),car_engine('bi_turbo_diesel_2_0l_i4_tdci')).
vehicle_line('territory-2022', manufacturer('ford'),car_engine('ecoboost')).
vehicle_line('explorer-2022', manufacturer('ford'),car_engine('ecoboost_i4')).
vehicle_line('ranger-2022', manufacturer('ford'),car_engine('i4_tdci_bi_turbo')).

vehicle_line('ranger-2022', manufacturer('ford'),car_category('ban-tai-co-trung')).
vehicle_line('everest-2022', manufacturer('ford'),car_category('xe-co-trung-hang-d')).
vehicle_line('explorer-2022', manufacturer('ford'),car_category('xe-co-trung-hang-e')).
vehicle_line('territory-2022', manufacturer('ford'),car_category('xe-co-vua-hang-c')).
vehicle_line('ecosport-2021', manufacturer('ford'),car_category('xe-co-nho-hang-b')).

vehicle_line('ranger-2022', manufacturer('ford'),car_category('ban-tai-co-trung'),car_engine('2_0_i4_tdci_truc_cam_kep')).
vehicle_line('ranger-2022', manufacturer('ford'),car_category('ban-tai-co-trung'),car_engine('i4_tdci_bi_turbo')).
vehicle_line('everest-2022', manufacturer('ford'),car_category('xe-co-trung-hang-d'),car_engine('bi_turbo_diesel_2_0l_i4_tdci')).
vehicle_line('everest-2022', manufacturer('ford'),car_category('xe-co-trung-hang-d'),car_engine('single_turbo_diesel_2_0l_i4_tdci')).
vehicle_line('explorer-2022', manufacturer('ford'),car_category('xe-co-trung-hang-e'),car_engine('ecoboost_i4')).
vehicle_line('territory-2022', manufacturer('ford'),car_category('xe-co-vua-hang-c'),car_engine('ecoboost')).
vehicle_line('ecosport-2021', manufacturer('ford'),car_category('xe-co-nho-hang-b'),car_engine('3_xi_lanh_thang_hang_duratec_ti_vct')).
vehicle_line('ecosport-2021', manufacturer('ford'),car_category('xe-co-nho-hang-b'),car_engine('3_xi_lanh_thang_hang_ecoboost')).

% Honda

vehicle_line('accord-2022', manufacturer('honda'), car_category('xe-co-vua-hang-d')).
vehicle_line('civic-2022', manufacturer('honda'), car_category('xe-co-vua-hang-c')).
vehicle_line('brio-2021', manufacturer('honda'), car_category('xe-co-nho-hang-a')).
vehicle_line('city-2021', manufacturer('honda'), car_category('xe-co-nho-hang-b')).

vehicle_line('accord-2022', manufacturer('honda'), car_category('xe-co-vua-hang-d'), car_engine('1_5_vtec_turbo')).
vehicle_line('civic-2022', manufacturer('honda'), car_category('xe-co-vua-hang-c'), car_engine('1_5_vtec_turbo')).
vehicle_line('cr-v-2021', manufacturer('honda'), car_category('xe-co-vua-hang-c'), car_engine('vtec_1_5_turbo_i4')).
vehicle_line('brio-2021', manufacturer('honda'), car_category('xe-co-nho-hang-a'), car_engine('1_2_i_vtec')).
vehicle_line('city-2021', manufacturer('honda'), car_category('xe-co-nho-hang-b'), car_engine('1_5_i_vtec')).
vehicle_line('hr-v-2022', manufacturer('honda'), car_category('xe-co-nho-hang-b'), car_engine('1_5_turbo')).

vehicle_line('brio-2021', manufacturer('honda'), car_engine('1_2_i_vtec')).
vehicle_line('city-2021', manufacturer('honda'), car_engine('1_5_i_vtec')).
vehicle_line('hr-v-2022', manufacturer('honda'), car_engine('1_5_turbo')).
vehicle_line('accord-2022', manufacturer('honda'), car_engine('1_5_vtec_turbo')).
vehicle_line('civic-2022', manufacturer('honda'), car_engine('1_5_vtec_turbo')).
vehicle_line('cr-v-2021', manufacturer('honda'), car_engine('vtec_1_5_turbo_i4')).

% Huyndai

vehicle_line('elantra-2022', manufacturer('huyndai'), car_engine('i4')).
vehicle_line('santa-fe-2021', manufacturer('huyndai'), car_engine('i4_2_2')).
vehicle_line('tucson-2022', manufacturer('huyndai'), car_engine('i4_smart_stream')).
vehicle_line('elantra-2022', manufacturer('huyndai'), car_engine('i4_turbo')).
vehicle_line('tucson-2022', manufacturer('huyndai'), car_engine('i4_turbo_smartstream')).
vehicle_line('stargazer-2022', manufacturer('huyndai'), car_engine('smartstream_g_1_5')).
vehicle_line('e-pace-2021', manufacturer('huyndai'), car_engine('2_0_i4_tang_ap_igenium')).
vehicle_line('wrangler-2022', manufacturer('huyndai'), car_engine('2_0_turbo')).


vehicle_line('i10-2021', manufacturer('huyndai'), car_category('xe-co-nho-hang-a')).
vehicle_line('accent-2021', manufacturer('huyndai'), car_category('xe-co-nho-hang-b')).
vehicle_line('d-max-2021', manufacturer('huyndai'), car_category('xe-ban-tai-co-trung')).
vehicle_line('mu-x-2022', manufacturer('huyndai'), car_category('xe-co-trung-hang-d')).
vehicle_line('f-type-2021', manufacturer('huyndai'), car_category('sieu-xe-the-thao')).
vehicle_line('e-pace-2021', manufacturer('huyndai'), car_category('xe-sang-co-nho')).
vehicle_line('f-pace-2021', manufacturer('huyndai'), car_category('xe-sang-co-nho')).


vehicle_line('elantra-2022', manufacturer('huyndai'), car_category('xe-co-vua-hang-c'), car_engine('i4')).
vehicle_line('i10-2021', manufacturer('huyndai'), car_category('xe-co-nho-hang-a'), car_engine('i4')).
vehicle_line('accent-2021', manufacturer('huyndai'), car_category('xe-co-nho-hang-b'), car_engine('i4')).
vehicle_line('santa-fe-2021', manufacturer('huyndai'), car_category('xe-co-trung-hang-d'), car_engine('i4_2_2')).
vehicle_line('tucson-2022', manufacturer('huyndai'), car_category('xe-co-vua-hang-c'), car_engine('i4_smart_stream')).
vehicle_line('elantra-2022', manufacturer('huyndai'), car_category('xe-co-vua-hang-c'), car_engine('i4_turbo')).
vehicle_line('tucson-2022', manufacturer('huyndai'), car_category('xe-co-vua-hang-c'), car_engine('i4_turbo_smartstream')).
vehicle_line('creta-2022', manufacturer('huyndai'), car_category('xe-co-nho-hang-b'), car_engine('smartstream_g_1_5')).
vehicle_line('stargazer-2022', manufacturer('huyndai'), car_category('mpv-co-nho'), car_engine('smartstream_g_1_5')).
vehicle_line('e-pace-2021', manufacturer('huyndai'), car_category('xe-sang-co-nho'), car_engine('2_0_i4_tang_ap_igenium')).
vehicle_line('f-pace-2021', manufacturer('huyndai'), car_category('xe-sang-co-nho'), car_engine('2_0_i4_tang_ap_igenium')).


