<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Slideshow</title>
    <style>
        #slideshow {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
        }
        .cat-card {
            display: none;
        }
        .active {
            display: inline-block;
        }
        .cat-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }
        #prev, #next {
            padding: 10px 20px;
            margin: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div id="slideshow">
        {{range .Cats}}
        <div class="cat-card">
            <img class="cat-image" src="{{.URL}}" alt="Cat Image" />
        </div>
        {{end}}
        <div>
            <button id="prev">Previous</button>
            <button id="next">Next</button>
        </div>
    </div>

    <script src="/static/js/slideshow.js"></script>
</body>
</html>
