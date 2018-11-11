export default (name) => {
    const options = [{
        ref: 'FHAZ',
        name: 'Front Hazard Avoidance Camera'
    }, {
        ref: 'RHAZ',
        name: 'Rear Hazard Avoidance Camera'
    }, {
        ref: 'MAST',
        name: 'Mast Camera'
    }, {
        ref: 'CHEMCAM',
        name: 'Chemistry and Camera Complex'
    }, {
        ref: 'MAHLI',
        name: 'Mars Hand Lens Imager'
    }, {
        ref: 'MARDI', 
        name: 'Mars Descent Imager'
    }, {
        ref: 'NAVCAM',
        name: 'Navigation Camera'
    }, {
        ref: 'PANCAM',
        name: 'Panoramic Camera'
    }, {
        ref: 'MINITES',
        name: 'Miniature Thermal Emission Spectrometer (Mini-TES)'	
    }
]

    switch(name) {
        case "curiousity":
            return options.filter((option, i) => i === 0 || i === 1 || i === 2  || i === 3 || i === 4 || i === 5 || i === 6);
        case "opportunity":
            return options.filter((option, i) => i === 0 || i === 1 || i === 6 || i === 7 || i === 8);
        case "spirit":
            return options.filter((option, i) => i === 0 || i === 1 || i === 6 || i === 7 || i === 8);
        default:
            return options.filter((option, i) => i === 0 || i === 1 || i === 2  || i === 3 || i === 4 || i === 5 || i === 6);
    }
}