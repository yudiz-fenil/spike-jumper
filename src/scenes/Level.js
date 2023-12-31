// You can write more code here
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		this.add.image(960, 540, "bg");

		// container_spikes
		const container_spikes = this.add.container(0, 0);

		// wall_1
		this.add.image(550, 516, "wall-1");

		// wall_2
		const wall_2 = this.add.image(1370, 516, "wall-1");
		wall_2.flipX = true;

		// surface
		const surface = this.add.image(651, 1024, "surface");
		surface.setOrigin(1, 0.5);

		// surface_1
		const surface_1 = this.add.image(1268, 1024, "surface");
		surface_1.setOrigin(0, 0.5);

		// container_home
		const container_home = this.add.container(0, -1);

		// container_btn_spikes
		const container_btn_spikes = this.add.container(0, 0);
		container_home.add(container_btn_spikes);

		// spike_2
		const spike_2 = this.add.image(943, 756, "spike-2");
		spike_2.angle = -38;
		container_btn_spikes.add(spike_2);

		// spike
		const spike = this.add.image(947, 797, "spike-2");
		spike.angle = -148;
		container_btn_spikes.add(spike);

		// spike_1
		const spike_1 = this.add.image(988, 780, "spike-2");
		spike_1.angle = 96;
		container_btn_spikes.add(spike_1);

		// btn_play
		const btn_play = this.add.image(960, 774, "btn_play");
		btn_play.scaleX = 0.6;
		btn_play.scaleY = 0.6;
		container_home.add(btn_play);

		// container_logo_spikes
		const container_logo_spikes = this.add.container(0, 0);
		container_logo_spikes.visible = false;
		container_home.add(container_logo_spikes);

		// spike_4
		const spike_4 = this.add.image(789, 308, "spike-2");
		spike_4.angle = -148;
		container_logo_spikes.add(spike_4);

		// spike_3
		const spike_3 = this.add.image(856, 340, "spike-2");
		spike_3.angle = 166;
		container_logo_spikes.add(spike_3);

		// spike_5
		const spike_5 = this.add.image(1127, 331, "spike-2");
		spike_5.angle = 121;
		container_logo_spikes.add(spike_5);

		// spike_6
		const spike_6 = this.add.image(1133, 288, "spike-2");
		spike_6.angle = 62;
		container_logo_spikes.add(spike_6);

		// spike_7
		const spike_7 = this.add.image(1128, 191, "spike-2");
		spike_7.angle = 27;
		container_logo_spikes.add(spike_7);

		// spike_8
		const spike_8 = this.add.image(1084, 142, "spike-2");
		spike_8.angle = 78;
		container_logo_spikes.add(spike_8);

		// spike_9
		const spike_9 = this.add.image(1005, 118, "spike-2");
		container_logo_spikes.add(spike_9);

		// spike_10
		const spike_10 = this.add.image(916, 107, "spike-2");
		container_logo_spikes.add(spike_10);

		// spike_11
		const spike_11 = this.add.image(807, 185, "spike-2");
		spike_11.angle = -21;
		container_logo_spikes.add(spike_11);

		// logo
		const logo = this.add.image(960, 227, "logo");
		logo.scaleX = 0.6;
		logo.scaleY = 0.6;
		container_home.add(logo);

		this.container_spikes = container_spikes;
		this.container_home = container_home;
		this.container_btn_spikes = container_btn_spikes;
		this.btn_play = btn_play;
		this.container_logo_spikes = container_logo_spikes;
		this.logo = logo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_spikes;
	/** @type {Phaser.GameObjects.Container} */
	container_home;
	/** @type {Phaser.GameObjects.Container} */
	container_btn_spikes;
	/** @type {Phaser.GameObjects.Image} */
	btn_play;
	/** @type {Phaser.GameObjects.Container} */
	container_logo_spikes;
	/** @type {Phaser.GameObjects.Image} */
	logo;

	/* START-USER-CODE */
	birdParticles = () => {
		const particle = this.add.particles("particle");
		const emitter = particle.createEmitter({
			scale: { start: 0.3, end: 0 },
			lifespan: 500,
			frequency: 100,
			quantity: 1,
			particleBringToTop: false,
		})
		emitter.startFollow(this.bird);
		this.bird.emitter = emitter;
	}
	btnSpikeOut = () => {
		const aOut = [
			{ x: 931, y: 740 },
			{ x: 935, y: 816 },
			{ x: 1007, y: 782 },
		]
		for (let i = 0; i < this.container_btn_spikes.list.length; i++) {
			this.tweens.add({
				targets: this.container_btn_spikes.list[i],
				x: aOut[i].x,
				y: aOut[i].y,
				duration: 50,
				delay: 0 + (i * 80),
			});
		}
	}
	btnSpikeIn = () => {
		const aIn = [
			{ x: 943, y: 756 },
			{ x: 947, y: 797 },
			{ x: 988, y: 780 },
		]
		for (let i = 0; i < this.container_btn_spikes.list.length; i++) {
			this.tweens.add({
				targets: this.container_btn_spikes.list[i],
				x: aIn[i].x,
				y: aIn[i].y,
				duration: 50,
				delay: 0 + (i * 80),
			});
		}
	}
	pointerOver = (btn, scale) => {
		this.input.setDefaultCursor('pointer');
		this.btnSpikeOut();
		this.tweens.add({
			targets: btn,
			scaleX: scale + 0.04,
			scaleY: scale + 0.04,
			duration: 100
		})
	}
	pointerOut = (btn, scale) => {
		this.input.setDefaultCursor('default');
		this.btnSpikeIn();
		this.tweens.add({
			targets: btn,
			scaleX: scale,
			scaleY: scale,
			duration: 100,
			onComplete: () => {
				btn.setScale(scale);
			}
		})
	}
	setScoreUI = () => {
		this.txt_score = this.add.text(this.game.config.width / 2, this.game.config.height / 2, "00", {
			fontSize: 180,
			fontFamily: "NewsCrewJNL",
			align: "center",
			color: "#697F8A",
		}).setOrigin(0.5).setAlpha(0);
	}
	setHomeUI = () => {
		const center = { x: this.game.config.width / 2, y: this.game.config.height / 2 };
		const aPos = [
			{ x: 798, y: 294 },
			{ x: 852, y: 326 },
			{ x: 1111, y: 323 },
			{ x: 1118, y: 297 },
			{ x: 1116, y: 216 },
			{ x: 1073, y: 144 },
			{ x: 1005, y: 136 },
			{ x: 916, y: 133 },
			{ x: 814, y: 204 },
		]
		this.container_logo_spikes.list.forEach((spike, i) => {
			this.tweens.add({
				targets: spike,
				x: aPos[i].x,
				y: aPos[i].y,
				duration: Phaser.Math.Between(300, 800),
				delay: Phaser.Math.Between(0, 200),
				yoyo: true,
				repeat: -1
			});
		});

		this.nBestScore = localStorage.getItem(gameOptions.bestScoreKey) || 0;
		const formattedBestScore = this.nBestScore < 10 ? '0' + this.nBestScore : this.nBestScore;
		const txt_best_score = this.add.text(center.x, center.y + center.y / 1.3, "BEST SCORE : " + formattedBestScore, {
			"color": "#697F8A",
			"fontFamily": "NewsCrewJNL",
			"fontSize": "40px",
			"align": "center",
		}).setOrigin(0.5).setAlpha(0.5);
		this.container_home.add(txt_best_score);
		this.container_home.setAlpha(0);
		this.tweens.add({
			targets: this.container_home,
			alpha: 1,
			duration: 600,
			onComplete: () => {
				this.container_logo_spikes.setVisible(true);
			}
		});
	}
	startGame = () => {
		this.isGameStarted = true;
		this.birdTween.stop();
		this.matter.world.setGravity(0, 1);
		this.bird.setVelocity(gameOptions.birdSpeed, 0);
		this.birdParticles();
		this.container_logo_spikes.setVisible(false);
		this.tweens.add({
			targets: this.container_home,
			alpha: 0,
			duration: 600,
			onComplete: () => {
				this.container_home.setVisible(false);
			}
		});
		this.tweens.add({
			targets: this.txt_score,
			alpha: 0.3,
			duration: 600,
		});
	}
	gameOver = () => {
		if (this.nScore > this.nBestScore) {
			localStorage.setItem(gameOptions.bestScoreKey, this.nScore);
		}
		this.bird.emitter.remove();
		if (!this.isGameOver) {
			const particles = this.add.particles('particle');
			const emitter = particles.createEmitter({
				speed: 2000,
				scale: { start: 0.2, end: 0.3 },
				alpha: { start: 1, end: 0 },
				lifespan: 3000,
				frequency: 10,
			});
			emitter.explode(35, this.bird.x, this.bird.y);
			setTimeout(() => {
				emitter.remove();
			}, 500);
		}
		this.isGameOver = true;
		this.tweens.add({
			targets: this.bird,
			alpha: 0,
			duration: 500,
			onComplete: () => {
				gameOptions.birdSpeed = gameOptions.initialSpeed;
				this.scene.restart("Level");
			}
		})
	}
	updateScore = () => {
		this.nScore++;
		this.txt_score.setText(this.nScore < 10 ? "0" + this.nScore : this.nScore);
		gameOptions.birdSpeed += gameOptions.increase;
	}
	create() {
		this.editorCreate();
		this.setScoreUI();
		this.setHomeUI();
		const spikeDistance = gameOptions.triangleBase * 1.25;
		this.isGameStarted = false;
		this.isGameOver = false;
		this.nScore = 0;
		this.leftSpikes = [];
		this.rightSpikes = [];
		this.topSpikes = [];
		this.bottomSpikes = [];
		this.gameWalls = [];
		this.nLeftWall = 634;
		this.nRiightWall = 1286;
		this.nLeftSpikes = 600 - 32;
		this.nRightSpikes = 1320 + 32;

		this.btn_play.setInteractive()
			.on("pointerover", () => {
				this.pointerOver(this.btn_play, 0.6);
			}).on("pointerout", () => {
				this.pointerOut(this.btn_play, 0.6);
			}).on("pointerup", () => {

			});

		for (let i = 0; i < 11; i++) {
			if (i < 7) {
				this.topSpikes.push(this.addSpike(700 + i * spikeDistance, (gameOptions.triangleBase / 2) - 55, true));
				this.bottomSpikes.push(this.addSpike((700 + i * spikeDistance), (this.game.config.height - gameOptions.triangleBase / 2) + 55, true));
			}
			this.leftSpikes.push(this.addSpike(this.nLeftSpikes, gameOptions.triangleBase * 1.5 + i * spikeDistance, false));
			this.rightSpikes.push(this.addSpike(this.nRightSpikes, gameOptions.triangleBase * 1.5 + i * spikeDistance, false));
		}
		this.addWall(this.nLeftWall, this.game.config.height / 2, gameOptions.triangleBase / 2, this.game.config.height, "leftwall", "wall-1");
		this.addWall(this.nRiightWall, this.game.config.height / 2, gameOptions.triangleBase / 2, this.game.config.height, "rightwall");

		const ballTexture = this.textures.get("bird");
		this.bird = this.matter.add.sprite(this.game.config.width / 2, (this.game.config.height / 2) - 30, "bird", 1, {
			label: "ball",
			shape: this.cache.json.get('bird_1').bird
		});
		this.bird.play("fly", true);
		this.bird.setDepth(1);
		this.birdTween = this.tweens.add({
			targets: this.bird,
			y: (this.game.config.height / 2) + 30,
			yoyo: true,
			duration: 500,
			repeat: -1
		})

		this.input.on("pointerdown", this.jump, this);
		this.input.on("pointerup", () => {
			// this.bird.setTexture('bird', 0);
		}, this);

		this.matter.world.on("collisionstart", (e, b1, b2) => {
			if (b1.label == "spike" || b2.label == "spike") {
				this.gameOver();
			}
			if (b1.label == "leftwall" || b2.label == "leftwall") {
				this.updateScore();
				this.setSpikes(true);
				this.bird.setVelocity(gameOptions.birdSpeed, this.bird.body.velocity.y);
				this.bird.flipX = false;
			}
			if (b1.label == "rightwall" || b2.label == "rightwall") {
				this.updateScore();
				this.setSpikes(false);
				this.bird.setVelocity(-gameOptions.birdSpeed, this.bird.body.velocity.y);
				this.bird.flipX = true;;
			}
		}, this);
	}
	addWall = (x, y, w, h, label, texture = "wall") => {

		const wallTexture = this.textures.get(texture);
		const wall = this.matter.add.image(x, y, texture, null, {
			isStatic: true,
			label: label
		});
		wall.setVisible(false);
		this.gameWalls.push(wall);
		wall.setScale(w / wallTexture.source[0].width, h / wallTexture.source[0].width);
	}
	addSpike = (x, y, upDown) => {
		const texture = upDown ? "spike-3" : "spike";
		const spikeTexture = this.textures.get(texture);
		const squareSize = gameOptions.triangleBase;
		const squareScale = (squareSize / spikeTexture.source[0].width) + 0.20;
		const spike = this.matter.add.image(x, y, texture, null, {
			isStatic: true,
			label: "spike",
		});
		this.container_spikes.add(spike);
		console.log('squareScale', squareScale)
		spike.setScale(squareScale);
		// spike.setSize(squareScale);
		spike.rotation = Math.PI / 4;
		return spike;
	}
	setSpikes = (isRight) => {
		for (let i = 0; i < 11; i++) {
			if (isRight) {
				this.rightSpikes[i].x = this.nRightSpikes;
			}
			else {
				this.leftSpikes[i].x = this.nLeftSpikes;
			}
		}
		const randomPositions = Phaser.Utils.Array.NumberArray(0, 10);
		const numberOfSpikes = Phaser.Math.Between(3, 6);
		for (let i = 0; i < numberOfSpikes; i++) {
			let randomSpike = Phaser.Utils.Array.RemoveRandomElement(randomPositions);
			if (isRight) {
				this.rightSpikes[randomSpike].x = this.nRightSpikes - gameOptions.triangleBase / 1.25;
			}
			else {
				this.leftSpikes[randomSpike].x = this.nLeftSpikes + gameOptions.triangleBase / 1.25;
			}
		}
	}
	jump = (p, g) => {
		if (!this.isGameStarted && g.length) {
			this.startGame();
		}
		if (!this.isGameOver && this.isGameStarted) {
			this.bird.setVelocity((this.bird.body.velocity.x > 0) ? gameOptions.birdSpeed : -gameOptions.birdSpeed, -gameOptions.jumpForce);
		}
	}
	update() {
		if (!this.isGameOver) this.bird.setAngularVelocity(0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
