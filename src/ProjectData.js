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
        }
    ]
}

export default ProjectData;