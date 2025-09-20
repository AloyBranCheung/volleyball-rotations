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
    this.rotations = [
      {
        name: "Rotation 1",
        positions: {
          1: new TargPosition(1, "S", "setter", {
            bottom: "20px",
            right: "20px",
          }),
          2: new TargPosition(2, "OH", "outside", {
            top: "40px",
            right: "20px",
          }),
          3: new TargPosition(3, "MB", "middle", {
            top: "40px",
            left: "115px",
          }),
          4: new TargPosition(4, "OH", "outside", {
            top: "40px",
            left: "20px",
          }),
          5: new TargPosition(5, "OH", "outside", {
            bottom: "20px",
            left: "20px",
          }),
          6: new TargPosition(6, "MB", "middle", {
            bottom: "20px",
            left: "115px",
          }),
        },
        receivePositions: {
          1: new TargPosition(1, "S", "setter", {
            bottom: "10px",
            right: "10px",
          }),
          2: new TargPosition(2, "OH", "outside", {
            top: "260px",
            right: "10px",
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
      },
      {
        name: "Rotation 2",
        positions: {
          1: new Position(2, "OH", "outside"),
          2: new Position(3, "MB", "middle"),
          3: new Position(4, "OH", "outside"),
          4: new Position(5, "OH", "outside"),
          5: new Position(6, "MB", "middle"),
          6: new Position(1, "S", "setter"),
        },
        receivePositions: "receive 2",
      },
      {
        name: "Rotation 3",
        positions: {
          1: new Position(3, "MB", "middle"),
          2: new Position(4, "OH", "outside"),
          3: new Position(5, "OH", "outside"),
          4: new Position(6, "MB", "middle"),
          5: new Position(1, "S", "setter"),
          6: new Position(2, "OH", "outside"),
        },
      },
      {
        name: "Rotation 4",
        positions: {
          1: new Position(4, "OH", "outside"),
          2: new Position(5, "OH", "outside"),
          3: new Position(6, "MB", "middle"),
          4: new Position(1, "S", "setter"),
          5: new Position(2, "OH", "outside"),
          6: new Position(3, "MB", "middle"),
        },
      },
      {
        name: "Rotation 5",
        positions: {
          1: new Position(5, "OH", "outside"),
          2: new Position(6, "MB", "middle"),
          3: new Position(1, "S", "setter"),
          4: new Position(2, "OH", "outside"),
          5: new Position(3, "MB", "middle"),
          6: new Position(4, "OH", "outside"),
        },
      },
      {
        name: "Rotation 6",
        positions: {
          1: new Position(6, "MB", "middle"),
          2: new Position(1, "S", "setter"),
          3: new Position(2, "OH", "outside"),
          4: new Position(3, "MB", "middle"),
          5: new Position(4, "OH", "outside"),
          6: new Position(5, "OH", "outside"),
        },
      },
    ];
    this.currentRotation = 0;
    this.targReceivePos = this.rotations[0].receivePositions;
    this.init();
  }

  updateRotation() {
    const rotation = this.rotations[this.currentRotation];
    document.getElementById("rotationNumber").textContent = rotation.name;

    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      const playerData = rotation.positions[pos];
      posElement.querySelector(".player-number").textContent =
        playerData.player;
      posElement.querySelector(".player-role").textContent = playerData.role;
      posElement.querySelector(
        ".player-role"
      ).className = `player-role ${playerData.cssClass}`;
    }
    this.moveToInitialPos();

    this.targReceivePos = rotation.receivePositions;
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
    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      const targPos = this.targReceivePos[pos];
      for (let cssProp in targPos.targCssObj) {
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
    this.updateRotation();
  }
}

new VolleyballRotations();
