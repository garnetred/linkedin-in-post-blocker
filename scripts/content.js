let posts = document.querySelector('.update-components-text')
let config = {attributes: true, childList: true, subtree: true}
const callback = (mutationList, observer) => {
    if (document.contains(posts)) {
        console.log(posts)
        observer.disconnect()
    }
}

const observer = new MutationObserver(callback)

observer.observe(posts)