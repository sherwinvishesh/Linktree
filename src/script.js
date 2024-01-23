function buttonAction(link) {
    // Replace with actual link navigation or any other action
    //console.log("Button clicked for:", link);
    // For example, to navigate to a new page:
    // window.location.href =  link;
    window.open(link, '_blank').focus();

}

function shareLink() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out my Linktree!',
            url: 'https://links.sherwinvishesh.com'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
        // navigator.share is not available, fall back to a different method
        // For example, copy the link to the clipboard
        const dummy = document.createElement('input'),
        text = window.location.href;

        document.body.appendChild(dummy);
        dummy.value = 'https://links.sherwinvishesh.com';
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        
        alert('Link copied to clipboard');
    }
}

