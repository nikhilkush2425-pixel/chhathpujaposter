
function generatePoster() {

    // User ka naam lena
    const name = document.getElementById("userName").value.trim();

    // User ki photo lena
    const photoInput = document.getElementById("userPhoto");

    // Naam check karna
    if (name === "") {
        alert("कृपया अपना नाम लिखें!");
        return;
    }

    // Photo check karna
    if (photoInput.files.length === 0) {
        alert("कृपया अपनी फोटो चुनें!");
        return;
    }

    const photo = photoInput.files[0];

    // Sirf image file allow karna
    if (!photo.type.startsWith("image/")) {
        alert("कृपया सही Image File चुनें!");
        return;
    }

    // Poster par naam dikhana
    document.getElementById("posterName").innerText = name;

    // Poster par photo dikhana
    const reader = new FileReader();

    reader.onload = function(event) {
        const posterPhoto = document.getElementById("posterPhoto");

        posterPhoto.src = event.target.result;
        posterPhoto.style.display = "block";
    };

    reader.readAsDataURL(photo);

    alert("आपका Chhath Puja Poster तैयार है! 🌅");
}

function downloadPoster() {

    const poster = document.getElementById("poster");

    if (!document.getElementById("posterName").innerText ||
        document.getElementById("posterName").innerText === "आपका नाम") {
        alert("पहले अपना Poster बनाएँ!");
        return;
    }

    html2canvas(poster, {
        scale: 3,
        useCORS: true,
        backgroundColor: null
    }).then(function(canvas) {

        const link = document.createElement("a");

        link.download = "Chhath-Puja-Poster.png";
        link.href = canvas.toDataURL("image/png");

        link.click();

    }).catch(function(error) {
        alert("Poster download nahi ho paya!");
        console.error(error);
    });
}

