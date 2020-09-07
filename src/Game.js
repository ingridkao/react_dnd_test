let knightPosition = [0, 0];
let observer = null;

//發出變化
function emitChange() {
    observer(knightPosition);
}

export function observe(position) {
    // const randPos = () => Math.floor(Math.random() * 8);
    // setInterval(() => position([randPos(), randPos()]), 1000);
    if(observer){
        throw new Error('Multiple observers not implemented.');
    }
    observer = position;
    emitChange();
}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}

//只能遵循騎士的走法
//only allowed to make L-shaped moves
export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y
  
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}