import machine
import neopixel
import socket
import ujson

def toLux(analog):
    voltage = 5/1024 * analog # Convert to absolute voltage assuming a 3.3k resistor
    lux = ((2500/voltage) - 500)/3.3
    return lux

def sensorRead(light, moisture, soil):
    response = {}
    response['light'] = toLux(light.read())
    response['moisture'] = 1024
    response['soil'] = 1024
    return ujson.dumps(response)

def main():
    light = machine.ADC(0) # Reading either light sensor/moisture sensor/soil quality sensor
    indicator = neopixel.Neopixel(machine.pin(4), 1) # Set up 1 WS2812 as a neopixel

    # Setting up HTTP server
    addr = socket.getaddrinfo('0.0.0.0', 80)[0][-1]

    s = socket.socket()
    s.bind(addr)
    s.listen(1)

    print('listening on ' + addr)

    while True:
        conn, address = s.accept()

        header = 'HTTP/1.1 200 OK\n'
        header += 'Content-Type: text/event-stream\n\n'

        final_response = header.encode('utf-8')
        final_response += sensorRead(light, 'stump', 'stump') # No moisture or soil detection
        connection.send(final_response)
    
    connection.close()

main() 
