const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid red",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }}>

    </div>
)
const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        position: "absolute",
        background: "red",
        top: "120px",
        right: 0
    }}>

    </div>
)
const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        position: "absolute",
        background: "red",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}>

    </div>
)
const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        position: "absolute",
        background: "red",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}>

    </div>
)
const RIGHT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        position: "absolute",
        background: "red",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}>

    </div>
)
const LEFT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        position: "absolute",
        background: "red",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}>

    </div>
)

const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG];

type HangmanDrawingProps = {
    numOfGuess: number
}
export default function HangmanDrawing({numOfGuess}: HangmanDrawingProps){
    console.log(numOfGuess);
    return <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0,numOfGuess)}
       <div style={{
        height: "50px",
        width: "10px",
        background: "black",
        position: "absolute",
        top: 0,
        right: 0
      }}></div>
      <div style={{
        height: "10px",
        width: "200px",
        background: "black",
        marginLeft: "120px"
      }}></div>
      <div style={{
        height: "400px",
        width: "10px",
        background: "black",
        marginLeft: "120px"
      }}></div>
      <div style={{
        height: "10px",
        width: "250px",
        background: "black"
      }}></div>
    </div>
}