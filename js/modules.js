function loadNewPage(pagename)  {
    const htmlfile = pagename+'.html'
    try {
        window.location.href = './'+htmlfile
    } catch (err) {
        console.error(err) // log the error with the error stack
    }
}

export {loadNewPage};