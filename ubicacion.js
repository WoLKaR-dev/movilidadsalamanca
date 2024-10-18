// Definimos las paradas directamente en un objeto de JavaScript
const paradas = {
    "Pº. Los Madroños, s/n": {
    "id": "pa-1",
    "coordenadas": { "lat": 40.4165, "lng": -3.70256 },
    "linea_7": ["7:35", "7:55", "8:15", "8:35", "8:55", "9:15", "9:40", "10:10", "10:35", "10:55", "11:15", "11:35","11:55", "12:15", "12:35", "12:55", "13:15", "13:35", "13:55", "14:15", "14:35", "14:55", "15:15", "15:35","15:55"]
    },
    "Pº. Estación, 31": { "id": "pa-2", "coordenadas": { "lat": 40.418, "lng": -3.705 } },
    "Pza. España, 7": { "id": "pa-3", "coordenadas": { "lat": 40.423, "lng": -3.715 } },
    "Pza. Del Empresario, s/n": { "id": "pa-4", "coordenadas": { "lat": 40.430, "lng": -3.720 } },  
    "Pza. Del Fronton": {"id":"pa-5" , "coordenadas": { "lat": 41.0079722, "lng": -5.648055555555555 } },
    /*
    "Avda. Lasalle, 4": {"id": "pa-8"},
    "Avda. Lasalle, 58": {"id": "pa-9"},
    "Avda. Lasalle, fren. 95": {"id": "pa-10"},
    "Avda. Lasalle, fren. 143": {"id": "pa-11"},
    "Avda. Lasalle, 152": {"id": "pa-12"},
    "Avda. Juan Pablo II, 12": {"id": "pa-13"},
    "Avda. Juan Pablo II, frente 46": {"id": "pa-14"},
    "Avda. Juan Pablo II, s/n": {"id": "pa-15"},
    "C/ Coria, s/n (Junto Iglesia)": {"id": "pa-16"},
    "Avda. Juan Pablo II, 2s/n": {"id": "pa-17"},
    "Avda. Juan Pablo II, 71": {"id": "pa-18"},
    "Pza. Tejares, 2": {"id": "pa-19"},
    "Avda. Lasalle, 179": {"id": "pa-20"},
    "Avda. Lasalle, 143": {"id": "pa-21"},
    "Avda. Lasalle, 95": {"id": "pa-22"},
    "Avda. Lasalle, 47": {"id": "pa-23"},
    "Avda. Lasalle, 1": {"id": "pa-24"},
    "Ctra. La Fregeneda, 15": {"id": "pa-25"},
    "Avda. Reyes de España, 23": {"id": "pa-26"},
    "C/ Gran Vía, 75": {"id": "pa-27"},
    "C/ Gran Vía, 25": {"id": "pa-28"},
    "Pº. Estación, 16": {"id": "pa-29"},
    "Pº. Estación, 78": {"id": "pa-30"},
    "Pº. Estación, 106": {"id": "pa-31"},
    "Pº. Estación, s/n": {"id": "pa-32"},
    "Avda. Mirat, 22": {"id": "pa-33"},
    "Pza. Gabriel y Galán, s/n": {"id": "pa-34"},
    "Pº. Carmelitas, 94": {"id": "pa-35"},
    "Pº. San Vicente, 106": {"id": "pa-36"},
    "Pº. Desengaño, s/n": {"id": "pa-37"},
    "Pº. Desengaño, 2s/n": {"id": "pa-38"},
    "Pº. San Vicente, 101": {"id": "pa-39"},
    "Pº. Carmelitas, 85": {"id": "pa-40"},
    "Avda. Mirat, 43": {"id": "pa-41"},
    "Avda. Mirat, 13": {"id": "pa-42"},
    "Ctra. Ledesma, 137": {"id": "pa-43"},
    "Ctra. Ledesma, 101": {"id": "pa-44"},
    "Ctra. Ledesma, 63": {"id": "pa-45"},
    "Ctra. Ledesma, fren. 52": {"id": "pa-46"},
    "C/ Valverdón, s/n": {"id": "pa-47"},
    "Avda. Villamayor, 1": {"id": "pa-48"},
    "Avda. Puente Sánchez Fabrés, s/n": {"id": "pa-49"},
    "Pza. España, s/n": {"id": "pa-50"},
    "Avda. Comuneros, fren. 35": {"id": "pa-51"},
    "Avda. Comuneros, 18": {"id": "pa-52"},
    "Avda. Comuneros, 68": {"id": "pa-53"},
    "C/ Colombia, 24": {"id": "pa-54"},
    "C/ Colombia, 42": {"id": "pa-55"},
    "C/ Jesús Arambarri, 107": {"id": "pa-56"},
    "Avda. Obispo Sancho Castilla, s/n": {"id": "pa-57"},
    "Ctra. Aldealengua, 43": {"id": "pa-58"},
    "C/ Colombia, 11": {"id": "pa-59"},
    "C/ Colombia, 19": {"id": "pa-60"},
    "Avda. Comuneros, 127": {"id": "pa-61"},
    "Avda. Comuneros, 81": {"id": "pa-62"},
    "Avda. Italia, 4": {"id": "pa-63"},
    "Avda. Italia, 46": {"id": "pa-64"},
    "Ctra. Ledesma, 12": {"id": "pa-65"},
    "Ctra. Ledesma, 52": {"id": "pa-66"},
    "Ctra. Ledesma, 84": {"id": "pa-67"},
    "Ctra. Ledesma, 140": {"id": "pa-68"},
    "Avda. Los Cedros, 43": {"id": "pa-69"},
    "Avda. Los Cedros, 25": {"id": "pa-70"},
    "Avda. Los Cedros, frente 6": {"id": "pa-71"},
    "Avda. Federico Anaya, 19": {"id": "pa-72"},
    "C/ María Auxiliadora, 71-85": {"id": "pa-73"},
    "C/ María Auxiliadora, 63": {"id": "pa-74"},
    "C/ María Auxiliadora, 1-11": {"id": "pa-75"},
    "C/ Joaquín Rodrigo, 38": {"id": "pa-77"},
    "C/ Maestro Serrano, s/n": {"id": "pa-78"},
    "C/ Hilario Goyenechea, 29": {"id": "pa-79"},
    "Avda. Juan de Austria, fren. 108": {"id": "pa-80"},
    "Avda. Juan de Austria, fren. 62": {"id": "pa-81"},
    "Avda. Juan de Austria, fren. 8": {"id": "pa-82"},
    "Avda. Carlos I, 105": {"id": "pa-83"},
    "Avda. Juan de Austria, 50": {"id": "pa-84"},
    "Avda. Juan de Austria, 108": {"id": "pa-85"},
    "C/ Hilario Goyenechea, 20": {"id": "pa-86"},
    "C/ Maestro Serrano, 2s/n": {"id": "pa-87"},
    "C/ Joaquín Rodrigo, 49": {"id": "pa-88"},
    "C/ Joaquín Rodrigo, fren. 36": {"id": "pa-89"},
    "C/ María Auxiliadora, 10": {"id": "pa-91"},
    "C/ María Auxiliadora, 48": {"id": "pa-92"},
    "C/ María Auxiliadora, 70": {"id": "pa-93"},
    "Avda. Federico Anaya, 24": {"id": "pa-94"},
    "Avda. Los Cedros, 2": {"id": "pa-95"},
    "Avda. Los Cedros, 18": {"id": "pa-96"},
    "Avda. Los Cedros, 40": {"id": "pa-97"},
    "Avda. Filiberto Villalobos, fren.129": {"id": "pa-98"},
    "Avda. De Los Maristas, s/n": {"id": "pa-99"},
    "Avda. De Los Maristas, s/n": {"id": "pa-100"},
    "Pº San Gregorio, s/n": {"id": "pa-101"},
    "Pº. Rector Esperabé, 12": {"id": "pa-102"},
    "Pº. Canalejas, 12": {"id": "pa-103"},
    "Pº. San Antonio, 40": {"id": "pa-104"},
    "Pº. Rollo, 4": {"id": "pa-105"},
    "Pº. Rollo, s/n Frente Parque Picasso": {"id": "pa-106"},
    "Pº. Rollo, 96": {"id": "pa-108"},
    "C/ Filipinas, s/n": {"id": "pa-109"},
    "C/ Jesús Arambarri, fren. 23": {"id": "pa-110"},
    "C/ Jesús Arambarri, 64": {"id": "pa-111"},
    "C/ Fuenteguinaldo, 2": {"id": "pa-112"},
    "C/ Fuenteguinaldo, 28": {"id": "pa-113"},
    "C/ Juan Manso, 36": {"id": "pa-114"},
    "C/ Jesús Arambarri, 95": {"id": "pa-115"},
    "C/ Jesús Arambarri, 73": {"id": "pa-116"},
    "C/ Jesús Arambarri, 45": {"id": "pa-117"},
    "C/ Jesús Arambarri, 23": {"id": "pa-118"},
    "C/ Filipinas, 29": {"id": "pa-119"},
    "Pº. Rollo, 99": {"id": "pa-120"},
    "Pº. Rollo, s/n Parque Picasso": {"id": "pa-122"},
    "Pº. Rollo, 5": {"id": "pa-123"},
    "Pº. San Antonio, 21": {"id": "pa-124"},
    "Pº. Rector Esperabé, s/n": {"id": "pa-125"},
    "Avda. Filiberto Villalobos, 2": {"id": "pa-126"},
    "Avda. Filiberto Villalobos, 46": {"id": "pa-127"},
    "Avda. Filiberto Villalobos, 76": {"id": "pa-128"},
    "Avda. La Merced, s/n": {"id": "pa-129"},
    "Gta. Ruta de la Plata, s/n": {"id": "pa-130"},
    "Pº. Doctor Torres de Villarroel, 63": {"id": "pa-131"},
    "Pº. Doctor Torres de Villarroel, 37": {"id": "pa-132"},
    "C/ Mayor de Chamberí, 46": {"id": "pa-133"},
    "C/ Elcano, fren. 12": {"id": "pa-134"},
    "C/ Mayor de Chamberí, 70": {"id": "pa-135"},
    "C/ Mayor de Chamberí, 109": {"id": "pa-136"},
    "C/ Mayor de Chamberí, frente 72": {"id": "pa-137"},
    "Av. Los Maristas, s/n frente Instituto": {"id": "pa-138"},
    "Pº. Doctor Torres de Villarroel, 2": {"id": "pa-139"},
    "Pº. Doctor Torres de Villarroel, 42": {"id": "pa-140"},
    "Pº. Doctor Torres de Villarroel, 72": {"id": "pa-141"},
    "Avda. de Salamanca, s/n": {"id": "pa-142"},
    "Pº. Progreso, s/n": {"id": "pa-143"},
    "Avda. Saavedra y Fajardo, 18": {"id": "pa-144"},
    "Avda. Carlos I, fren. 29": {"id": "pa-145"},
    "Avda. Carlos I, fren. 105": {"id": "pa-146"},
    "C/ Joaquín Rodrigo, 48": {"id": "pa-147"},
    "Avda. Carlos I, 29": {"id": "pa-148"},
    "Avda. Saavedra y Fajardo, 27": {"id": "pa-149"},
    "Pº. Progreso, 2s/n": {"id": "pa-150"},
    "Avda. Portugal, 105": {"id": "pa-151"},
    "Avda. Portugal, 65": {"id": "pa-152"},
    "Avda. Portugal, 11": {"id": "pa-153"},
    "Pº. Canalejas, 90": {"id": "pa-154"},
    "Pº. Canalejas, 152": {"id": "pa-155"},
    "Pº. Canalejas, 117": {"id": "pa-156"},
    "Pº. Canalejas, 159": {"id": "pa-157"},
    "Avda. Portugal, 12": {"id": "pa-158"},
    "Avda. Portugal, 66": {"id": "pa-159"},
    "Avda. Portugal, 112": {"id": "pa-160"},
    "C/mno. Las Aguas, s/n Bulevar": {"id": "pa-163"},
    "C/ Luis de Góngora, s/n": {"id": "pa-164"},
    "Avda. Portugal, 187": {"id": "pa-165"},
    "Avda. Portugal, 151": {"id": "pa-166"},
    "Pza. Madrid, 5": {"id": "pa-167"},
    "Avda. Alfonso IX de León, 4": {"id": "pa-168"},
    "Avda. Alfonso IX de León, 39": {"id": "pa-169"},
    "C/ Santiago Madrigal, s/n": {"id": "pa-170"},
    "C/ Santiago Madrigal, s/n (segundo)": {"id": "pa-171"},
    "C/ Lugo, s/n": {"id": "pa-172"},
    "Pza. Alto del Rollo, 7": {"id": "pa-173"},
    "C/ Jamaica, 10": {"id": "pa-174"},
    "Avda. Alfonso IX de León, fren. 34": {"id": "pa-175"},
    "Avda. Alfonso IX de León, fren. 8": {"id": "pa-176"},
    "Pza. Madrid, 10": {"id": "pa-177"},
    "Avda. Portugal, 152": {"id": "pa-178"},
    "Avda. Portugal, 182": {"id": "pa-179"},
    "C/ Peña de Francia, s/n": {"id": "pa-180"},
    "C/mno. Las Aguas, fren. 12": {"id": "pa-183"},
    "C/ San Gregorio, s/n": {"id": "pa-184"},
    "C/mno. Las Aguas, 12": {"id": "pa-185"},
    "C/ Arias Pinel, fren. 2": {"id": "pa-186"},
    "C/ Los Valles Mineros, 45": {"id": "pa-187"},
    "C/ Los Valles Mineros, 33": {"id": "pa-188"},
    "C/ Los Valles Mineros, s/n": {"id": "pa-189"},
    "C/ Emigdio de la Riva, 29": {"id": "pa-190"},
    "C/ Emigdio de la Riva, 3": {"id": "pa-191"},
    "Avda. Portugal, 113": {"id": "pa-192"},
    "C/ Castroverde, 14": {"id": "pa-193"},
    "Pº. Cuatro Calzadas, 56": {"id": "pa-194"},
    "Pº. Cuatro Calzadas, s/n": {"id": "pa-195"},
    "C/ Comisión Europea, s/n": {"id": "pa-196"},
    "Pº. Cuatro Calzadas, fren. 60": {"id": "pa-197"},
    "C/ Castroverde, fren. 14": {"id": "pa-198"},
    "C/mno. Miranda, 55": {"id": "pa-199"},
    "C/mno. Miranda, 5": {"id": "pa-200"},
    "Avda. Portugal, 126": {"id": "pa-201"},
    "C/ Emigdio de la Riva, 6": {"id": "pa-202"},
    "C/ Emigdio de la Riva, fren. 29": {"id": "pa-203"},
    "C/ Los Valles Mineros, 2": {"id": "pa-204"},
    "C/ Los Valles Mineros, s/n (segundo)": {"id": "pa-205"},
    "C/ Alcalde Navarro González, 85": {"id": "pa-206"},
    "C/ Mayor de Chamberí, 106": {"id": "pa-207"},
    "C/ Joaquín Rodrigo, s/n": {"id": "pa-208"},
    "C/ Francisco Maldonado, fren. 17": {"id": "pa-209"},
    "C/ Antonio Llorente Maldonado, s/n": {"id": "pa-210"},
    "C/mno. Las Aguas, 44": {"id": "pa-211"},
    "Avda. Aldehuela de los Guzmanes, s/n": {"id": "pa-212"},
    "C/ Alonso del Castillo, fren. 1": {"id": "pa-213"},
    "C/ Francisco Maldonado, 17": {"id": "pa-214"},
    "C/ Jamaica, s/n": {"id": "pa-215"},
    "Avda. Puente Sánchez Fabrés, 2s/n": {"id": "pa-216"},
    "C/ Almeida, fren. 15": {"id": "pa-218"},
    "C/ Guarda, fren. 42": {"id": "pa-219"},
    "C/ Ramón de Mesonero Romanos, 43": {"id": "pa-220"},
    "C/ Los Valles Mineros, s/n (tercero)": {"id": "pa-221"},
    "C/ Gran Vía, 38": {"id": "pa-222"},
    "C/ Mayor de Chamberí, s/n": {"id": "pa-223"},
    "Pº. Canalejas, 1": {"id": "pa-224"},
    "Avda. Padre Ignacio Ellacuría, fren. 45": {"id": "pa-225"},
    "Avda. Padre Ignacio Ellacuría, 45": {"id": "pa-227"},
    "C/ Arias Pinel, 31": {"id": "pa-228"},
    "C/mno. Las Aguas, 75": {"id": "pa-229"},
    "C/ Alonso del Castillo, s/n": {"id": "pa-230"},
    "C/ Río Mondego, fren. 61": {"id": "pa-231"},
    "C/ Emilio Salcedo, 15": {"id": "pa-232"},
    "C/ La Beira, 12": {"id": "pa-233"},
    "C/ Guarda, 42": {"id": "pa-234"},
    "Avda. Padre Ignacio Ellacuría, s/n": {"id": "pa-235"},
    "Avda. Padre Ignacio Ellacuría, s/n (segundo)": {"id": "pa-236"},
    "C/ Los Marineros, s/n": {"id": "pa-237"},
    "C/ Don Quijote, 78": {"id": "pa-238"},
    "C/ Bachiller Sansón Carrasco, s/n": {"id": "pa-239"},
    "C/ Astorga, s/n": {"id": "pa-240"},
    "Gta. Ruta de la Plata, 2s/n": {"id": "pa-242"},
    "C/ Pontevedra, fren. 22": {"id": "pa-243"},
    "Pº. Canalejas, 194": {"id": "pa-244"},
    "Pº. Canalejas, 67": {"id": "pa-245"},
    "C/ Pontevedra, 22": {"id": "pa-246"},
    "C/ Astorga, s/n (segundo)": {"id": "pa-248"},
    "C/ Bachiller Sansón Carrasco, s/n (segundo)": {"id": "pa-249"},
    "C/ Don Quijote, fren. 72": {"id": "pa-250"},
    "C/ Antonio Ponz, s/n": {"id": "pa-251"},
    "C/ Antonio Llorente Maldonado, 21": {"id": "pa-252"},
    "C/ George Borrow, s/n": {"id": "pa-253"},
    "Avda. Doctor Ramos del Manzano, s/n": {"id": "pa-254"},
    "C/ Peña de Francia, 2s/n": {"id": "pa-255"},
    "C/ Peña de Francia, 1": {"id": "pa-256"},
    "Avda. Villamayor, 73": {"id": "pa-257"},
    "Avda. Villamayor, 31": {"id": "pa-258"},
    "Avda. Villamayor, 28": {"id": "pa-259"},
    "Avda. Villamayor, 64": {"id": "pa-260"},
    "C/ Peña de Francia, s/n (segundo)": {"id": "pa-261"},
    "Avda. Doctor Ramos del Manzano, s/n (segundo)": {"id": "pa-262"},
    "C/ George Borrow, s/n (segundo)": {"id": "pa-263"},
    "C/ Antonio Llorente Maldonado, fren. 21": {"id": "pa-264"},
    "C/mno. Las Aguas, s/n": {"id": "pa-265"},
    "Pza. San Julían, 6": {"id": "pa-266"},
    "Avda. Los Cipreses, 81": {"id": "pa-267"},
    "Avda. Los Cipreses, s/n": {"id": "pa-268"},
    "Avda. Los Cipreses, 84": {"id": "pa-269"},
    "Pº. Estación, 119": {"id": "pa-270"},
    "Pº. Estación, 87": {"id": "pa-271"},
    "Pº. Estación, 61": {"id": "pa-272"},
    "Avda. Salamanca, s/n": {"id": "pa-273"},
    "Avda. San Agustín, 39": {"id": "pa-274"},
    "Pº. Carmelitas, 28": {"id": "pa-275"},
    "Avda. San Agustín, 44": {"id": "pa-276"},
    "Pº. Lunes de Aguas, s/n": {"id": "pa-277"},
    "C/ La Beira, 50": {"id": "pa-278"},
    "Pº. Lunes de Aguas, s/n (segundo)": {"id": "pa-279"},
    "C/ Pinar de Valsaín, s/n": {"id": "pa-280"},
    "C/ Tierra de Campos, s/n": {"id": "pa-281"},
    "C/ Hoyamoros, s/n": {"id": "pa-282"},
    "C/ Hoyamoros, fren. 55": {"id": "pa-283"},
    "Ctra. Carbajosa, s/n": {"id": "pa-284"},
    "Ctra. Carbajosa, s/n (segundo)": {"id": "pa-285"},
    "C/ Hoyamoros, 55": {"id": "pa-286"},
    "C/ Hoyamoros, s/n (segundo)": {"id": "pa-287"},
    "C/ Tierra de Campos, s/n (segundo)": {"id": "pa-288"},
    "Pº Rio Tormes, s/n": {"id": "pa-289"},
    "Pº Rio Tormes, s/n (segundo)": {"id": "pa-290"},
    "Ctra. Ledesma, 172": {"id": "pa-291"},
    "Avda. Los Cipreses, s/n (segundo)": {"id": "pa-292"},
    "Avda. Federico Anaya, 65": {"id": "pa-293"},
    "Av. Obispo Sancho de Castilla, s/n": {"id": "pa-294"},
    "C/ Luis Sala Balust, 34": {"id": "pa-295"},
    "C/ Sequeros, s/n": {"id": "pa-296"},
    "C/ Alcalde Cruz Hernández, s/n": {"id": "pa-297"},
    "C/ Alcalde Cruz Hernández, 1": {"id": "pa-298"},
    "C/ Alcalde Fernández de Troconiz, 26": {"id": "pa-299"},
    "C/ Sequeros, frente 6": {"id": "pa-300"},
    "C/ Gran Vía, 45": {"id": "pa-301"},
    "C/ Laguna de Villafafíla, s/n": {"id": "pa-302"},
    "C/ Laguna de Villafafíla, s/n (segundo)": {"id": "pa-303"},
    "Pº. Cuatro Calzadas, fren. 78": {"id": "pa-304"},
    "C/ Antonio Montesinos, s/n": {"id": "pa-305"},
    "C/ Ponferrada, s/n": {"id": "pa-306"},
    "Avda. de Salamanca, 2s/n": {"id": "pa-307"},
    "Avda. de Salamanca, s/n (segundo)": {"id": "pa-308"},
    "C/ Los Toreses, 17": {"id": "pa-309"},
    "C/ Santiago Madrigal, 2s/n": {"id": "pa-310"},
    "C/ Santiago Madrigal, 3s/n (segundo)": {"id": "pa-311"},
    "C/ Ricardo Pérez Fernández, s/n": {"id": "pa-312"},
    "C/ Mariano Ares y Sanz, 5": {"id": "pa-313"},
    "C/ Mariano Ares y Sanz, fren. 9": {"id": "pa-314"},
    "C/ Manuel Ramos Andrade, frente 101": {"id": "pa-315"},
    "C/ Manuel Ramos Andrade, 101": {"id": "pa-316"},
    "C/ Los Valles Mineros, 2s/n (segundo)": {"id": "pa-317"},
    "C/ Alcalde Navarro González, 5": {"id": "pa-318"},
    "C/ La Beira, 68": {"id": "pa-320"},
    "C/ González Bustillo, 39": {"id": "pa-321"},
    "C/ González Bustillo, s/n": {"id": "pa-322"},
    "Avda. Portugal, 268": {"id": "pa-323"},
    "Avda. Alfonso XI, s/n": {"id": "pa-324"},
    "C/ La Alberca, s/n": {"id": "pa-325"},
    "Eco-Raya": {"id": "pa-326"},
    "Feria Monografica": {"id": "pa-327"},
    "Av. Luis Camoens, s/n": {"id": "pa-328"},
    "C/ Juan Ruiz Peña, 8": {"id": "pa-329"},
    "Ctra. Vía Helmantica, s/n": {"id": "pa-330"},
    "C/ Maestro Jiménez, s/n": {"id": "pa-331"},
    "C/ Maestro Jiménez, 10": {"id": "pa-332"},
    "C/ Gran Vía, 72": {"id": "pa-333"},
    "Pº de San Vicente, s/n (centro)": {"id": "pa-334"},
    "Pº de San Vicente, s/n (Río)": {"id": "pa-335"},
    "Pº Transición Española, s/n Hospital": {"id": "pa-336"},
    "Pº Transición Española, s/n (segundo)": {"id": "pa-337"},
    "Pº Transición Española, s/n (tercero)": {"id": "pa-338"},
    "Pº Transición Española, s/n (cuarto)": {"id": "pa-339"},
    "Calle de Francisco Montejo, s/n": {"id": "pa-340"},
    "Calle de Francisco Montejo, 12": {"id": "pa-341"},
    "C/ Arquitecto Repullés y Vargas, s/n": {"id": "pa-342"},
    "C/ Maragatería, frente 14": {"id": "pa-343"},
    "C/ Licenciado Vidriera, s/n (junto residencia)": {"id": "pa-344"},
    "C/ Licenciado Vidriera, s/n (segundo)": {"id": "pa-345"},
    "C/ Afiladores, s/n (Guardería)": {"id": "pa-346"},
    "C/ Valverdón, 8": {"id": "pa-347"},
    "C/ Afiladores, s/n (frente guardería)": {"id": "pa-348"},
    "C/ Licenciado Vidriera, s/n (tercero)": {"id": "pa-349"},
    "C/ Licenciado Vidriera, s/n (frente residencia)": {"id": "pa-350"},
    "Paseo de Los Olivos, 2": {"id": "pa-351"},
    "C/ Romero, 2": {"id": "pa-352"},
    "Avda. Vicente del Bosque, 52": {"id": "pa-353"},
    "Avda. Vicente del Bosque, frente 52": {"id": "pa-354"},
    "C/ Romero, 1": {"id": "pa-355"},
    "Pº Tomas y Valiente, s/n": {"id": "pa-356"},
    "C/ Abraham Zacut, s/n": {"id": "pa-357"},
    "C/ Mayor de Chamberí, 148": {"id": "pa-358"},
    "C/ Cordel de Merinas de Vistahermosa, 181": {"id": "pa-359"},
    "C/ Mayor de Chamberí, frente 148": {"id": "pa-360"},
    "C/ Abraham Zacut, s/n (junto Policía Local)": {"id": "pa-361"},
    "Av. Los Cipreses, 48": {"id": "pa-362"},
    "Av. Los Cipreses, 63": {"id": "pa-363"}*/
};

document.getElementById('botonUbicacion').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            const nearestStop = findNearestStop(userLat, userLng, paradas);

            // Verificamos si se encontró una parada
            if (nearestStop) {
                var dataAVisualizar = nearestStop.id
                var nombreAVisualizar = nearestStop.name
                visualizarData(dataAVisualizar, nombreAVisualizar)
            } else {
                document.getElementById('locationOutput').textContent = "No se encontraron paradas cercanas.";
            }
        }, showError);
    } else {
        document.getElementById('locationOutput').textContent = "La geolocalización no es soportada por este navegador.";
    }
});

// Función para encontrar la parada más cercana
function findNearestStop(userLat, userLng, paradas) {
    let nearest = null;
    let minDistance = Infinity;

    for (const [parada, data] of Object.entries(paradas)) {
        const { lat, lng } = data.coordenadas;
        const distance = calculateDistance(userLat, userLng, lat, lng);

        if (distance < minDistance) {
            minDistance = distance;
            nearest = { name: parada, id: data.id, distance };
        }
    }

    return nearest;
}

// Función para calcular la distancia usando la fórmula Haversine
function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = degreesToRadians(lat2 - lat1);
    const dLng = degreesToRadians(lng2 - lng1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distancia en km
    return distance;
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('locationOutput').textContent = "Usuario denegó la solicitud de Geolocalización.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('locationOutput').textContent = "La información de ubicación no está disponible.";
            break;
        case error.TIMEOUT:
            document.getElementById('locationOutput').textContent = "La solicitud para obtener la ubicación ha caducado.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('locationOutput').textContent = "Se ha producido un error desconocido.";
            break;
    }
}

function visualizarData(id, nombre){
    document.getElementById("cargaParadas").style.display = "block"
    document.getElementById("noUbi").style.display = "none";
    document.getElementById("nombreParada").textContent = nombre;
}