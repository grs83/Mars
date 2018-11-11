export const newDate = date => ({
    type: 'newDate',
    payload: date,
})

export const newRover = name => ({
    type: 'newRover',
    payload: name,
})

export const newCamera = camera => ({
    type: 'newCamera',
    payload: camera,
})

export const storeImages = images => ({
    type: 'storeImages',
    payload: images,
})

export const selectImage = id => ({
    type: 'selectImage',
    payload: id,
})

export const newError = message => ({
    type: 'newError',
    payload: message,
})