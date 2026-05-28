let PESAN1 = "Aku udah lama suka sama kamu 🥺❤️";
let PESAN2 = "Kalau kamu mau, aku bakal jaga kamu selalu 💖";

let jawabanUser = "";

function start() {
    let nama = document.getElementById("nama").value;

    if (!nama) {
        return alert("Isi nama dulu 😅");
    }

    go("p1", "load");

    setTimeout(() => {
        document.getElementById("txt").innerText =
            "Aku sayang kamu " + nama + " ❤️";

        go("load", "p2");
    }, 1500);
}

function go(a, b) {
    document.getElementById(a)
        .classList.remove("active");

    document.getElementById(b)
        .classList.add("active");
}

function kabur(btn) {
    btn.style.transform =
        `translate(${Math.random()*200-100}px,
        ${Math.random()*200-100}px)`;
}

function toggleMusic() {
    let m = document.getElementById("musik");
    let b = document.getElementById("btnMusic");

    if (m.paused) {
        m.play();
        b.innerText = "⏸️ Pause Musik";
    } else {
        m.pause();
        b.innerText = "▶️ Play Musik";
    }
}

function jawab(p) {
    jawabanUser = p;

    if (p === "ya") {
        confetti();
    }

    document.getElementById("msg1").innerText = PESAN1;
    document.getElementById("msg2").innerText = PESAN2;

    setTimeout(() => {
        go("p2", "p3");
    }, 500);
}

function next() {
    go("p3", "p4");
}

function kirimWA() {
    let nama = document.getElementById("nama").value;

    let text =
`Nama: ${nama}
Jawaban: ${jawabanUser.toUpperCase()}

💌 ${PESAN1}

🥺 ${PESAN2}

👨‍💻 Developer: Alvaro
📱 6285137101818`;

    window.open(
        "https://wa.me/6285137101818?text=" +
        encodeURIComponent(text)
    );
}
