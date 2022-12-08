# from pyswip import Prolog
#
# prolog = Prolog()
#
# prolog.consult("simple.pl")
#
# print(bool(list(prolog.query("faster(cat, dog)"))))

from pyswip import Prolog, registerForeign

prolog = Prolog()

prolog.consult('oto.pl')

# result = prolog.query("furniture(X, room('bedroom'), feng_shui('metal'))")
#
# print(  list(result)[0]['X'])

# result_2 = prolog.query("place(X, regions('mien_trung'), activities('kham_pha'), details('di_chuyen_bang_thuyen'))")
result_2 = prolog.query("vehicle_line(X,manufacturer('aston-martin'),car_category('sieu-xe-the-thao'),car_engine('5_2_v12')).")

print(list(result_2)[0]["X"])