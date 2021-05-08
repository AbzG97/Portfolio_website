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
                "OpenWeatherMap API"
            ],
            github_rep: "https://github.com/AbzG97/Portfolio_website.git",
            website_link: ""
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
                "OMDB API"
            ],
            github_rep: "placeholder",
            website_link: "placeholder"
        }
    ]
}

export default ProjectData;