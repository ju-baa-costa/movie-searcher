from flask import Blueprint, jsonify, request

from database import get_connection

movies_bp = Blueprint(
    "movies",
    __name__
)

@movies_bp.route("/ratings", methods=["GET"])
def get_ratings():
    connection = get_connection()

    cursor = connection.cursor()

    ratings = cursor.execute("""
        SELECT * FROM ratings
    """).fetchall()

    connection.close()

    return jsonify([
        dict(rating)
        for rating in ratings
    ])


@movies_bp.route("/ratings", methods=["POST"])
def create_rating():
    data = request.json

    movie_id = data.get("movie_id")
    rating = data.get("rating")

    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO ratings (
            movie_id,
            rating
        )
        VALUES (?, ?)
    """, (movie_id, rating))

    connection.commit()

    connection.close()

    return jsonify({
        "message": "Avaliação criada"
    })


@movies_bp.route(
    "/ratings/<int:movie_id>",
    methods=["DELETE"]
)
def delete_rating(movie_id):
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute("""
        DELETE FROM ratings
        WHERE movie_id = ?
    """, (movie_id,))

    connection.commit()

    connection.close()

    return jsonify({
        "message": "Avaliação removida"
    })