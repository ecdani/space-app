

// Definimos el pin digital donde se conecta el sensor
#define DHTPIN 7
#define LED_ON 2
#define Hum_pin A0
#define motor A7

#define LOG_OUT 1 // use the log output function
#define FFT_N 128 // set to 256 point fft
#define FREQ 58  // Frequency of the FFT


// Dependiendo del tipo de sensor
#define DHTTYPE DHT11


// Incluimos librería
#include <DHT.h>
#include <FFT.h> // Fourier Transform Library

#include <VirtualWire.h>

const int transmit_pin = 9;
// Inicializamos el sensor DHT11
DHT dht(DHTPIN, DHTTYPE);

const int X = A4;
const int Y = A3;
const int Z = A2;

float x_g;
float y_g;
float z_g;

float h;
float t;
float f;
float hif;
float hic;
float hum = 0;
float wind_speed = 0;
bool stp_com = false;

bool compute_FFT = false;
int cont_FFT = 0;
float amplitude = 0;
float frequency = 0;
float time;


void setup()
{
 Serial.begin(115200);
 pinMode(Hum_pin,INPUT);
 pinMode(motor,INPUT);
 // Initialise the IO and ISR
 vw_set_tx_pin(transmit_pin);
 vw_set_ptt_inverted(true); // Required for DR3100
 vw_setup(2000);       // Bits per sec
 // Comenzamos el sensor DHT
 dht.begin();
}

void loop()
{


 if (Serial.available() > 0)
 {
   String buff = "";
   buff = Serial.readStringUntil('\n');

   if (buff == 'o')
   {
     if(!stp_com)
     {
       stp_com = true;
     }
     else
     {
       stp_com = false;
     }
     buff = "";
   }
 }


 hum = (float) analogRead(Hum_pin)/1023.0*100.0;
 wind_speed = (float) analogRead(motor)*5.0/1023.0;
 h = dht.readHumidity();
 // Leemos la temperatura en grados centígrados (por defecto)
 t = dht.readTemperature();
 // Leemos la temperatura en grados Fahrenheit
 f = dht.readTemperature(true);
 // Leer acelerómetro
 z_g = (((float)analogRead(Z)*5./1023.)-2.0821)/0.3+1.;
 y_g = (((float)analogRead(Y)*5/1023)-1.6813)/0.3+0;
 x_g = (((float)analogRead(X)*5/1023)-1.7155)/0.3+0;

 // Save FFT
 fft_input[cont_FFT]   = (int)z_g*1000; // put real data into even bins
 fft_input[cont_FFT+1] = 0; // set odd bins to 0
 cont_FFT += 2;
 if (cont_FFT >= FFT_N) // Enough data
 {
   compute_FFT = true;
 }

 // Comprobamos si ha habido algún error en la lectura
 if (isnan(h) || isnan(t) || isnan(f))
 {
   Serial.println("Error obteniendo los datos del sensor DHT11");
   return;
 }

 // Calcular el índice de calor en Fahrenheit
 hif = dht.computeHeatIndex(f, h);
 // Calcular el índice de calor en grados centígrados
 hic = dht.computeHeatIndex(t, h, false);

     time = micros()/1000.;

 if (compute_FFT)
 {
   cli();  // UDRE interrupt slows this way down on arduino1.0
   fft_reorder(); // reorder the data before doing the fft
   fft_run(); // process the data in the fft
   fft_mag_log(); // take the output of the fft
   sei(); // turn interrupts back on
   compute_FFT = false;
   cont_FFT = 0;
   // Locate maximum
   amplitude = 0;
   for (int i=0; i < FFT_N/2; i++)
   {
     if (fft_log_out[i] > amplitude)
     {
       amplitude = fft_log_out[i];
       frequency = (float)(i*FREQ) /( (float)(FFT_N/2) );
     }
   }
   amplitude = max(0,amplitude-143);
 }

 if(!stp_com)
 {
    verbose();
 }

 char msg2[6] = {(uint8_t)wind_speed*1000,/*(uint8_t)(g_z+5)*20,*/(uint8_t)hum,(uint8_t)amplitude,(uint8_t)h,(uint8_t)t,(uint8_t)hic};

 vw_send((uint8_t *)msg2, sizeof(msg2));
 vw_wait_tx(); // Wait until the whole message is gone

}


void verbose(void)
{
 Serial.print(" Humedad: ");
 Serial.print(hum);
 Serial.print(" wind speed: ");
 Serial.print(wind_speed);
 Serial.print(" Richter [dB]: ");
 Serial.print(amplitude);
 Serial.print("Humedad amb: ");
 Serial.print(h);
 Serial.print("Temperatura: ");
 Serial.print(t);
 Serial.print(" *C ");
 Serial.print("Índice de calor: ");
 Serial.print(hic);
 Serial.print("frequency");
 Serial.println(frequency);
}
