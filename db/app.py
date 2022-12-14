from flask import Flask
# from flask_cors import CORS

app = Flask(__name__)
# app.config.from object(__name__)

@app.route("/")
def test():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug = True)