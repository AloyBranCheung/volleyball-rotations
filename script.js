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
    this.showImages = true;
    this.playerData = {
      1: { name: "mas", role: "S", cssClass: "setter", image: "public/mas.jpg" },
      2: { name: "ryujin", role: "OH", cssClass: "outside", image: "public/ryujin.jpg" },
      3: { name: "lostsock", role: "MB", cssClass: "middle", image: "public/lostsock.jpg" },
      4: { name: "fishyboom", role: "OH", cssClass: "outside", image: "public/fishyboom.jpg" },
      5: { name: "badbreath", role: "OH", cssClass: "outside", image: "public/badbreath.jpg" },
      6: { name: "bagasama", role: "MB", cssClass: "middle", image: "public/bagasama.jpg" },
      7: { name: "fierymeatpipes", role: "SUB", cssClass: "substitute", image: "public/fierymeatpipes.jpg" },
    };
    this.createSubstitute();
    this.playerMappings = [
      {
        1: new Position(1, "S", "setter"),
        2: new Position(2, "OH", "outside"),
        3: new Position(3, "MB", "middle"),
        4: new Position(4, "OH", "outside"),
        5: new Position(5, "OH", "outside"),
        6: new Position(6, "MB", "middle"),
      },
      {
        1: new Position(2, "OH", "outside"),
        2: new Position(3, "MB", "middle"),
        3: new Position(4, "OH", "outside"),
        4: new Position(5, "OH", "outside"),
        5: new Position(6, "MB", "middle"),
        6: new Position(1, "S", "setter"),
      },
      {
        1: new Position(3, "MB", "middle"),
        2: new Position(4, "OH", "outside"),
        3: new Position(5, "OH", "outside"),
        4: new Position(6, "MB", "middle"),
        5: new Position(1, "S", "setter"),
        6: new Position(2, "OH", "outside"),
      },
      {
        1: new Position(4, "OH", "outside"),
        2: new Position(5, "OH", "outside"),
        3: new Position(6, "MB", "middle"),
        4: new Position(1, "S", "setter"),
        5: new Position(2, "OH", "outside"),
        6: new Position(3, "MB", "middle"),
      },
      {
        1: new Position(5, "OH", "outside"),
        2: new Position(6, "MB", "middle"),
        3: new Position(1, "S", "setter"),
        4: new Position(2, "OH", "outside"),
        5: new Position(3, "MB", "middle"),
        6: new Position(4, "OH", "outside"),
      },
      {
        1: new Position(6, "MB", "middle"),
        2: new Position(1, "S", "setter"),
        3: new Position(2, "OH", "outside"),
        4: new Position(3, "MB", "middle"),
        5: new Position(4, "OH", "outside"),
        6: new Position(5, "OH", "outside"),
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
      {
        name: "Rotation 3",
        receivePositions: {
          1: new TargPosition(3, "MB", "middle", {
            top: "231.633px",
            bottom: "102.367px",
            left: "237.633px",
          }),
          2: new TargPosition(4, "OH", "outside", {
            top: "36px",
            bottom: "298px",
            left: "239px",
          }),
          3: new TargPosition(5, "OH", "outside", {
            top: "231px",
            bottom: "103px",
            left: "2px",
            right: "232px",
          }),
          4: new TargPosition(6, "MB", "middle", {
            top: "33px",
            bottom: "301px",
            left: "1px",
            right: "233px",
          }),
          5: new TargPosition(1, "S", "setter", {
            top: "79px",
            bottom: "255px",
            left: "11px",
            right: "223px",
          }),
          6: new TargPosition(2, "OH", "outside", {
            top: "314px",
            bottom: "20px",
            left: "115px",
            right: "119px",
          }),
        },
        attackPositions: {
          1: new TargPosition(3, "MB", "middle", {
            top: "238.933px",
            bottom: "95.0667px",
            left: "159.933px",
            right: "74.0667px",
          }),
          2: new TargPosition(4, "OH", "outside", {
            top: "123.383px",
            bottom: "210.617px",
            left: "228.383px",
            right: "5.61667px",
          }),
          3: new TargPosition(5, "OH", "outside", {
            top: "120.833px",
            bottom: "213.167px",
            right: "234.167px",
          }),
          4: new TargPosition(6, "MB", "middle", {
            top: "126.367px",
            bottom: "207.633px",
            left: "110.367px",
            right: "123.633px",
          }),
          5: new TargPosition(1, "S", "setter", {
            top: "10.6833px",
            bottom: "323.317px",
            left: "172.683px",
            right: "61.3167px",
          }),
          6: new TargPosition(2, "OH", "outside", {
            top: "238.933px",
            bottom: "95.0667px",
            left: "70.9333px",
            right: "163.067px",
          }),
        },
      },
      {
        name: "Rotation 4",
        receivePositions: {
          1: new TargPosition(4, "OH", "outside", {
            top: "221.417px",
            bottom: "112.583px",
            left: "206.417px",
            right: "27.5833px",
          }),
          2: new TargPosition(5, "OH", "outside", {
            top: "60.5167px",
            bottom: "273.483px",
            left: "123.517px",
            right: "110.483px",
          }),
          3: new TargPosition(6, "MB", "middle", {
            top: "24.05px",
            bottom: "309.95px",
            left: "115.05px",
            right: "118.95px",
          }),
          4: new TargPosition(1, "S", "setter", {
            bottom: "334.467px",
            left: "111.533px",
            right: "122.467px",
          }),
          5: new TargPosition(2, "OH", "outside", {
            top: "220.2px",
            bottom: "113.8px",
            left: "27.2px",
            right: "206.8px",
          }),
          6: new TargPosition(3, "MB", "middle", {
            top: "314px",
            bottom: "20px",
            left: "115px",
            right: "119px",
          }),
        },
        attackPositions: {
          1: new TargPosition(4, "OH", "outside", {
            top: "221.417px",
            bottom: "112.583px",
            left: "206.417px",
            right: "27.5833px",
          }),
          2: new TargPosition(5, "OH", "outside", {
            top: "118.683px",
            bottom: "215.317px",
            left: "238.683px",
          }),
          3: new TargPosition(6, "MB", "middle", {
            top: "121px",
            bottom: "213px",
            left: "116px",
            right: "118px",
          }),
          4: new TargPosition(1, "S", "setter", {
            top: "5.63333px",
            bottom: "328.367px",
            left: "175.633px",
            right: "58.3667px",
          }),
          5: new TargPosition(2, "OH", "outside", {
            top: "220.2px",
            bottom: "113.8px",
            left: "27.2px",
            right: "206.8px",
          }),
          6: new TargPosition(3, "MB", "middle", {
            top: "253px",
            bottom: "20px",
            left: "115px",
            right: "119px",
          }),
        },
      },
      {
        name: "Rotation 5",
        receivePositions: {
          1: new TargPosition(5, "OH", "outside", {
            top: "223.35px",
            bottom: "110.65px",
            left: "214.35px",
            right: "19.65px",
          }),
          2: new TargPosition(6, "MB", "middle", {
            top: "34.6333px",
            bottom: "299.367px",
            left: "149.633px",
            right: "84.3667px",
          }),
          3: new TargPosition(1, "S", "setter", {
            top: "4px",
            bottom: "330px",
            left: "125px",
            right: "109px",
          }),
          4: new TargPosition(2, "OH", "outside", {
            top: "59.7667px",
            bottom: "274.233px",
            left: "114.767px",
            right: "119.233px",
          }),
          5: new TargPosition(3, "MB", "middle", {
            top: "226.217px",
            bottom: "107.783px",
            left: "15.2167px",
            right: "218.783px",
          }),
          6: new TargPosition(4, "OH", "outside", {
            top: "312px",
            bottom: "22px",
            left: "121px",
            right: "113px",
          }),
        },
        attackPositions: {
          1: new TargPosition(5, "OH", "outside", {
            top: "149.933px",
            bottom: "184.067px",
            left: "208.933px",
            right: "25.0667px",
          }),
          2: new TargPosition(6, "MB", "middle", {
            top: "121.067px",
            bottom: "212.933px",
            left: "120.067px",
            right: "113.933px",
          }),
          3: new TargPosition(1, "S", "setter", {
            top: "3.68333px",
            bottom: "330.317px",
            left: "178.683px",
            right: "55.3167px",
          }),
          4: new TargPosition(2, "OH", "outside", {
            top: "121.45px",
            bottom: "212.55px",
            left: "18.45px",
            right: "215.55px",
          }),
          5: new TargPosition(3, "MB", "middle", {
            top: "226.217px",
            bottom: "107.783px",
            left: "15.2167px",
            right: "218.783px",
          }),
          6: new TargPosition(4, "OH", "outside", {
            top: "230.283px",
            bottom: "103.717px",
            left: "126.283px",
            right: "107.717px",
          }),
        },
      },
      {
        name: "Rotation 6",
        receivePositions: {
          1: new TargPosition(6, "MB", "middle", {
            top: "226.267px",
            bottom: "107.733px",
            left: "213.267px",
            right: "20.7333px",
          }),
          2: new TargPosition(1, "S", "setter", {
            top: "27.2667px",
            bottom: "306.733px",
            left: "139.267px",
            right: "94.7333px",
          }),
          3: new TargPosition(2, "OH", "outside", {
            top: "57.5833px",
            bottom: "276.417px",
            left: "112.583px",
            right: "121.417px",
          }),
          4: new TargPosition(3, "MB", "middle", {
            top: "3.83333px",
            bottom: "330.167px",
            left: "102.833px",
            right: "131.167px",
          }),
          5: new TargPosition(4, "OH", "outside", {
            top: "233.767px",
            bottom: "100.233px",
            left: "16.7667px",
            right: "217.233px",
          }),
          6: new TargPosition(5, "OH", "outside", {
            top: "314px",
            bottom: "20px",
            left: "115px",
            right: "119px",
          }),
        },
        attackPositions: {
          1: new TargPosition(6, "MB", "middle", {
            top: "142.767px",
            bottom: "191.233px",
            left: "212.767px",
            right: "21.2333px",
          }),
          2: new TargPosition(1, "S", "setter", {
            top: "1.76667px",
            bottom: "332.233px",
            left: "178.767px",
            right: "55.2333px",
          }),
          3: new TargPosition(2, "OH", "outside", {
            top: "123.583px",
            bottom: "210.417px",
            left: "1.58333px",
            right: "232.417px",
          }),
          4: new TargPosition(3, "MB", "middle", {
            top: "120.567px",
            bottom: "213.433px",
            left: "107.567px",
            right: "126.433px",
          }),
          5: new TargPosition(4, "OH", "outside", {
            top: "233.767px",
            bottom: "100.233px",
            left: "16.7667px",
            right: "217.233px",
          }),
          6: new TargPosition(5, "OH", "outside", {
            top: "222.7px",
            bottom: "111.3px",
            left: "115.7px",
            right: "118.3px",
          }),
        },
      },
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
      const actualPlayer = this.playerData[playerData.player];
      
      posElement.querySelector(".player-number").textContent = pos;
      posElement.querySelector(".player-role").textContent = playerData.role;
      posElement.querySelector(".player-role").className = `player-role ${playerData.cssClass}`;
      
      const imgElement = posElement.querySelector(".player-image");
      imgElement.src = actualPlayer.image;
      imgElement.alt = actualPlayer.name;
    }
    this.updateDisplay();
    this.moveToInitialPos();

    this.targReceivePos = rotation.receivePositions;
    this.targAtkPos = rotation.attackPositions;
  }

  createSubstitute() {
    const sidelineRight = document.getElementById("sideline-right");
    const subElement = document.createElement("div");
    subElement.className = "substitute position";
    subElement.id = "sub1";
    subElement.style.position = "absolute";
    subElement.style.right = "-80px";
    subElement.style.top = "50%";
    subElement.style.transform = "translateY(-50%)";
    
    const imgElement = document.createElement("img");
    imgElement.className = "player-image";
    imgElement.src = this.playerData[7].image;
    imgElement.alt = this.playerData[7].name;
    
    const numberElement = document.createElement("span");
    numberElement.className = "player-number";
    numberElement.textContent = "SUB";
    
    const roleElement = document.createElement("span");
    roleElement.className = "player-role";
    roleElement.textContent = "";
    
    subElement.appendChild(imgElement);
    subElement.appendChild(numberElement);
    subElement.appendChild(roleElement);
    document.querySelector(".court").appendChild(subElement);
  }

  updateDisplay() {
    for (let pos = 1; pos <= 6; pos++) {
      const posElement = document.getElementById(`pos${pos}`);
      const imgElement = posElement.querySelector(".player-image");
      const numberElement = posElement.querySelector(".player-number");
      const roleElement = posElement.querySelector(".player-role");
      
      if (this.showImages) {
        imgElement.style.display = "block";
        numberElement.style.display = "none";
        roleElement.style.display = "none";
      } else {
        imgElement.style.display = "none";
        numberElement.style.display = "block";
        roleElement.style.display = "block";
      }
    }
    
    const subElement = document.getElementById("sub1");
    if (subElement) {
      const subImg = subElement.querySelector(".player-image");
      const subNumber = subElement.querySelector(".player-number");
      const subRole = subElement.querySelector(".player-role");
      
      if (this.showImages) {
        subImg.style.display = "block";
        subNumber.style.display = "none";
        subRole.style.display = "block";
      } else {
        subImg.style.display = "none";
        subNumber.style.display = "block";
        subRole.style.display = "none";
      }
    }
  }

  toggleDisplay() {
    this.showImages = !this.showImages;
    document.getElementById("toggleDisplay").textContent = this.showImages ? "Show Text" : "Show Images";
    this.updateDisplay();
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
    const allPositions = [1, 2, 3, 4, 5, 6, 'sub1'];
    for (let pos of allPositions) {
      const posElement = document.getElementById(typeof pos === 'string' ? pos : `pos${pos}`);
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
        posElement.style.position = "absolute";
        posElement.style.transform = "none";
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
    console.log("Hi Thomas");
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
    document
      .getElementById("toggleDisplay")
      .addEventListener("click", () => this.toggleDisplay());
    this.setupDevTools();
    this.setupDrag();
    this.updateRotation();
  }
}

new VolleyballRotations();
