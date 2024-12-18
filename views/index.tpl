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
        .dot-container {
            text-align: center;
            margin-top: 10px;
        }
        .dot {
            height: 15px;
            width: 15px;
            margin: 0 5px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.3s ease;
        }
        .active-dot {
            background-color: #717171;
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

        <!-- Dots for navigation -->
        <div class="dot-container" id="dots"></div>
        
        <div>
            <button id="prev">Previous</button>
            <button id="next">Next</button>
        </div>
    </div>

    <script src="/static/js/slideshow.js"></script>
</body>
</html>
