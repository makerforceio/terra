import machine
import socket
import ujson
import time
import network

from bmp280 import BMP280
from neopixel import NeoPixel

def connectWifi():
    sta_if = network.WLAN(network.STA_IF)
    ap_if = network.WLAN(network.AP_IF)
    
    if not sta_if.isconnected():
        print('Connecting to the network')
        sta_if.active(True)
        sta_if.connect("Ambrose's Pixel", 'meow the cat')
        while not sta_if.isconnected():
            pass
    print('network config:', sta_if.ifconfig())
    ap_if.active(False)

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
    indicator = NeoPixel(machine.Pin(4, machine.Pin.OUT), 1) # Set up 1 WS2812 as a neopixel
    indicator[0] = (255, 0, 0) # set the first pixel to white
    indicator.write()  

    # Setting up HTTP server
    connectWifi()
    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]

    s = socket.socket()
    s.bind(addr)
    s.listen(1)

    print('listening on ', addr)
    indicator[0] = (0, 255, 0) # set the first pixel to white
    indicator.write()  

    while True:
        conn, address = s.accept()

        time.sleep_ms(100)
        conn.recv(1024)

        header = 'HTTP/1.1 200 OK\r\n'
        header += 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept\r\n'
        header += 'Access-Control-Allow-Origin: *\r\n'
        header += 'Cache-Control: no-cache\r\n'
        header += 'Connection: keep-alive\r\n'
        header += 'Content-Type: text/event-stream\r\n\r\n'

        final_response = header.encode('utf-8')
        conn.send(final_response)
        print(final_response)

        while True:
            final_response = "data: " + sensorRead(light) + "\n\n" # No moisture or soil detection
            try:
                conn.send(final_response)
            except OSError as e:
                conn.close()
                break

            print(final_response)
            time.sleep(1)

main() 
