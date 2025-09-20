class Position {
  constructor(player, role, cssClass) {
    this.player = player;
    this.role = role;
    this.cssClass = cssClass;
  }
}

class TargPosition extends Position {
  constructor(player, role, cssClass, targCssObj) {
    super(player, role, cssClass);
    // array of objects {[cssProperty]: cssValue}
    this.targCssObj = targCssObj;
  }
}

class VolleyballRotations {
  constructor() {
    this.playerMappings = [
      {
        1: { player: 1, role: "S", class: "setter" },
        2: { player: 2, role: "OH", class: "outside" },
        3: { player: 3, role: "MB", class: "middle" },
        4: { player: 4, role: "OH", class: "outside" },
        5: { player: 5, role: "OH", class: "outside" },
        6: { player: 6, role: "MB", class: "middle" },
      },
      {
        1: { player: 2, role: "OH", class: "outside" },
        2: { player: 3, role: "MB", class: "middle" },
        3: { player: 4, role: "OH", class: "outside" },
        4: { player: 5, role: "OH", class: "outside" },
        5: { player: 6, role: "MB", class: "middle" },
        6: { player: 1, role: "S", class: "setter" },
      },
      {
        1: { player: 3, role: "MB", class: "middle" },
        2: { player: 4, role: "OH", class: "outside" },
        3: { player: 5, role: "OH", class: "outside" },
        4: { player: 6, role: "MB", class: "middle" },
        5: { player: 1, role: "S", class: "setter" },
        6: { player: 2, role: "OH", class: "outside" },
      },
      {
        1: { player: 4, role: "OH", class: "outside" },
        2: { player: 5, role: "OH", class: "outside" },
        3: { player: 6, role: "MB", class: "middle" },
        4: { player: 1, role: "S", class: "setter" },
        5: { player: 2, role: "OH", class: "outside" },
        6: { player: 3, role: "MB", class: "middle" },
      },
      {
        1: { player: 5, role: "OH", class: "outside" },
        2: { player: 6, role: "MB", class: "middle" },
        3: { player: 1, role: "S", class: "setter" },
        4: { player: 2, role: "OH", class: "outside" },
        5: { player: 3, role: "MB", class: "middle" },
        6: { player: 4, role: "OH", class: "outside" },
      },
      {
        1: { player: 6, role: "MB", class: "middle" },
        2: { player: 1, role: "S", class: "setter" },
        3: { player: 2, role: "OH", class: "outside" },
        4: { player: 3, role: "MB", class: "middle" },
        5: { player: 4, role: "OH", class: "outside" },
        6: { player: 5, role: "OH", class: "outside" },
      },
    ];

    this.rotations = [
      {
        name: "Rotation 1",
        receivePositions: {
          1: new TargPosition(1, "S", "setter", {
            bottom: "10px",
            right: "10px",
          }),
          2: new TargPosition(2, "OH", "outside", {
            top: "260px",
            right: "20px",
          }),
          3: new TargPosition(3, "MB", "middle", {
            bottom: "10px",
            right: "10px",
          }),
          4: new TargPosition(4, "OH", "outside", {
            bottom: "10px",
            right: "10px",
          }),
          5: new TargPosition(5, "OH", "outside", {
            bottom: "70px",
            right: "10px",
          }),
          6: new TargPosition(6, "MB", "middle", {
            bottom: "10px",
            right: "10px",
          }),
        },
        attackPositions: {
          1: new TargPosition(1, "S", "setter", {
            top: "14px",
            bottom: "10px",
            left: "182px",
            right: "52px",
          }),
          2: new TargPosition(2, "OH", "outside", {
            top: "124px",
            bottom: "210px",
            left: "234px",
            right: "20px",
          }),
          3: new TargPosition(3, "MB", "middle", {
            top: "124px",
            bottom: "10px",
            left: "111px",
            right: "10px",
          }),
          4: new TargPosition(4, "OH", "outside", {
            top: "125px",
            bottom: "10px",
            right: "10px",
          }),
          5: new TargPosition(5, "OH", "outside", {
            top: "264px",
            bottom: "70px",
            left: "20px",
            right: "10px",
          }),
          6: new TargPosition(6, "MB", "middle", {
            top: "324px",
            bottom: "10px",
            left: "115px",
            right: "10px",
          }),
        },
      },
      {
        name: "Rotation 2",
        receivePositions: {
          1: new TargPosition(2, "OH", "outside", {
            top: "214.483px",
            bottom: "119.517px",
            left: "228.483px",
            right: "5.51667px",
          }),
          2: new TargPosition(3, "MB", "middle", {
            top: "24.0333px",
            bottom: "309.967px",
            left: "214.033px",
            right: "19.9667px",
          }),
          3: new TargPosition(4, "OH", "outside", {
            top: "7.18333px",
            bottom: "326.817px",
            left: "159.183px",
            right: "74.8167px",
          }),
          4: new TargPosition(5, "OH", "outside", {
            top: "216px",
            bottom: "118px",
            left: "8.68333px",
            right: "225.317px",
          }),
          5: new TargPosition(6, "MB", "middle", {
            top: "315.017px",
            bottom: "18.9833px",
            left: "116.017px",
            right: "117.983px",
          }),
          6: new TargPosition(1, "S", "setter", {
            top: "80.0667px",
            bottom: "253.933px",
            left: "180.067px",
            right: "53.9333px",
          }),
        },
        attackPositions: {
          1: new TargPosition(2, "OH", "outside", {
            top: "242px",
            bottom: "92px",
            left: "172.65px",
            right: "61.35px",
          }),
          2: new TargPosition(3, "MB", "middle", {
            top: "127.033px",
            bottom: "206.967px",
            left: "123.033px",
            right: "110.967px",
          }),
          3: new TargPosition(4, "OH", "outside", {
            top: "124.6px",
            bottom: "209.4px",
            left: "242.6px",
          }),
          4: new TargPosition(5, "OH", "outside", {
            top: "126.483px",
            bottom: "207.517px",
            right: "236.833px",
          }),
          5: new TargPosition(6, "MB", "middle", {
            top: "242.233px",
            bottom: "91.7667px",
            left: "70.2333px",
            right: "163.767px",
          }),
          6: new TargPosition(1, "S", "setter", {
            top: "8.26667px",
            bottom: "325.733px",
            left: "183.267px",
            right: "50.7333px",
          }),
        },
      },
      { name: "Rotation 3" },
      { name: "Rotation 4" },
      { name: "Rotation 5" },
      { name: "Rotation 6" },
    ];
    this.currentRotation = 0;
    this.targReceivePos = this.rotations[0].receivePositions;
    this.targAtkPos = this.rotations[0].attackPositions;
    this.init();
  }

  moveToAtkPos() {
    if (!this.targAtkPos) return;
    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      const targPos = this.targAtkPos[pos];
      if (!targPos) continue;
      for (let cssProp in targPos.targCssObj) {
        posElement.style[cssProp] = targPos.targCssObj[cssProp];
      }
    }
  }

  updateRotation() {
    const rotation = this.rotations[this.currentRotation];
    const playerMapping = this.playerMappings[this.currentRotation];
    document.getElementById("rotationNumber").textContent = rotation.name;

    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      const playerData = playerMapping[pos];
      posElement.querySelector(".player-number").textContent = pos;
      posElement.querySelector(".player-role").textContent = playerData.role;
      posElement.querySelector(
        ".player-role"
      ).className = `player-role ${playerData.class}`;
    }
    this.moveToInitialPos();

    this.targReceivePos = rotation.receivePositions;
    this.targAtkPos = rotation.attackPositions;
  }

  moveToInitialPos() {
    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      posElement.style.bottom = "";
      posElement.style.top = "";
      posElement.style.left = "";
      posElement.style.right = "";
    }
  }

  moveToReceivePos() {
    this.moveToInitialPos();
    if (!this.targReceivePos) return;
    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      const targPos = this.targReceivePos[pos];
      if (!targPos) continue;
      for (let cssProp in targPos.targCssObj) {
        console.log({ cssProp, value: targPos.targCssObj[cssProp] });

        posElement.style[cssProp] = targPos.targCssObj[cssProp];
      }
    }
  }

  nextRotation() {
    this.currentRotation = (this.currentRotation + 1) % this.rotations.length;
    this.updateRotation();
  }

  prevRotation() {
    this.currentRotation =
      (this.currentRotation - 1 + this.rotations.length) %
      this.rotations.length;
    this.updateRotation();
  }

  setupDrag() {
    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      let isDragging = false;
      let startX, startY, startLeft, startTop;

      posElement.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = posElement.getBoundingClientRect();
        const courtRect = document
          .querySelector(".court")
          .getBoundingClientRect();
        startLeft = rect.left - courtRect.left;
        startTop = rect.top - courtRect.top;
        posElement.style.cursor = "grabbing";
        e.preventDefault();
      });

      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        posElement.style.left = startLeft + deltaX + "px";
        posElement.style.top = startTop + deltaY + "px";
        posElement.style.right = "auto";
        posElement.style.bottom = "auto";
      });

      document.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          posElement.style.cursor = "pointer";
        }
      });
    }
  }

  setupDevTools() {
    this.selectedPlayer = 1;
    document.getElementById("playerSelect").addEventListener("change", (e) => {
      this.selectedPlayer = parseInt(e.target.value);
      this.updateSliders();
    });

    ["top", "bottom", "left", "right"].forEach((prop) => {
      document
        .getElementById(`${prop}Slider`)
        .addEventListener("input", (e) => {
          this.updatePlayerPosition(prop, e.target.value + "px");
        });
    });

    document.getElementById("generateCode").addEventListener("click", () => {
      this.generateCode();
    });
  }

  updateSliders() {
    const posElement = document.getElementById(`pos${this.selectedPlayer}`);
    const computed = getComputedStyle(posElement);

    document.getElementById("topSlider").value = parseInt(computed.top) || 0;
    document.getElementById("bottomSlider").value =
      parseInt(computed.bottom) || 0;
    document.getElementById("leftSlider").value = parseInt(computed.left) || 0;
    document.getElementById("rightSlider").value =
      parseInt(computed.right) || 0;
  }

  updatePlayerPosition(prop, value) {
    const posElement = document.getElementById(`pos${this.selectedPlayer}`);
    posElement.style[prop] = value;
  }

  generateCode() {
    const positions = {};
    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      const computed = getComputedStyle(posElement);
      const cssObj = {};

      if (computed.top !== "auto" && parseInt(computed.top) > 0)
        cssObj.top = computed.top;
      if (computed.bottom !== "auto" && parseInt(computed.bottom) > 0)
        cssObj.bottom = computed.bottom;
      if (computed.left !== "auto" && parseInt(computed.left) > 0)
        cssObj.left = computed.left;
      if (computed.right !== "auto" && parseInt(computed.right) > 0)
        cssObj.right = computed.right;

      positions[pos] = cssObj;
    }

    document.getElementById("codeOutput").value = JSON.stringify(
      positions,
      null,
      2
    );
  }

  init() {
    document
      .getElementById("nextRotation")
      .addEventListener("click", () => this.nextRotation());
    document
      .getElementById("prevRotation")
      .addEventListener("click", () => this.prevRotation());
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") this.nextRotation();
      if (e.key === "ArrowLeft") this.prevRotation();
    });
    document
      .getElementById("receivePos")
      .addEventListener("click", () => this.moveToReceivePos());
    document
      .getElementById("resetPos")
      .addEventListener("click", () => this.moveToInitialPos());
    document
      .getElementById("attackPos")
      .addEventListener("click", () => this.moveToAtkPos());
    this.setupDevTools();
    this.setupDrag();
    this.updateRotation();
  }
}

new VolleyballRotations();
