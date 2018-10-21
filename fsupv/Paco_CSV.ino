#include <VirtualWire.h>

const int receive_pin = 11;

uint8_t viento;
uint8_t richter;
uint8_t epicentro;
uint8_t temp_aire;
uint8_t humedad_aire;
uint8_t humedad_suelo;



void setup() {
  Serial.begin(115200);
  vw_set_rx_pin(receive_pin);
  vw_set_ptt_inverted(true); // Required for DR3100
  vw_setup(2000);  // Bits per sec
  vw_rx_start();       // Start the receiver PLL running
  delay(2000);


}

void loop() {
  
  
  uint8_t buf[VW_MAX_MESSAGE_LEN];
  uint8_t buflen = VW_MAX_MESSAGE_LEN;

  if (vw_get_message(buf, &buflen)) // Non-blocking
    {
  int i;
  viento = buf[0];
  richter = buf[1];
  epicentro = buf[2];
  temp_aire = buf[3];
  humedad_aire = buf[4];
  humedad_suelo = buf[5];
    }

//  root["Select"] = "Menu"; 
//  root["Sens1"] = "Luz"; A5
//  root["Sens2"] = "Temperatura"; A1
//  root["Sens3"] = "Pressure"; A0
//  root["Sens4"] = "Plutonimetro"; D2
//  root["Sens_ext_1"] = "viento";  
//  root["Sens_ext_2"] = "richter";
//  root["Sens_ext_3"] = "epicentro";
//  root["Sens_ext_4"] = "temp_aire";
//  root["Sens_ext_5"] = "humedad_aire";
//  root["Sens_ext_6"] = "humedad_suelo";
 // Serial.print("Menu  Luz Temp  Press Plut  Wind  Gr.Hum Richt A.hum A.Temp T.Sens, Buttton\n");
  Serial.print(selector());
  Serial.print(",  ");
  Serial.print((float)analogRead(A5)/1023*100);
  Serial.print(",  "); 
  Serial.print(0.085*(float)analogRead(A1)-18.4375);
  Serial.print(",  "); 
  Serial.print((float)analogRead(A0)/936); 
  Serial.print(",  "); 
  if(digitalRead(2)==false){
    Serial.print(1);
    Serial.print(",  ");
  }
  else Serial.print("0,  ");
  Serial.print(viento);
  Serial.print(",  ");
  Serial.print(richter);
  Serial.print(",  ");
  Serial.print(epicentro);
  Serial.print(",  ");
  Serial.print(temp_aire);
  Serial.print(",  ");
  Serial.print(humedad_aire);
  Serial.print(",  ");
  Serial.print(humedad_suelo);
  Serial.print(",  ");
  Serial.print(!digitalRead(3));
  Serial.print("\n");
  delay(100);
}

int selector(){
  int pos;
  if( digitalRead(9)== true) pos = 1;
  if( digitalRead(8)== true) pos = 2;
  if( digitalRead(7)== true) pos = 3;
  if( digitalRead(6)== true) pos = 4;
  return pos;
  
}
