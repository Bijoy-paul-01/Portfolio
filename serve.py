"""
Simple local development server for Bijoy's AI & ML Portfolio.
Runs on http://localhost:8080 (or the next available port) and automatically opens your web browser.
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import socket

DEFAULT_PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ReuseAddressTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

class DevHandler(http.server.SimpleHTTPRequestHandler):
    # Ensure correct MIME types on Windows
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.html': 'text/html; charset=utf-8',
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Disable caching during local development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def find_available_port(start_port=DEFAULT_PORT, max_tries=15):
    for port in range(start_port, start_port + max_tries):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(("", port))
                return port
            except OSError:
                continue
    return start_port

def run_server():
    os.chdir(DIRECTORY)
    port = find_available_port(DEFAULT_PORT)
    url = f"http://localhost:{port}"

    try:
        httpd = ReuseAddressTCPServer(("", port), DevHandler)
    except Exception as e:
        print(f"Error starting server on port {port}: {e}")
        sys.exit(1)

    print("\n" + "=" * 60)
    print(" 🚀  Bijoy's AI / ML Portfolio is running on Localhost!")
    print(f" 🌐  URL: {url}")
    print(f" 📂  Directory: {DIRECTORY}")
    print(" ⚡  Press Ctrl+C to stop the server.")
    print("=" * 60 + "\n")

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[INFO] Server gracefully stopped. Goodbye!")
    finally:
        httpd.server_close()

if __name__ == "__main__":
    run_server()
