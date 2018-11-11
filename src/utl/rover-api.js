class RoverApiAsSingleton {
    constructor() {
        this.key = `YQv888J9gVeBN6TPQJqZ78ox127KhPQriWjNbYKa`;
        this.page = 1;
    }

    apiUrl(rover, date, camera) {
        return `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=${this.key}`
    }
}

export default new RoverApiAsSingleton();