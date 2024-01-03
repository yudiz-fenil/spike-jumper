
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		this.add.image(960, 540, "bg");

		// progress
		const progress = this.add.text(960, 540, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.text = "0%";
		progress.setStyle({ "color": "#000", "fontFamily": "NewsCrewJNL", "fontSize": "100px" });

		// wall_2
		const wall_2 = this.add.image(1370, 516, "wall-1");
		wall_2.flipX = true;

		// wall_1
		this.add.image(550, 516, "wall-1");

		// surface_1
		const surface_1 = this.add.image(1268, 1024, "surface");
		surface_1.setOrigin(0, 0.5);

		// surface
		const surface = this.add.image(651, 1024, "surface");
		surface.setOrigin(1, 0.5);

		// outerBar
		const outerBar = this.add.image(960, 774, "outerBar");
		outerBar.scaleX = 0.6;
		outerBar.scaleY = 0.6;

		// innerBar
		const innerBar = this.add.image(776.3999927043915, 774, "innerBar");
		innerBar.scaleX = 0.6;
		innerBar.scaleY = 0.6;
		innerBar.setOrigin(0, 0.5);

		// logo
		const logo = this.add.image(960, 227, "logo");
		logo.scaleX = 0.6;
		logo.scaleY = 0.6;

		// text_1
		const text_1 = this.add.text(960, 738, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.alpha = 0.5;
		text_1.alphaTopLeft = 0.5;
		text_1.alphaTopRight = 0.5;
		text_1.alphaBottomLeft = 0.5;
		text_1.alphaBottomRight = 0.5;
		text_1.text = "LOADNIG...";
		text_1.setStyle({ "align": "center", "color": "#697F8A", "fontFamily": "NewsCrewJNL", "fontSize": "24px" });

		// progress (components)
		new PreloadText(progress);

		this.progress = progress;
		this.outerBar = outerBar;
		this.innerBar = innerBar;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	progress;
	/** @type {Phaser.GameObjects.Image} */
	outerBar;
	/** @type {Phaser.GameObjects.Image} */
	innerBar;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level"));

		// this.fakeLoading();
	}
	fakeLoading() {
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.innerBar.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);
			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Level")
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
