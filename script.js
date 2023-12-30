

    var textarea = document.getElementById('inptext');
    var uppercaseButton = document.getElementById('uppercase');
    var lowercaseButton = document.getElementById('lowercase');
    var chars = document.getElementById('chars');
    var words = document.getElementById('words');

    uppercaseButton.addEventListener('click', function () {
        textarea.value = textarea.value.toUpperCase();
    });

    lowercaseButton.addEventListener('click', function () {
        textarea.value = textarea.value.toLowerCase();
    });

    textarea.addEventListener("input", function () {
        chars.innerText = textarea.value.length;
        // Split by space to count words
        words.innerText = textarea.value.trim().split(/\s+/).length;
    });
