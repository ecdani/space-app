package com.example.elon.compass;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.app.Activity;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;
import com.example.elon.compass.*;
import android.util.Log;
import android.util.Log;
import android.widget.TextView;
import android.os.AsyncTask;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.Socket;
import java.io.OutputStream;

public class MainActivity extends Activity implements SensorEventListener {
    private SensorManager mSensorManager;
    private Sensor mCompass;
    private TextView mTextView;
    private TcpClient mTcpClient;
    private float azimuth;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mSensorManager = (SensorManager) getSystemService(SENSOR_SERVICE);
        mCompass = mSensorManager.getDefaultSensor(Sensor.TYPE_ORIENTATION);
        mTextView = (TextView) findViewById(R.id.tvSensor);
        new ConnectTask().execute();

    }

    // The following method is required by the SensorEventListener interface;
    public void onAccuracyChanged(Sensor sensor, int accuracy) {
    }
    public class ConnectTask extends AsyncTask<String, String, TcpClient> {

        @Override
        protected TcpClient doInBackground(String... message) {

                try {
                    Socket socket = new Socket("192.168.171.104", 8000);

                    OutputStream out = socket.getOutputStream();
                    PrintWriter output = new PrintWriter(out);

                    output.println(Float.toString(azimuth));
                    output.flush();
                    output.close();
                    socket.close();
                } catch (Exception e) {


            }
            return null;
        }}

    // The following method is required by the SensorEventListener interface;
// Hook this event to process updates;
    public void onSensorChanged(SensorEvent event) {
        azimuth = Math.round(event.values[0]);
        // The other values provided are:
        //  float pitch = event.values[1];
        //  float roll = event.values[2];
        mTextView.setText("Azimuth: " + Float.toString(azimuth));
        new ConnectTask().execute();
    }

    @Override
    protected void onPause() {
        // Unregister the listener on the onPause() event to preserve battery life;
        super.onPause();
        mSensorManager.unregisterListener(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        mSensorManager.registerListener(this, mCompass, SensorManager.SENSOR_DELAY_NORMAL);
    }
}


