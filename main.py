from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/product")
def product():
    return render_template("product.html")


@app.route("/buy")
def buy():
    return render_template("buy.html")


@app.route("/final")
def final():
    return render_template("final.html")


if __name__ == "__main__":
    app.run(debug=True)
