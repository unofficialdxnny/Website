import time
import json
from http.server import BaseHTTPRequestHandler, HTTPServer

# Simulated data for the currently playing track
current_track = {
    "title": "Example Song",
    "artist": "Example Artist",
    "album": "Example Album"
}

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/get_track':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(current_track).encode())

def run(server_class=HTTPServer, handler_class=MyHandler, port=8080):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting server on port {port}")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
