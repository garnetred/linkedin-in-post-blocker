let posts = document.querySelectorAll('.update-components-text')
let main = document.querySelector('.scaffold-finite-scroll__content')
let config = {childList: true, characterData: true, subtree: true}

const checkForRestrictedWords = () => {
    console.log('checking for restricted words')
    for (let i = 0; i < posts.length; i++) {
        console.log(i)
        console.log(posts[i].innerText)
        if (post[i].innerText.includes('ancestors') || posts[i].innerText.includes('AI')) {
            console.log('post including the word ancestors or AI found')
            i.classList.add('hide')
        }
    }
}

const callback = (mutationList, observer) => {
    // console.log(main)
    if (mutationList.mutation)
    if (posts.length) {
        console.log(posts, 'posts')
        checkForRestrictedWords();
    } else {
        observer.disconnect()
    }
}

const observer = new MutationObserver(callback)

observer.observe(main, config)


// allEl.forEach(el => {
//     if (el.innerText.includes('ancestors')) {
//         console.log('text found');
//         console.log(el.innerText)
//     }
// })