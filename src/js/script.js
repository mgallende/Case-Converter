// function to download
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

document.getElementById("upper-case").addEventListener("click", function upperCase(){
    let upperCase = document.querySelector("textarea").value;
    document.querySelector("textarea").value = upperCase.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function lowerCase() {
    let lowerCase = document.querySelector("textarea").value;
    document.querySelector("textarea").value = lowerCase.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function properCase() {
    let properCase = document.querySelector("textarea").value.toLowerCase();
    let string = properCase.split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    properCase = string.join(' ');
    document.querySelector("textarea").value = properCase;
});

document.getElementById("sentence-case").addEventListener("click", function sentenceCase() {
    let sentenceCase = document.querySelector("textarea").value.toLowerCase();
    let string = sentenceCase.split ('. ')
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    sentenceCase = string.join('. ')
    document.querySelector("textarea").value = sentenceCase;
});

// Start file download.
document.getElementById("save-text-file").addEventListener("click", function() {
        let text = document.querySelector("textarea").value;
        let filename = "text.txt";
        download (filename, text);
    }, false
);
