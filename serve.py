#!/usr/bin/env python3
"""Serve the site so files in /public are available at the URL root (Vite-style)."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PUBLIC = ROOT / "public"
PORT = 5173


class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        rel = path.split("?", 1)[0].split("#", 1)[0].lstrip("/")
        if rel:
            public_file = PUBLIC / rel
            if public_file.exists():
                return str(public_file)
        return super().translate_path(path)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print(f"Disco Turbo at http://127.0.0.1:{PORT}")
    server.serve_forever()
