import React from "react";
import Header from "../Header";
import { BsWhatsapp } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import atlantis from "../../assets/images/atlantis.jfif"
import Butterfly from "../../assets/images/Butterfly.jfif"
import divne from "../../assets/images/divne.jfif"
import Ferrari from "../../assets/images/Ferrari.jfif"
import first from "../../assets/images/first.jfif"
import frame from "../../assets/images/frame.jfif"
import helo from "../../assets/images/helo.jpg"
import GreenPlanet from "../../assets/images/GreenPlanet.jfif"
import laguna from "../../assets/images/laguna.jfif"
import Legoland from "../../assets/images/Legoland.jfif"
import mesume from "../../assets/images/mesume.jfif"
import Mirale from "../../assets/images/Mirale.jfif"
import motion from "../../assets/images/motion.jfif"
import Palm from "../../assets/images/Palm.jfif"
import Shrjah from "../../assets/images/Shrjah.jpg"
import ski from "../../assets/images/ski.jfif"
import water from "../../assets/images/water.jfif"
import Wonder from "../../assets/images/Wonder.jfif"
import zoo from "../../assets/images/zoo.jfif"
import Image1 from "../../assets/images/slider1.jpg"

import "./sliderdetail.css"

const SliderDetail = () => {
    return (
        <>
            <Header />
            <div className="detail_page_hero_section">
                <div className="hero_headings" style={{ backgroundImage: `url(${Image1})`, backgroundSize: "100%", backgroundPosition: "center", height: "50vh" }}></div>
            </div>
            <div className="email_num_wrapper">
                <div></div>
                <div className="detail_email">
                    <div className="wp1">
                        <div>
                            <BsWhatsapp />
                        </div>{" "}
                        +971 52 517 9596
                    </div>
                    <div className="wp1">
                        <div>
                            <MdMarkEmailRead />
                        </div>{" "}
                        abc@gmail.com
                    </div>
                </div>
            </div>
            <div className="container-fluid custom_container mt-5">
                <div className="detail_page_content_wrapper">
                    <div className="main_d_wrapper">
                    <div className="s_detail_heading mt-2">Burj Khalifa 124th Floor

</div>
                        <div className="slider_detail_wrapper">

                            <div className="slider_detail_imag"><div>
                               
                                <div>
                                    <img src={first} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Zoom up the tallest building in the world, the Burj Khalifa in the
                                fastest double-deck elevator climbing at 10m/sec. Once you’ve made it to the observation deck,
                                enjoy a bird’s eye view of Dubai’s stunning expanse from the two observation decks. Depending
                                on the ticket you buy for Burj Khalifa, you are granted access to either one or both the decks.
                                ⦁	Please carry the ticket voucher along with a copy of your passport or the Emirates ID. You’ll need to present them before the staff of the ‘Desert safari Dubai’ Will Call counter
                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Dubai Aquarium & Underwater Zoo
                                </div>
                        <div className="slider_detail_wrapper">
                        
                            <div className="slider_detail_imag"><div>
                               
                                <div>
                                    <img src={zoo} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Age is but a number when you find yourself standing in front of an immense glass wall that separates you from some of the world’s most beautiful and prodigious underwater fauna. Just as children can’t help but stick their noses against the glass, adults are also taken aback by the sight of immense sharks and enormous stingrays gliding through the water in front of our eyes. This type of visit is suitable for tourists of all ages. You may have visited many zoos or aquariums in the past, but the Dubai Aquarium & Underwater Zoo— just like everything else in Dubai— is of enormous dimensions.
                                Besides marvelling at these underwater wonders.
                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">The Dubai Frame
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                               
                                <div>
                                    <img src={frame} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">The Dubai Frame is one of the city’s most famous attractions for visitors and residents alike. Much like the Burj Khalifa and Burj Al Arab's iconic structures, the building's landmark location in Zabeel Park provides panoramic views of the city.
                                At 150m tall and 93m wide with a bridge connecting the two towers, Dubai Frame has a unique concept to its structure. Resembling a picture frame, Dubai's historic district can be seen to the north while the south provides breathtaking vistas of the modern cityscape.
                                Beyond the stunning views.

                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Helicopter Ride
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                              
                                <div>
                                    <img src={helo} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Taking an aerial tour of Dubai is a great way to see all the city sights at once. Desert safari Dubai provides helicopter tours over the city and its landmarks. From your unique vantage point, admire landmarks such as the renowned Burj Khalifa (the world’s tallest tower), the iconic Burj Al Arab and the spectacular Palm Jumeirah man-made islands.
                                Jump onto one of the highly versatile AS350 helicopters, which have been involved in the filming of Fast and Furious 7, Top Gear, National Geographic, and the Red Bull’s Air Race. Packages include photography tours to get that perfect shot above the Dubai skyscrapers.

                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Museum of the Future
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                              
                                <div>
                                    <img src={mesume} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">One of Dubai's most famous landmarks, the Museum of the Future (MOTF) takes pride of place along the city's superhighway, Sheikh Zayed Road. Founded by the Dubai Future Foundation and launched on 22 February 2022, the museum explores how society could evolve in the coming decades using science and technology.
                                Termed a 'living museum', it incorporates elements of traditional exhibitions, immersive theatre and themed attractions, so visitors can look beyond the present and towards the future's limitless possibilities. Furthering a global intellectual movement, it's also the headquarters for the city's ‘Great Arab Minds’ initiative that aims to identify 1,000 exceptional A Museum of the Future design and architecture

                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Atlantis Aquaventure
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                             
                                <div>
                                    <img src={atlantis} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Explore the world's largest waterpark in Dubai, Aquaventure Waterpark that promises you a whirlpool of rides, slides and attractions that makes you feel #DifferentInWater. Immerse yourself in the Atlantis Aquaventure water theme park that brings you some of the record-breaking slides with Surf's Up Wave Rider, and the largest aquarium in Dubai. Get your Aquaventure Waterpark Tickets with us to spend a day filled with new rides and new waves at the waterpark. Enjoy the delightful experience of witnessing marine animals and the phenomenal rides that takes you on a different journey with your loved ones. Your new adventure and exploration are just one tap away.</div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Wild Wide Water Park
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                               
                                <div>
                                    <img src={water} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Wild Wadi Water Park is the largest water park in Dubai and also one of the most exciting ones. Located next to Hotel Burj Al Arab, this water park has way too many awards for being one of the best in the world. The park has been designed in the theme of an Arabian folklore of Juha and Sindbad, making it an interesting water park. Wild Wadi is a great place to spend your weekends. The 25 rides and roller coasters would give you the needed adrenaline boost to let go of your tensions. If you are a lover of adventure, there are several rides that you would enjoy. Some of these include Jumeirah Sceirah, Ring Rides,
                                Master Blaster, Breakers Bay, Wipeout, Riptide, </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Ferrari World Theme Park
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                              
                                <div>
                                    <img src={Ferrari} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Get all-day access to Ferrari World Abu Dhabi, home to the world's highest roller coaster loop.
                                This is a must-visit on every thrill seeker's itinerary!.
                                Make your way to the first Ferrari-branded theme park in the world.
                                Explore an operating Ferrari factory and go-kart racing with your family.
                                Ride the world's fastest roller coaster, the Formula Rossa, at heart-racing heights.
                                Tour a mini-Italy in a small-scale Ferrari 250 California, circa 1958.

                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Ski Dubai
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                               
                                <div>
                                    <img src={ski} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Located inside the Dubai Mall of the Emirates, Ski Dubai is the world's third-largest indoor ski slope and the first to open in the Middle East. With a chair lift and a T-bar, 6,000 tons of snow are at your disposal. Whether you just want to learn the basics or get good enough to fly off a ten ramp, our qualified instructors will help you improve your skills and have you carving up the powder in no time! Practice jumps, ramps, and tricks in the dedicated freestyle zone. You can now meet the Snow Penguins in an up close and personal one-of-a-kind intimate encounter that the whole family will love.</div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Sky Dive
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                              
                                <div>
                                    <img src={divne} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Whether you are looking for an outdoor or indoor skydiving experience, the city of Dubai has you covered. Choose to jump 13,000 ft high to enjoy the stunning views of the Palm or the glorious desert. Alternatively, you can opt for I Fly Dubai if you simply like to experience the sensation of freefall, in a safe, controlled environment.
                                Adventure enthusiasts can now kick skydiving off their bucket list. The Skydive Dubai facility has reopened its doors to the public, after a closure due to the COVID-19 pandemic. Here are all the things you should know before skydiving in Dubai:
                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Motion gate Dubai
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                             
                                <div>
                                    <img src={motion} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Visit MOTIONGATE theme park to dive into a world of innovation and creative storytelling. Experience world-class
                                entertainment from three of Hollywood's biggest and most successful motion picture studios - DreamWorks Animation, Columbia Pictures, and Lionsgate.
                                Experience the thrill of playing the hero in your favorite Hollywood movie.
                                Head towards the Hollywood Theater to watch a high-energy Hip Hop show.
                                Get your adrenaline pumping on thrilling roller coasters and action-packed rides.

                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Legoland Dubai
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                              
                                <div>
                                    <img src={Legoland} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Build your way through non-stop interactive fun at LEGOLAND® Dubai. With over 40 LEGO® themed rides, shows, building experiences, and attractions. It is the perfect day out for families with children aged 2-12.
                                Ticket(s) must be purchased online through our appointed third-party authorized ticket seller.
                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Dubai Butterfly Garden
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                               
                                <div>
                                    <img src={Butterfly} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Bypass the long queues and stroll through climate-controlled lush domes housing around 15,000 butterflies at Dubai Butterfly Garden, the largest covered butterfly garden.
                                Do not wait in the long queues at the world's largest butterfly garden with skip-the-line tickets to Dubai Butterfly Garden.
                                Located in Dubai Miracle Garden, the Dubai Butterfly Garden has 15,000 butterflies and around 50 species of butterflies in different colors.
                                Kids will love learning about the lifecycle of butterflies through each stage.

                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Dubai Miracle Garden
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                              
                                <div>
                                    <img src={Mirale} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Do not waste time standing in long lines with this skip-the-line ticket and explore the world’s largest natural flower garden.
                                Imagine the scent of blooming flowers wafting against the hot air of the desert. Or the sight of vibrant-colored blossoms against the backdrop of Dubai's barren desert. That is what it will feel like to enter Dubai Miracle Garden. Home to over 150 million blooms, the garden is famous for its elaborate horticultural arrangements. This ticket gives you priority access to the floral wonderland - ensuring you don't have to wait in long lines at the entrance of this popular attraction.
                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">Wonder Bus Tour Dubai
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                              
                                <div>
                                    <img src={Wonder} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Dubai is a place where you can witness some of the most amazing things in the world while experiencing incredible tourist expeditions and attractions. Wonder Bus Dubai running on the roads of Dubai and floating on the waters of the Old Creek is one of these unique attractions. It is the first water and road bus of its kind that you won’t be able to find anywhere else except in Dubai. Equipped with some of the modern amenities and facilities, Dubai’s Wonder Bus offers its travelers a completely new and astounding travel experience across this international tourist place. This bus has been equipped with an internal bathroom, air-condition, sound system, DVD Player, and TV, and has been festooned with attractive internal decoration.</div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">The Palm View Tickets
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                             
                                <div>
                                    <img src={Palm} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Head to The View at the Palm observatory at the top of the Palm Tower for an unparalleled sight of Dubai's towering skyline. Book The View at the Palm tickets to enjoy fast-tracking entry into the Palm Tower or choose combo tickets that offer access to top attractions such as the Dubai Frame and Burj Khalifa.
                                All areas that customers frequently touch are sanitized.
                                Guests may/may not be subject to temperature checks beforehand.
                                All guests are recommended to bring along face masks for safety.

                            </div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">laguna Water Park
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                             
                                <div>
                                    <img src={laguna} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">Discover one of the most exhilarating water parks in the world, as you encounter free falls and twists around the numerous water-themed rides in Laguna Waterpark. Experience a wide range of attractions, from zero-gravity rides in the tubular waterslides and optical illusions of going over the edge to a lazy drift along the aptly named Lazy River around the water park.</div>
                        </div>
                        <hr />
                        <div className="s_detail_heading">The Green Planet Dubai
                                </div>
                        <div className="slider_detail_wrapper">
                            <div className="slider_detail_imag"><div>
                               
                                <div>
                                    <img src={GreenPlanet} className="s_img" />
                                </div>
                            </div></div>
                            <div className="s_detail">The Green Planet was conceptualized to bring together nature and the science of nature, which when combined invite, amaze, and inspire an appreciation of our natural world.  Explore the enchanting bio-dome, a tropical indoor rainforest sustaining over three thousand plants & animals.
                                Explore and interact with a whole new world of exotic flora and fauna in this fully immersive vertical tropical forest. We invite you to uncover the significant role that tropical forests play in the future of our planet. </div>
                        </div>
                        <hr />
                    </div>
                    <div className="form_wrapper">
                        <div className="conatact_forom_inner">
                            <div className="form_heading">Booking Your Tour</div>
                            <div className="input_wrapper">
                                <input
                                    placeholder="Please enter your name"
                                    className="input_self"
                                />
                            </div>
                            <div className="input_wrapper">
                                <input
                                    placeholder="Please enter your email"
                                    className="input_self"
                                />
                            </div>
                            <div className="small_inputs_wrapper">
                                <div className="input_wrapper">
                                    <input placeholder="Country code" className="input_self" />
                                </div>
                                <div className="input_wrapper">
                                    <input placeholder="Phone num" className="input_self" />
                                </div>
                            </div>
                            <div className="small_inputs_wrapper">
                                <div className="input_wrapper">
                                    <input type="date" className="input_self" />
                                </div>
                                <div className="input_wrapper">
                                    <input placeholder="Num of tickets" className="input_self" />
                                </div>
                            </div>

                            <textarea
                                class="form-control custom_text"
                                placeholder="Type your message!"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>

                            <div className="form_btn">
                                {" "}
                                Send{" "}
                                <div className="mt-2">
                                    <SiMinutemailer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderDetail;
