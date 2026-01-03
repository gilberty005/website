import React, { useEffect, useRef } from "react";
import './notfound.css'; 
import { Link } from 'react-router-dom';
import {floorCollisions, platformCollisions} from './data/collisions.js'
import { Player } from "./classes/player.js";
import { Sprite } from "./classes/sprite.js";
import idle from '../../assets/Idle.png';
import run from '../../assets/run.png';
import jump from '../../assets/Jump.png';
import fall from '../../assets/Fall.png';
import fallleft from '../../assets/FallLeft.png';
import idleleft from '../../assets/IdleLeft.png';
import jumpleft from '../../assets/JumpLeft.png';
import runleft from '../../assets/RunLeft.png';

export function Notfound() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const c = canvas.getContext('2d');

        canvas.width = 1024;
        canvas.height = 576;
        const gravity = 0.1;
        const scaledCanvas = {
            width: canvas.width/4, 
            height: canvas.height/4
        }

        class CollisionBlock {
            constructor ({position, height = 16}){
                this.position = position; 
                this.width = 16; 
                this.height = height; 
            }
        
            draw(){
                c.fillStyle = 'rgba(255, 0, 0, 0.5)';
                c.fillRect(this.position.x,this.position.y,this.width,this.height);
            }
        
            update(){
                this.draw(); 
            }
        }





        const floorCollisions2D = [];
        for (let i = 0; i<floorCollisions.length; i+=36) {
            floorCollisions2D.push(floorCollisions.slice(i,i+36)); 
        }

        const CollisionBlocks = []; 
        floorCollisions2D.forEach((row,y) => {
            row.forEach((symbol, x) => {
                if (symbol===202){
                    CollisionBlocks.push(new CollisionBlock({
                        position: {
                            x:x*16,
                            y:y*16
                        }, 
                        c
                    }))
                }
            })
        })




        const platformCollisions2D = []
        for (let i = 0; i < platformCollisions.length; i += 36) {
            platformCollisions2D.push(platformCollisions.slice(i, i + 36))
        }

        const platformCollisionBlocks = []; 
        platformCollisions2D.forEach((row,y) => {
            row.forEach((symbol, x) => {
                if (symbol===202){
                    platformCollisionBlocks.push(new CollisionBlock({
                        position: {
                            x:x*16,
                            y:y*16
                        }, 
                        height: 4,
                        c
                    }))
                }
            })
        })



        const player = new Player({
            position: {
                x: 100,
                y: 300,
            },
            CollisionBlocks, 
            platformCollisionBlocks, 
            c, 
            gravity, 
            imageSrc: idle, 
            frameRate: 11,
            animations: {
                Idle: {
                    imageSrc: idle, 
                    frameRate: 11,
                    frameBuffer: 10 
                },
                Run: {
                    imageSrc: run, 
                    frameRate: 8,
                    frameBuffer: 10
                },
                Jump: {
                    imageSrc: jump,
                    frameRate: 1,
                    frameBuffer: 3
                },
                Fall: {
                    imageSrc: fall,
                    frameRate: 1, 
                    frameBuffer: 3
                },
                FallLeft: {
                    imageSrc: fallleft,
                    frameRate: 1, 
                    frameBuffer: 3
                },
                JumpLeft: {
                    imageSrc: jumpleft,
                    frameRate: 1,
                    frameBuffer: 3
                },
                IdleLeft: {
                    imageSrc: idleleft, 
                    frameRate: 11,
                    frameBuffer: 10 
                },
                RunLeft: {
                    imageSrc: runleft, 
                    frameRate: 8,
                    frameBuffer: 10
                }

            }
        });

        const keys = {
            d:{
                pressed: false,
            },
            a:{
                pressed: false,
            }
        }

        const background = new Sprite({
            position:{
                x:0,
                y:0
            },
            imageSrc: 'https://i.imgur.com/gwTCzye.png',
            c
        })

        const backgroundImageHeight = 432; 

        const camera = {
            position: {
                x: 0, 
                y: -backgroundImageHeight + scaledCanvas.height
            },
        }

        function animate() {
            window.requestAnimationFrame(animate);

            c.fillStyle = 'white';
            c.fillRect(0, 0, canvas.width, canvas.height);

            c.save(); 
            c.scale(4,4);
            c.translate(camera.position.x,camera.position.y);
            background.update();

            // Collision blocks rendering disabled for cleaner visuals
            // CollisionBlocks.forEach(CollisionBlock => {
            //     CollisionBlock.update();
            // })
            // platformCollisionBlocks.forEach(block => {
            //     block.update();
            // })

            player.checkForHorizontalCanvasCollisions();
            player.update();

            player.velocity.x=0; 
            if (keys.d.pressed) {
                player.switchSprite('Run');
                player.velocity.x= 1.25; 
                player.lastDirection = 'right';
                player.shouldPanCameraToTheLeft({canvas, camera}); 
            } else if (keys.a.pressed){
                player.switchSprite('RunLeft');
                player.velocity.x= -1.25; 
                player.lastDirection = 'left';
                player.shouldPanCameraToTheRight({canvas, camera}); 
            } else if (player.velocity.y===0){
                if (player.lastDirection==='right'){
                    player.switchSprite('Idle');
                } else {
                    player.switchSprite('IdleLeft');
                }
            }

            if (player.velocity.y <0) {
                player.shouldPanCameraDown({canvas, camera});
                if (player.lastDirection === 'right'){
                    player.switchSprite('Jump');
                } else {
                    player.switchSprite('JumpLeft');
                }
            } else if (player.velocity.y>0) {
                player.shouldPanCameraUp({canvas, camera});
                if (player.lastDirection === 'right'){
                    player.switchSprite('Fall');
                } else {
                    player.switchSprite('FallLeft');
                }
            }

            c.restore();
        }

        animate();

        window.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'd':
                    keys.d.pressed = true; 
                    break; 
                case 'a':
                    keys.a.pressed = true; 
                    break; 
                case 'w':
                    if (player.JumpCounter===false) {
                        player.velocity.y = -4; 
                        player.changeJumpCounter(true);
                    }
                    break;
                case 'ArrowUp':
                    if (player.JumpCounter===false) {
                        player.velocity.y = -4; 
                        player.changeJumpCounter(true);
                    } 
                    break;
                case 'ArrowLeft':
                    keys.a.pressed = true;
                    break;
                case 'ArrowRight':
                    keys.d.pressed = true;
                    break;
                default:
                    // Other keys are ignored
                    break;
            }
        })

        window.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'd':
                    keys.d.pressed = false; 
                    break; 
                case 'a':
                    keys.a.pressed = false; 
                    break; 
                case 'ArrowLeft':
                    keys.a.pressed = false;
                    break;
                case 'ArrowRight':
                    keys.d.pressed = false;
                    break;
                default:
                    // Other keys are ignored
                    break;
            }
        })

    }, []);

    return (
        <div className="notfound__main">
            <h1 className="gradient__text">How did you get here? You shouldn't be here.</h1>
            <Link to="/">
                <button>Go Home</button>
            </Link>
            <div className="canvas-container">
                <canvas ref={canvasRef}></canvas>
            </div>
        </div>
    )
}