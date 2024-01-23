function addLink(text, href) {
    const linkElement = document.createElement('div');
    linkElement.className = 'link';
    linkElement.innerHTML = `<a href="${href}">${text}</a>`;
    document.querySelector('.container').insertBefore(linkElement, document.querySelector('.qr-code'));
}

// Use this function to add new links
// addLink('Link 3', 'https://example.com');
