import machine
import socket
import ujson
import time

from bmp280 import BMP280
from neopixel import NeoPixel

def toLux(analog):
    voltage = 5/1024 * analog # Convert to absolute voltage assuming a 3.3k resistor
    lux = ((2500/voltage) - 500)/3.3
    return lux

def sensorRead(light):
    response = {}
    response['light'] = light.read()
    response['moisture'] = 60
    response['temperature'] = 27
    return ujson.dumps(response)

def main():
    light = machine.ADC(0) # Reading either light sensor/moisture sensor/soil quality sensor
    # bus = machine.I2C(scl=machine.Pin(5), sda=machine.Pin(4), freq=100000)
    # bmp = BMP280(bus)
    indicator = NeoPixel(machine.Pin(0, machine.Pin.OUT), 1) # Set up 1 WS2812 as a neopixel
    indicator[0] = (255, 255, 255) # set the first pixel to white
    indicator.write()  

    # Setting up HTTP server
    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]

    s = socket.socket()
    s.bind(addr)
    s.listen(1)

    print('listening on ', addr)

    while True:
        conn, address = s.accept()

        header = 'HTTP/1.1 200 OK\n'
        header += 'Content-Type: text/event-stream\n\n'

        final_response = header.encode('utf-8')
        final_response += sensorRead(light) # No moisture or soil detection
        conn.send(final_response)
        print(final_response)
        time.sleep(1)  
    
    conn.close()

main() 
