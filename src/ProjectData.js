const ProjectData = () => {
    return [
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
        {
            name: "Sign up / Login Authentication System",
            description: "a simple app where users can sign up / login edit their account data, view their data, delete their account and logout using JWT saved in cookies to perform these tasks",
            features: [
                "Sign up / Login",
                "Validation for emails and passwords",
                "Users can read, update, and delete their profile data",
                "user authentication using JWT",
                "A database system where where data is requested and sent"
            ],
            technologies: [
                "Javascript",
                "NodeJS",
                "ExpressJS",
                "Atlas MongoDB",
                "JWT",
                "Cookies",
                "Handlebars template engine",
                "HTML / CSS"
            ],
            github_rep: "https://github.com/AbzG97/basic-signup-login-system.git",
            website_link: "https://basic-auth-system.herokuapp.com/"
            
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
            
        }
    ]
}

export default ProjectData;