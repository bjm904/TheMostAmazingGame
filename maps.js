//0-texture 1-iteractable 2-rotation 3-x 4-y
var map=[
[["grass",0,0,12,17],["sidewalkCorner",0,0,11,14],["grass",0,0,12,15],["grass",0,0,13,15],["grass",0,0,14,15],["grass",0,0,12,16],["grass",0,0,13,16],["grass",0,0,14,16],["grass",0,0,14,17],["grass",0,0,13,17],["sidewalkCorner",0,3,11,19],["sidewalkCorner",0,2,16,19],["sidewalkCorner",0,1,16,14],["grass",0,0,15,15],["grass",0,0,15,16],["grass",0,0,15,17],["grass",0,0,15,18],["grass",0,0,14,18],["grass",0,0,13,18],["grass",0,0,12,18],["roadCross",0,2,10,18],["road",0,0,10,19],["road",0,0,10,17],["road",0,0,10,16],["road",0,0,10,20],["crossroad",0,0,10,13],["roadCross",0,3,11,13],["road",0,1,12,13],["road",0,1,13,13],["road",0,1,14,13],["road",0,1,15,13],["roadCross",0,1,16,13],["roadCross",0,0,17,14],["threeRoad",0,0,17,13],["road",0,0,17,15],["road",0,0,17,16],["road",0,0,17,17],["road",0,0,17,18],["roadCross",0,2,17,19],["road",0,0,17,12],["road",0,0,17,11],["threeRoad",0,0,17,10],["road",0,1,16,10],["road",0,3,15,10],["road",0,1,14,10],["road",0,1,13,10],["road",0,1,12,10],["road",0,1,11,10],["threeRoad",0,1,11,10],["road",0,1,11,10],["road",0,0,10,11],["road",0,0,10,12],["sidewalkCorner",0,3,11,12],["sidewalkCorner",0,0,11,11],["sidewalkCorner",0,1,16,11],["sidewalkCorner",0,2,16,12],["sidewalkCorner",0,2,9,12],["sidewalkCorner",0,1,9,14],["road",0,1,9,13],["road",0,1,8,13],["road",0,1,7,13],["road",0,1,6,13],["road",0,1,5,13],["road",0,1,4,13],["road",0,1,3,13],["road",0,1,2,13],["road",0,1,1,13],["grass",0,0,7,20],["grass",0,0,7,19],["grass",0,0,7,18],["grass",0,0,7,17],["grass",0,0,7,16],["grass",0,0,6,16],["grass",0,0,5,16],["grass",0,0,4,16],["grass",0,0,3,16],["grass",0,0,2,16],["grass",0,0,1,16],["grass",0,0,1,17],["grass",0,0,2,17],["grass",0,0,3,17],["grass",0,0,4,17],["grass",0,0,5,17],["grass",0,0,6,17],["grass",0,0,6,18],["grass",0,0,6,19],["grass",0,0,6,20],["grass",0,0,5,20],["grass",0,0,5,19],["grass",0,0,5,18],["grass",0,0,4,18],["grass",0,0,4,19],["grass",0,0,4,20],["grass",0,0,3,20],["grass",0,0,3,19],["grass",0,0,3,18],["grass",0,0,2,18],["grass",0,0,1,18],["grass",0,0,1,19],["grass",0,0,2,19],["grass",0,0,1,20],["grass",0,0,2,20],["roadTurn",0,0,10,20],["road",0,1,11,20],["road",0,1,12,20],["road",0,1,13,20],["road",0,1,14,20],["road",0,1,15,20],["road",0,1,16,20],["threeRoad",0,1,17,20],["road",0,1,18,20],["road",0,1,20,20],["sidewalkGrass",0,2,9,11],["sidewalkGrass",0,2,9,10],["grass",0,0,8,11],["grass",0,0,8,10],["grass",0,0,7,10],["grass",0,0,7,11],["grass",0,0,6,10],["grass",0,0,6,11],["grass",0,0,5,11],["grass",0,0,5,10],["grass",0,0,4,11],["grass",0,0,3,11],["grass",0,0,2,11],["grass",0,0,1,11],["grass",0,0,2,10],["grass",0,0,2,10],["grass",0,0,1,10],["grass",0,0,3,10],["grass",0,0,4,10],["grass",0,0,1,15],["grass",0,0,2,15],["grass",0,0,3,15],["grass",0,0,4,15],["grass",0,0,5,15],["grass",0,0,6,15],["grass",0,0,7,15],["grass",0,0,8,15],["grass",0,0,8,16],["grass",0,0,8,17],["grass",0,0,8,18],["grass",0,0,8,19],["grass",0,0,8,20],["sidewalkGrass",0,2,9,20],["sidewalkGrass",0,2,9,19],["sidewalkGrass",0,2,9,18],["sidewalkGrass",0,2,9,17],["sidewalkGrass",0,2,9,16],["sidewalkGrass",0,2,9,15],["sidewalkGrass",0,1,8,14],["sidewalkGrass",0,1,7,14],["sidewalkGrass",0,1,6,14],["sidewalkGrass",0,1,5,14],["sidewalkGrass",0,1,4,14],["sidewalkGrass",0,1,3,14],["sidewalkGrass",0,1,2,14],["sidewalkGrass",0,1,1,14],["sidewalkGrass",0,3,1,12],["sidewalkGrass",0,3,2,12],["sidewalkGrass",0,3,3,12],["sidewalkGrass",0,3,4,12],["sidewalkGrass",0,3,5,12],["sidewalkGrass",0,3,6,12],["sidewalkGrass",0,3,7,12],["sidewalkGrass",0,3,8,12],["sidewalkGrass",0,1,12,14],["sidewalkGrass",0,1,13,14],["sidewalkGrass",0,1,14,14],["sidewalkGrass",0,1,15,14],["sidewalkGrass",0,2,16,15],["sidewalkGrass",0,2,16,16],["sidewalkGrass",0,2,16,17],["sidewalkGrass",0,2,16,18],["sidewalkGrass",0,3,15,19],["sidewalkGrass",0,3,14,19],["sidewalkGrass",0,3,13,19],["sidewalkGrass",0,3,12,19],["sidewalkGrass",0,0,11,18],["sidewalkGrass",0,0,11,17],["sidewalkGrass",0,0,11,16],["sidewalkGrass",0,0,11,15],["sidewalkGrass",0,1,12,11],["sidewalkGrass",0,1,13,11],["sidewalkGrass",0,1,14,11],["sidewalkGrass",0,1,15,11],["sidewalkGrass",0,3,15,12],["sidewalkGrass",0,3,14,12],["sidewalkGrass",0,3,13,12],["sidewalkGrass",0,3,12,12],["threeRoad",0,2,10,10],["sidewalkGrass",0,0,18,10],["sidewalkGrass",0,0,18,11],["sidewalkGrass",0,0,18,12],["sidewalkGrass",0,0,18,13],["sidewalkGrass",0,0,18,14],["sidewalkGrass",0,0,18,15],["sidewalkGrass",0,0,18,16],["sidewalkGrass",0,0,18,17],["sidewalkGrass",0,0,18,18],["sidewalkGrass",0,3,19,19],["sidewalkGrass",0,3,20,19],["sidewalkCorner",0,3,18,19],["grass",0,0,20,18],["grass",0,0,19,18],["grass",0,0,19,17],["grass",0,0,20,17],["grass",0,0,20,16],["grass",0,0,19,16],["grass",0,0,19,15],["grass",0,0,20,15],["grass",0,0,20,14],["grass",0,0,19,14],["grass",0,0,19,13],["grass",0,0,20,13],["grass",0,0,20,12],["grass",0,0,19,12],["grass",0,0,19,11],["grass",0,0,20,11],["grass",0,0,20,10],["grass",0,0,19,10],["roadCross",0,0,10,14],["road",0,0,10,15],["grass",0,0,1,9],["grass",0,0,1,8],["grass",0,0,1,7],["grass",0,0,1,6],["grass",0,0,1,5],["grass",0,0,1,4],["grass",0,0,1,3],["grass",0,0,1,2],["grass",0,0,1,1],["grass",0,0,2,1],["grass",0,0,2,2],["grass",0,0,2,3],["grass",0,0,2,4],["grass",0,0,2,5],["grass",0,0,2,6],["grass",0,0,2,7],["grass",0,0,2,8],["grass",0,0,2,9],["grass",0,0,2,10],["grass",0,0,3,9],["grass",0,0,3,8],["grass",0,0,3,7],["grass",0,0,3,6],["grass",0,0,3,5],["grass",0,0,3,4],["grass",0,0,3,3],["grass",0,0,3,2],["grass",0,0,3,1],["grass",0,0,3,1],["grass",0,0,4,2],["grass",0,0,4,2],["grass",0,0,4,2],["grass",0,0,4,6],["grass",0,0,4,11],["grass",0,0,4,16],["grass",0,0,4,18],["grass",0,0,4,8],["grass",0,0,4,8],["grass",0,0,4,7],["grass",0,0,4,5],["grass",0,0,4,4],["grass",0,0,4,3],["grass",0,0,4,1],["grass",0,0,4,9],["grass",0,0,5,9],["grass",0,0,6,9],["grass",0,0,6,8],["grass",0,0,5,8],["grass",0,0,5,7],["grass",0,0,5,6],["grass",0,0,5,5],["grass",0,0,5,4],["grass",0,0,5,3],["grass",0,0,5,2],["grass",0,0,5,1],["grass",0,0,6,1],["grass",0,0,7,1],["grass",0,0,7,3],["grass",0,0,7,3],["grass",0,0,6,3],["grass",0,0,6,2],["grass",0,0,7,2],["grass",0,0,7,4],["grass",0,0,6,4],["grass",0,0,6,5],["grass",0,0,7,5],["grass",0,0,7,6],["grass",0,0,6,6],["grass",0,0,6,7],["grass",0,0,7,7],["grass",0,0,7,8],["grass",0,0,7,9],["grass",0,0,8,9],["grass",0,0,8,8],["grass",0,0,8,7],["grass",0,0,8,6],["grass",0,0,8,5],["grass",0,0,8,4],["grass",0,0,8,3],["grass",0,0,8,2],["grass",0,0,8,1],["sidewalkGrass",0,2,9,1],["sidewalkGrass",0,2,9,2],["sidewalkGrass",0,2,9,3],["sidewalkGrass",0,2,9,4],["sidewalkGrass",0,2,9,5],["sidewalkGrass",0,2,9,6],["sidewalkGrass",0,2,9,7],["sidewalkGrass",0,2,9,8],["sidewalkGrass",0,2,9,9],["road",0,0,10,9],["road",0,0,10,8],["road",0,0,10,7],["road",0,0,10,6],["road",0,0,10,5],["road",0,0,10,4],["road",0,0,10,2],["road",0,0,10,1],["sidewalkGrass",0,0,11,1],["threeRoad",0,2,10,3],["road",0,1,11,3],["road",0,1,12,3],["road",0,1,13,3],["road",0,1,14,3],["road",0,1,15,3],["road",0,1,16,3],["roadTurn",0,2,17,3],["road",0,0,17,4],["road",0,0,17,5],["road",0,0,17,6],["road",0,0,17,7],["road",0,0,17,8],["road",0,0,17,9],["sidewalkGrass",0,0,18,9],["sidewalkGrass",0,0,18,8],["sidewalkGrass",0,0,18,7],["sidewalkGrass",0,0,18,6],["sidewalkGrass",0,0,18,5],["sidewalkGrass",0,0,18,4],["sidewalkGrass",0,0,18,3],["sidewalkCornerReversed",0,3,18,2],["sidewalkGrass",0,3,17,2],["sidewalkGrass",0,3,16,2],["sidewalkGrass",0,3,15,2],["sidewalkGrass",0,3,14,2],["sidewalkGrass",0,3,13,2],["sidewalkGrass",0,3,12,2],["grass",0,0,12,1],["grass",0,0,13,1],["grass",0,0,14,1],["grass",0,0,15,1],["grass",0,0,16,1],["grass",0,0,17,1],["grass",0,0,18,1],["grass",0,0,19,1],["grass",0,0,20,1],["grass",0,0,20,2],["grass",0,0,19,2],["grass",0,0,19,3],["grass",0,0,20,3],["grass",0,0,20,4],["grass",0,0,19,4],["grass",0,0,19,5],["grass",0,0,20,5],["grass",0,0,20,6],["grass",0,0,19,6],["grass",0,0,19,7],["grass",0,0,20,7],["grass",0,0,20,8],["grass",0,0,19,8],["grass",0,0,19,9],["grass",0,0,20,9],["sidewalkGrass",0,2,16,8],["sidewalkGrass",0,2,16,7],["sidewalkGrass",0,2,16,6],["sidewalkGrass",0,2,16,5],["sidewalkCorner",0,1,16,4],["sidewalkGrass",0,1,15,4],["sidewalkGrass",0,1,14,4],["sidewalkGrass",0,1,13,4],["sidewalkGrass",0,1,12,4],["sidewalkCorner",0,0,11,4],["sidewalkGrass",0,0,11,5],["sidewalkGrass",0,0,11,6],["sidewalkGrass",0,0,11,7],["sidewalkGrass",0,0,11,8],["sidewalkCorner",0,3,11,9],["sidewalkGrass",0,3,12,9],["sidewalkGrass",0,3,13,9],["sidewalkGrass",0,3,14,9],["sidewalkGrass",0,3,15,9],["grass",0,0,15,8],["grass",0,0,15,7],["grass",0,0,15,6],["grass",0,0,15,5],["grass",0,0,14,5],["grass",0,0,13,5],["grass",0,0,12,5],["grass",0,0,12,6],["grass",0,0,13,6],["grass",0,0,14,6],["grass",0,0,14,7],["grass",0,0,14,8],["grass",0,0,13,8],["grass",0,0,12,8],["grass",0,0,12,7],["grass",0,0,13,7],["road",0,1,19,20],["sidewalkCorner",0,2,16,9],["sidewalkCorner",0,3,11,2]
]];