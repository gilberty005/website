import { collision, platformCollision } from "../utils";
import { Sprite } from "./sprite";

export class Player extends Sprite{
    constructor({position, CollisionBlocks, platformCollisionBlocks, c, gravity, frameRate, scale = 0.75, animations, imageSrc}){
        super({imageSrc, frameRate, scale});
        this.c = c; 
        this.gravity = gravity; 
        this.position = position; 
        this.velocity = {
            x:0,
            y:1
        }
        this.CollisionBlocks = CollisionBlocks; 
        this.platformCollisionBlocks = platformCollisionBlocks; 
        this.hitbox = {
            position: {
                x:this.position.x,
                y:this.position.y
            },
            width: 10,
            height: 10
        }
        this.animations = animations; 
        this.lastDirection = 'right';

        for (let key in this.animations){
            const image = new Image();
            image.src = this.animations[key].imageSrc;

            this.animations[key].image = image; 

        }
        this.camerabox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: 200, 
            height: 80,
        }
    }

    switchSprite(key){
        if (this.image === this.animations[key].image || !this.loaded) return 

        this.currentFrame = 0; 
        this.image = this.animations[key].image;
        this.frameBuffer = this.animations[key].frameBuffer; 
        this.frameRate = this.animations[key].frameRate; 
    }

    updateCamerabox() {
        this.camerabox = {
            position: {
                x: this.position.x - 75,
                y: this.position.y - 17
            },
            width: 200, 
            height: 80,
        }
    }

    checkForHorizontalCanvasCollisions(){
        if (this.hitbox.position.x + this.hitbox.width + this.velocity.x >=576 ||
            this.hitbox.position.x + this.velocity.x <=0 
            ) {
            this.velocity.x = 0; 
        }
    }

    shouldPanCameraToTheLeft({canvas, camera}){
        const cameraboxRightSide = this.camerabox.position.x + this.camerabox.width;
        const scaledDownCanvasWidth = canvas.width/4; 

        if (cameraboxRightSide >= 576) return

        if (cameraboxRightSide >= scaledDownCanvasWidth + Math.abs(camera.position.x)){
            camera.position.x -= this.velocity.x;
        }
    }

    shouldPanCameraToTheRight({canvas, camera}){
        if (this.camerabox.position.x <= 0) return 
        if (this.camerabox.position.x <= Math.abs(camera.position.x)){
            camera.position.x -= this.velocity.x;
        }
    }

    shouldPanCameraDown({canvas, camera}){
        if (this.camerabox.position.y + this.velocity.y <= 0) return 
        if (this.camerabox.position.y <= Math.abs(camera.position.y)){
            camera.position.y -= this.velocity.y;
        }
    }

    shouldPanCameraUp({canvas, camera}){
        const scaledCanvasHeight = canvas.height/4;
        if (this.camerabox.position.y + this.camerabox.height + this.velocity.y >= 432) return 
        if (this.camerabox.position.y + this.camerabox.height >= Math.abs(camera.position.y) + scaledCanvasHeight){
            camera.position.y -= this.velocity.y;
        }
    }

    update(){
        this.updateFrames();
        this.updateHitbox();
        this.updateCamerabox();

        //this.c.fillStyle='rgba(255,0,0,0.2)'
        //this.c.fillRect(this.camerabox.position.x, this.camerabox.position.y,this.camerabox.width,this.camerabox.height);

        //this draws out the image
        //this.c.fillStyle='rgba(0,255,0,0.2)'
        //this.c.fillRect(this.position.x, this.position.y,this.width,this.height);

        //this draws out the hitbox 
        //this.c.fillStyle='rgba(255,0,0,0.2)'
        //this.c.fillRect(this.hitbox.position.x, this.hitbox.position.y,this.hitbox.width,this.hitbox.height);

        this.draw();

        this.position.x += this.velocity.x; 
        this.updateHitbox();
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.updateHitbox();
        this.checkForVerticalCollisions(); 
    }

    updateHitbox() {
        this.hitbox = {
            position: {
                x:this.position.x + 17,
                y:this.position.y + 13
            },
            width: 17,
            height: 20
        }
    }

    checkForHorizontalCollisions() {
        for (let i=0;i<this.CollisionBlocks.length;i++){
            const CollisionBlock = this.CollisionBlocks[i]; 

            if (
                collision({
                    object1: this.hitbox, 
                    object2: CollisionBlock
                })
            ){
                if (this.velocity.x>0){
                    this.velocity.x=0;

                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width;

                    this.position.x=CollisionBlock.position.x - offset - 0.01;
                    break; 
                }
                if (this.velocity.x<0){
                    this.velocity.x=0;

                    const offset = this.hitbox.position.x - this.position.x;

                    this.position.x=CollisionBlock.position.x + CollisionBlock.width - offset + 0.01;
                    break;
                }
            }
        }
    }

    applyGravity(){
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y; 
    }

    checkForVerticalCollisions() {
        for (let i=0;i<this.CollisionBlocks.length;i++){
            const CollisionBlock = this.CollisionBlocks[i]; 

            if (
                collision({
                    object1: this.hitbox, 
                    object2: CollisionBlock
                })
            ){
                if (this.velocity.y>0){
                    this.velocity.y=0;

                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;

                    this.position.y=CollisionBlock.position.y - offset - 0.01;
                    break;
                }
                if (this.velocity.y<0){
                    this.velocity.y=0;

                    const offset = this.hitbox.position.y - this.position.y;

                    this.position.y=CollisionBlock.position.y + CollisionBlock.height - offset + 0.01;
                    break;
                }
            }
        }

        //platform collision blocks
        for (let i=0;i<this.platformCollisionBlocks.length;i++){
            const platformCollisionBlock = this.platformCollisionBlocks[i]; 

            if (
                platformCollision({
                    object1: this.hitbox, 
                    object2: platformCollisionBlock
                })
            ){
                if (this.velocity.y>0){
                    this.velocity.y=0;

                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height;

                    this.position.y=platformCollisionBlock.position.y - offset - 0.01;
                    break;
                }
            }
        }
    }
}