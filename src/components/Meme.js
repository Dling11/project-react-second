
import memeData from "../memeData"
import React from "react"


function Meme() {

    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/21uy0f.jpg")
    function getRandomImage() {
        const memesArray = memeData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        // const url = memesArray[randomMeme].url // we Can also use this as destructure => const {url} = memeData[randomMeme]
        setMemeImage(e=> {
            return e = memesArray[randomMeme].url ;
        })

    }

    return (
        <main className="hero-main">
            <form onSubmit={e=> e.preventDefault()} className="myForm" >
                <div className="my-inputs-all">
                    <input type="text" className="myinput" placeholder="Create Meme" />
                    <input type="text" className="myinput" placeholder="Create Meme" />
                </div>
                <div className="btn-sumbit">
                    <button 
                        type="submit"
                        onClick={getRandomImage}
                    >Get a new meme Image 
                        <i className="uil uil-image icon-img"></i> 
                    </button>
                </div>
                    <img src={memeImage} alt="randomImage" className="meme-image" />
            </form>
        </main>
    )
}

export default Meme