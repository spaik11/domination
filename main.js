function changeImg(id, url) {
    const imgId = document.querySelector(id);
    imgId.src = url;
}

changeImg('#image-1', 'https://media.giphy.com/media/9xxciSRg2Ugwt76OQB/giphy.gif');
changeImg('#image-2', 'https://media.giphy.com/media/MFOW53R3kXP3hOEI71/giphy.gif');
changeImg('#image-3', 'https://media.giphy.com/media/XbTygeYSO8bQ5FB02p/giphy.gif');

