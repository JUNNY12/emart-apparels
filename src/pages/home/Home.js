import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Explore from "./exploreSection/ExploreSection"
import StorySection from "./storySection/StorySection"
import HomeGallery from "./gallerySection/GallerySection"
import "./home.css"


const Home = () => {
    return(
        <div>
            <div><Nav /> </div>
            <div><Hero /></div>
            <div><Explore /></div>
            <div><StorySection /></div>
            <div><HomeGallery /></div>
            <div><Footer /></div>
        </div>
    )
}

export default Home