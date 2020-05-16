let content = true

toggleContent = () => {
    const values = {
        true: {
            color: 'black',
            visibility: 'hidden',
            opacity: '0',
            transform: 'rotate(45deg)'
        },
        false: {
            color: 'white',
            visibility: 'visible',
            opacity: '1',
            transform: 'rotate(0deg)'
        }
    }

    const bodyTag = document.getElementsByTagName('body')[0]
    const aTags = document.getElementsByTagName('a')
    const video = document.getElementsByClassName('video')[0]
    const videoOverlay = document.getElementsByClassName('video-overlay')[0]
    const cross = document.getElementsByClassName('cross')[0]

    bodyTag.style.color = values[content].color
    for (let i=0; i<aTags.length; i++) {
        aTags[i].style.color = values[content].color
    }
    video.style.visibility = values[content].visibility
    videoOverlay.style.visibility = values[content].visibility
    video.style.opacity = values[content].opacity
    videoOverlay.style.opacity = values[content].opacity
    cross.style.transform = values[content].transform

    content = !content
}