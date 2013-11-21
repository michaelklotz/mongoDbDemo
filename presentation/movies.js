var toy_story_3 = {
    "title": "Toy Story 3",
    "year": 2010,
    "genres": ["Animation",
        "Kids & Family",
        "Science Fiction & Fantasy",
        "Comedy"
    ],
    "mpaa_rating": "G",
    "runtime": 103,
    "ratings": {
        "critics_rating": "Certified Fresh",
        "critics_score": 99,
        "audience_rating": "Upright",
        "audience_score": 91
    },
    "abridged_cast": [{
        "name": "Tom Hanks",
        "characters": ["Woody"]
    }, {
        "name": "Tim Allen",
        "characters": ["Buzz Lightyear"]
    }, {
        "name": "Joan Cusack",
        "characters": ["Jessie the Cowgirl"]
    }, {
        "name": "Don Rickles",
        "characters": ["Mr. Potato Head"]
    }, {
        "name": "Wallace Shawn",
        "characters": ["Rex"]
    }],
    "abridged_directors": [{
        "name": "Lee Unkrich"
    }],
    "studio": "Walt Disney Pictures"
};

var gravity = {
    "title": "Gravity",
    "year": 2013,
    "genres": ["Drama", "Mystery & Suspense", "Science Fiction & Fantasy"],
    "mpaa_rating": "PG-13",
    "runtime": 91,
    "ratings": {
        "critics_rating": "Certified Fresh",
        "critics_score": 98,
        "audience_rating": "Upright",
        "audience_score": 89
    },
    "abridged_cast": [{
        "name": "Sandra Bullock",
        "characters": ["Dr. Ryan Stone"]
    }, {
        "name": "George Clooney",
        "characters": ["Matt Kowalski"]
    }, {
        "name": "Orto Ignatiussen",
        "characters": ["Aningaaq Voice"]
    }],
    "abridged_directors": [{
        "name": "Alfonso Cuaron"
    }],
    "studio": "Warner Bros. Pictures"
};
var machete = {
    "title": "Machete",
    "year": 2013,
    "genres": ["Action & Adventure"],
    "mpaa_rating": "R",
    "runtime": 106,
    "ratings": {
        "critics_rating": "Rotten",
        "critics_score": 30,
        "audience_rating": "Rotten",
        "audience_score": 54
    },
    "abridged_cast": [{
        "name": "Danny Trejo",
        "characters": ["Machete"]
    }, {
        "name": "Michelle Rodriguez",
        "characters": ["Luzshe"]
    }, {
        "name": "Lady Gaga",
        "characters": ["La Chameleon"]
    }, {
        "name": "Sofia Vergara",
        "characters": ["Desmondona"]
    }],
    "abridged_directors": [{
        "name": "Robert Rodriguez"
    }],
    "studio": "Open Road Films"
};

var capitan_phillips = {
    "title": "Capitan Phillips",
    "year": 2013,
    "genres": ["Drama"],
    "mpaa_rating": "PG-13",
    "runtime": 124,
    "ratings": {
        "critics_rating": "Fresh",
        "critics_score": 95,
        "audience_rating": "Upright",
        "audience_score": 94
    },
    "abridged_cast": [{
        "name": "Tom Hanks",
        "characters": ["Captain Richard Phillips"]
    }, {
        "name": "Catherine Keener",
        "characters": ["Andrea Phillips"]
    }, {
        "name": "Corey Johnson",
        "characters": ["Ken Quinn"]
    }, {
        "name": "Chris Mulkey",
        "characters": ["John Cronan"]
    }],
    "abridged_directors": [{
        "name": "Paul Greengrass"
    }],
    "studio": "Sony Pictures"
};

var forrest_gump = {
    "title": "Forrest Gump",
    "year": 1994,
    "genres": ["Drama", "Romance", "Comedy"],
    "mpaa_rating": "PG-13",
    "runtime": 142,
    "ratings": {
        "critics_score": 71,
        "audience_score": 93
    },
    "abridged_cast": [{
        "name": "Tom Hanks",
        "characters": ["Forrest Gump"]
    }, {
        "name": "Gary Sinise",
        "characters": ["Lt. Dan Taylor"]
    }, {
        "name": "Sally Field",
        "characters": ["Mrs. Gump"]
    }, {
        "name": "Robin Wright",
        "characters": ["Jenny Curan"]
    }],
    "abridged_directors": [{
        "name": "Robert Zemeckis"
    }],
    "studio": "Paramount Pictures"
};

var titanic = {
    "title": "Titanic",
    "year": 1997,
    "genres": ["Documentary", "Drama", "Romance", "Classics"],
    "mpaa_rating": "PG-13",
    "runtime": 172,
    "ratings": {
        "critics_rating": "Fresh",
        "critics_score": 88,
        "audience_score": 70
    },
    "abridged_cast": [{
        "name": "Leonardo DiCaprio",
        "characters": ["Jack Dawson"]
    }, {
        "name": "Kate Winslet",
        "characters": ["Rose DeWitt Bukater"]
    }, {
        "name": "Billy Zane",
        "characters": ["Cal Hockley"]
    }, {
        "name": "Kathy Bates",
        "characters": ["Molly Brown"]
    }],
    "abridged_directors": [{
        "name": "James Cameron"
    }],
    "studio": "Paramount Pictures"
};

var don_jon = {
    "title": "Don Jon",
    "year": 2013,
    "genres": ["Drama", "Comedy"],
    "mpaa_rating": "R",
    "runtime": 90,
    "ratings": {
        "critics_rating": "Certified Fresh",
        "critics_score": 82,
        "audience_rating": "Liked It",
        "audience_score": 66
    },
    "abridged_cast": [{
        "name": "Joseph Gordon-Levitt",
        "characters": ["Don Jon Martel"]
    }, {
        "name": "Scarlett Johansson",
        "characters": ["Barbara Sugarman"]
    }, {
        "name": "Julianne Moore",
        "characters": ["Esther"]
    }],
    "abridged_directors": [{
        "name": "Joseph Gordon-Levitt"
    }],
    "studio": "Relativity Media"
};

db.movies_master.insert([toy_story_3, machete, capitan_phillips, forrest_gump, titanic, don_jon]);