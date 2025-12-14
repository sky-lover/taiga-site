const DATA = {
  potion: {
    title: "Potion of Instant Health",
    text: "You instantly make my day better, no matter how it’s going.",
    img: "assets/potion.png"
  },
  luck: {
    title: "Luck Effect",
    text: "When you’re around, things don’t always go my way, but they always turn out right.",
    img: "assets/luck.png"
  },
  spruce: {
    title: "Spruce Log",
    text: "You’re like the taiga, cold, comforting, and succinct enough to make me question things I don’t usually stop for. You always stand tall and strong.",
    img: "assets/spruce.png"
  },
  orchid: {
    title: "Blue Orchid",
    text: "You’re rare, beautiful and treasured by.",
    img: "assets/orchid.png"
  },
  bow: {
    title: "Bow and Arrow",
    text: "You’re careful and intentional. You don’t waste words, and you never miss when it matters.",
    img: "assets/bow.png"
  },
  golem: {
    title: "Iron Golem",
    text: "You protect. You have a kind of presence that means more than you know. You are used for your iron, but you still always drop a rose.",
    img: "assets/golem.png"
  }
};

/* ---------- Tooltip ---------- */
const tooltip = document.getElementById("tooltip");

document.querySelectorAll(".item").forEach(item => {
  const id = item.dataset.id;

  item.addEventListener("mouseenter", e => {
    tooltip.textContent = DATA[id].title;
    tooltip.style.display = "block";
  });

  item.addEventListener("mousemove", e => {
    tooltip.style.left = e.clientX + 14 + "px";
    tooltip.style.top = e.clientY + 14 + "px";
  });

  item.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  item.addEventListener("click", () => openFocus(id));
});

/* ---------- Focus Panel ---------- */
const overlay = document.getElementById("focus-overlay");
const fImg = document.getElementById("focus-image");
const fTitle = document.getElementById("focus-title");
const fText = document.getElementById("focus-description");

function openFocus(id) {
  const d = DATA[id];
  fImg.src = d.img;
  fTitle.textContent = d.title;
  fText.textContent = d.text;
  overlay.style.display = "flex";
}

document.getElementById("close").onclick = () => {
  overlay.style.display = "none";
};

/* ---------- Particles ---------- */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let w, h, particles;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  s: Math.random() * 1.5 + 0.5,
  v: Math.random() * 0.2 + 0.05
}));

function loop() {
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "rgba(220,230,230,0.4)";

  particles.forEach(p => {
    p.y += p.v;
    if (p.y > h) p.y = -10;
    ctx.fillRect(p.x, p.y, p.s, p.s);
  });

  requestAnimationFrame(loop);
}

loop();
