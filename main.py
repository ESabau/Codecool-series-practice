from flask import Flask, render_template, url_for,request, jsonify
from data import queries
import math
from dotenv import load_dotenv

load_dotenv()
app = Flask('codecool_series')

@app.route('/')
def index():
    shows = queries.get_shows()
    return render_template('index.html', shows=shows)


@app.route('/design')
def design():
    return render_template('design.html')


@app.route('/birthday-actors')
def birthday_actors():
    actors = queries.get_actors()
    return render_template('birthday-actors.html', actors=actors)


@app.route('/birthday-actors_2', methods=['GET', 'POST'])
def birthday_actors_2():
    actor = request.args.get('day')
    birthday = queries.get_birthday(actor)
    return jsonify(birthday)


@app.route('/ordered-shows')
def ordered_shows():
    cond = 'desc'
    shows = queries.get_ordered_shows(cond)
    return render_template("ordered-shows.html", shows=shows)


@app.route('/ordered-shows_2')
def ordered_shows_2():
    cond = request.args.get('input-text')
    if cond == 'asc':
        shows = queries.get_ordered_shows('asc')
    else:
        shows = queries.get_ordered_shows('desc')
    return jsonify(shows)


def main():
    app.run(debug=False)


if __name__ == '__main__':
    main()
