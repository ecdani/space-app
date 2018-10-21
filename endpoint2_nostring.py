from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
from flask import jsonify
import simplejson as json
import serial
import time
import sys
from base import MiBand2
from constants import ALERT_TYPES
import thread
import socket
from StringIO import StringIO
import csv
import string
  
TCP_IP = 'localhost'
TCP_PORT = 8000
BUFFER_SIZE = 1024  # Normally 1024, but we want fast response

app = Flask(__name__)
api = Api(app)


def l(x):
    print x
    global pulsaciones
    pulsaciones=x


#piqueta
#       velocidad de viento
Velocidad_viento=0
class VelVi(Resource):
	def get(self):
                return {'VelocidadVientor': Velocidad_viento}
api.add_resource(VelVi, '/velvi') # acceso a velocidad del viento

#       escala ritcher""
escalaRitcher=0
class Rit(Resource):
	def get(self):
                return {'escsalaRitcher': escalaRitcher}
api.add_resource(Rit, '/rit')
#       humedad suelo
humedad_Suelo=0
class HumedadSuelo(Resource):
	def get(self):
                return {'humedadSuelo' : humedad_Suelo}
api.add_resource(HumedadSuelo, '/humedadsuelo')
#       humedad aire
humedad_Aire=0
class HumedadAire(Resource):
	def get(self):
                return {'humedadSuelo' : humedad_Aire}
api.add_resource(HumedadAire, '/humedadaire')
#       temperatura
temperatura=0
class TempPiqu(Resource):
	def get(self):
                return {'temperatura': temperatura}
api.add_resource(TempPiqu, '/temp')
#       sensacion termica
sensTermica=0
class SensTermic(Resource):
	def get(self):
                return {'sensacionTermica': sensTermica}
api.add_resource(SensTermic, '/senstermic')


#guante
#       presion del traje
presTraje=0
class PresTraje(Resource):
	def get(self):
                return { 'presTraje' : presTraje}
api.add_resource(PresTraje, '/prestraje')
#       temperatura corporal
tempCorp=0
class TempCorp(Resource):
	def get(self):
                return {'tempCorporal': tempCorp}
api.add_resource(TempCorp, '/tempcorporal')
#       plutonimetro
geiger=0
class Geiger(Resource):
	def get(self):
                return {'geiger': geiger}
api.add_resource(Geiger, '/geiger')
#       Luz
luz=0
class Luz(Resource):
	def get(self):
                return {'Luz': luz}
api.add_resource(Luz, '/luz')
#       selector interfaz
selGUI=0
class SelGUI(Resource):
	def get(self):
                return {'selGUI': selGUI}
api.add_resource(SelGUI, '/selgui')
#       LLamador
llamador=0
class LLamador(Resource):
	def get(self):
                return {'Llamada': llamador}
api.add_resource(LLamador, '/llamada')

#extra
#       brujula
brujula=0
class Brujula(Resource):
	def get(self):
                return {'brujula': brujula}
api.add_resource(Brujula, '/brujula')
#       pulsaciones
pulsaciones=0
class Pulsaciones(Resource):
	def get(self):
                return {'pulsaciones': pulsaciones}
api.add_resource(Pulsaciones, '/pulsaciones')


def threadPulsaciones(a):
    print "entrado a pulsaciones"
    MAC = 'F5:CF:1D:4D:71:B7'
    band = MiBand2(MAC, debug=True)
    band.setSecurityLevel(level="medium")
    band.authenticate()
    print "inicializado"
    band.start_heart_rate_realtime(heart_measure_callback=l)
    band.disconnect()

def threadBrujula(a):
    print "entra a brujula"
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    s.bind(('', TCP_PORT))
    s.listen(1)
    print "socket creado , a la espera de un conector"
    while 1:
        conn, addr = s.accept()
        print 'Connection address:', addr
        data = conn.recv(BUFFER_SIZE)
        print "received data:", data
        global brujula
        brujula=data
        
    conn.close()

def get_storeData(a):
    while True:
	ser = serial.Serial('/dev/ttyUSB0',115200)
	time.sleep(1)
	#print(bufsize)
	buffer = ser.readline()
	print (buffer)
	list=string.split(buffer,',')
	time.sleep(0.1)
        try:
            global selGUI
            selGUI=list[0]
            
            global luz
            luz=float(list[1])
            
            global tempCorp
            tempCorp=float(list[2])
            
            global presTraje
            presTraje=float(list[3])
            
            global geiger
            geiger=int(list[4])
            
            global Velocidad_viento
            Velocidad_viento=int(list[5])
            
            global humedad_Suelo
            humedad_Suelo=int(list[6])
            
            global escalaRitcher
            escalaRitcher=float(list[7])
            
            global humedad_Aire
            humedad_Aire=int(list[8])
            
            global temperatura
            temperatura=float(list[9])
            
            global sensTermica
            sensTermica=float(list[10])
            
            global llamador
            llamador=float(list[11])
	except:
            pass
	ser.close()
	
#// Serial.print("Menu  Luz Temp  Press Plut  Wind  Gr.Hum Richt A.hum A.Temp T.Sens\n");
if __name__ == '__main__':
    print "arranca las pulsaciones"
    thread.start_new_thread(threadPulsaciones,(0,))
    print 'arranca la brujula'
    thread.start_new_thread(threadBrujula,(0,))
    print 'lector arduino'
    thread.start_new_thread(get_storeData,(0,))
    print "arranca host endpoints"
    app.run(host= '0.0.0.0', port='3007')
    
    







