import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"
import Hero from "./hero/Hero"
import Explore from "./exploreSection/ExploreSection"
import StorySection from "./storySection/StorySection"
import HomeGallery from "./gallerySection/GallerySection"
import "./home.css"


const Home = () => {
    return(
        <div>
            <div><Hero /></div>
            <div><Explore /></div>
            <div><StorySection /></div>
            <div><HomeGallery /></div>
        </div>
    )
}

export default Home