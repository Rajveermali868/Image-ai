async function generateImage() {
    const prompt = document.getElementById("promptInput").value;
    const outputImage = document.getElementById("outputImage");

    if (!prompt) {
        alert("Please enter a prompt!");
        return;
    }

    outputImage.src = ""; 
    outputImage.alt = "Generating...";

    const url = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt);

    outputImage.src = url;
    outputImage.alt = "Generated Image";
}
