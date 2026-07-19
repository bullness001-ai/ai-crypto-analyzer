// =====================================
// AI CRYPTO ANALYZER
// Version 1.0
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("AI Crypto Analyzer berhasil dimuat.");

    // Waktu update
    const updateTime = document.getElementById("updateTime");

    if (updateTime) {
        const sekarang = new Date();

        updateTime.innerHTML =
            sekarang.getHours().toString().padStart(2, "0") +
            ":" +
            sekarang.getMinutes().toString().padStart(2, "0") +
            " WIB";
    }

    // Tombol Refresh
    const refreshButton = document.querySelector(".top-menu button");

    if (refreshButton) {
        refreshButton.addEventListener("click", function () {
            location.reload();
        });
    }

});
