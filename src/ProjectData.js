const ProjectData = () => {
    return [
        {
            name: "ChattyIO",
            description: "A chat app using vanilla JS, Socket.IO and Materialize CSS",
            features: [
               "Chat rooms",
               "Realtime chat",
               "Send / receive messages in realtime"
            ],
            technologies: [
                "Javascript",
                "NodeJS",
                "ExpressJS",
                "Socket.IO",
                "Materialize CSS",
                "HTML / CSS"
            ],
            github_rep: "https://github.com/AbzG97/ChattyIO",
            website_link: "https://chattyio-chat-app.herokuapp.com/index.html"
            
        },
        {
            name: "Moments",
            description: "a simple forum system where users can make posts, while seeing and commenting on other users posts",
            features: [
                "Sign up / Login system using Google's Firebase platform",
                "User authentication and authorization with Firebase",
                "Create posts",
                "A user profile system where users can see, edit, and delete their own posts",
                "Profile edit and delete options",
                "Dashboard page where all posts made by users can viewed, and commented on",
            ],
            technologies: [
                "Javascript",
                "NodeJS",
                "ExpressJS",
                "Atlas MongoDB",
                "ReactJS",
                "React styled components",
                "React router",
                "bootstrap",
                "Google Firebase Platform",
                "RESTful API for posts",
                "Axios"
            ],
            github_rep: "https://github.com/AbzG97/Moment_forum_post_system",
            website_link: "https://moment-posts.herokuapp.com"
        },
        {
            name: "Weather app",
            description: "an application that gets the local weather, or weather status for any address",
            features: [
                "Show local weather",
                "Show weather for any address",
                "Get detailed weather data for the day",
                "Show the weather forecast for the 8 coming days"
            ],
            technologies: [
                "Javascipt",
                "ReactJS",
                "React styled components",
                "CSS",
                "OpenWeatherMap API",
                "Axios"
            ],
            github_rep: "https://github.com/AbzG97/React_weather_app",
            website_link: "https://clouds-weather-app.herokuapp.com/"
        },
        {
            name: "Shopify front-end dev internship challenge",
            description: "an app the searches the OMDB movie database and lets users pick the a list of their best movies",
            features: [
                "Search movies",
                "Add / remove a movie to nominated list",
                "the list is saved and updated for the user using localStorage"
            ],
            technologies: [
                "Javascript",
                "ReactJS",
                "React styled components",
                "CSS",
                "OMDB API",
                "Axios"
            ],
            github_rep: "https://github.com/AbzG97/Shopify_dev_challenge",
            website_link: "https://the-shoppies-dev-challenge.herokuapp.com/"
        },
    ]
}

export default ProjectData;