// 5-1 Formation rotations data
const rotations = [
  {
    name: "Rotation 1",
    positions: {
      1: { player: 1, role: "S", class: "setter" },
      2: { player: 2, role: "OH", class: "outside" },
      3: { player: 3, role: "MB", class: "middle" },
      4: { player: 4, role: "OH", class: "outside" },
      5: { player: 5, role: "OH", class: "outside" },
      6: { player: 6, role: "MB", class: "middle" },
    },
  },
  {
    name: "Rotation 2",
    positions: {
      1: { player: 2, role: "OH", class: "outside" },
      2: { player: 3, role: "MB", class: "middle" },
      3: { player: 4, role: "OH", class: "outside" },
      4: { player: 5, role: "OH", class: "outside" },
      5: { player: 6, role: "MB", class: "middle" },
      6: { player: 1, role: "S", class: "setter" },
    },
  },
  {
    name: "Rotation 3",
    positions: {
      1: { player: 3, role: "MB", class: "middle" },
      2: { player: 4, role: "OH", class: "outside" },
      3: { player: 5, role: "OH", class: "outside" },
      4: { player: 6, role: "MB", class: "middle" },
      5: { player: 1, role: "S", class: "setter" },
      6: { player: 2, role: "OH", class: "outside" },
    },
  },
  {
    name: "Rotation 4",
    positions: {
      1: { player: 4, role: "OH", class: "outside" },
      2: { player: 5, role: "OH", class: "outside" },
      3: { player: 6, role: "MB", class: "middle" },
      4: { player: 1, role: "S", class: "setter" },
      5: { player: 2, role: "OH", class: "outside" },
      6: { player: 3, role: "MB", class: "middle" },
    },
  },
  {
    name: "Rotation 5",
    positions: {
      1: { player: 5, role: "OH", class: "outside" },
      2: { player: 6, role: "MB", class: "middle" },
      3: { player: 1, role: "S", class: "setter" },
      4: { player: 2, role: "OH", class: "outside" },
      5: { player: 3, role: "MB", class: "middle" },
      6: { player: 4, role: "OH", class: "outside" },
    },
  },
  {
    name: "Rotation 6",
    positions: {
      1: { player: 6, role: "MB", class: "middle" },
      2: { player: 1, role: "S", class: "setter" },
      3: { player: 2, role: "OH", class: "outside" },
      4: { player: 3, role: "MB", class: "middle" },
      5: { player: 4, role: "OH", class: "outside" },
      6: { player: 5, role: "OH", class: "outside" },
    },
  },
];

let currentRotation = 0;

function updateRotation() {
  const rotation = rotations[currentRotation];

  // Update rotation name
  document.getElementById("rotationNumber").textContent = rotation.name;

  // Update each position
  for (let pos = 1; pos <= 6; pos++) {
    const posElement = document.getElementById(`pos${pos}`);
    const playerData = rotation.positions[pos];

    // Update player number and role
    posElement.querySelector(".player-number").textContent = playerData.player;
    posElement.querySelector(".player-role").textContent = playerData.role;

    // Update role class for styling
    posElement.querySelector(
      ".player-role"
    ).className = `player-role ${playerData.class}`;
  }
}

function nextRotation() {
  currentRotation = (currentRotation + 1) % rotations.length;
  updateRotation();
}

function prevRotation() {
  currentRotation = (currentRotation - 1 + rotations.length) % rotations.length;
  updateRotation();
}

// Event listeners
document.getElementById("nextRotation").addEventListener("click", nextRotation);
document.getElementById("prevRotation").addEventListener("click", prevRotation);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextRotation();
  if (e.key === "ArrowLeft") prevRotation();
});

// Initialize
updateRotation();
