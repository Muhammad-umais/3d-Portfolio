import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* PROJECT 1: MacBook */}
                    <div ref={rydeRef} className="first-project-wrapper">
                        <a href="https://macbook-clone-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <div className="image-wrapper clickable-card" style={{ backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img
                                    src="/images/macbook_website.png"
                                    alt="Ryde App Interface"
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                        </a>

                        <div className="text-content" style={{ marginTop: '10px' }}>
                            <h2 className="text-white font-bold" style={{ marginBottom: '8px', lineHeight: '1.2' }}>
                                MacBook: Boosting Sales through Interactive 3D Product Experiences
                            </h2>
                            <p className="text-white-50 md:text-xl" style={{ marginTop: '0' }}>
                                I integrated interactive 3D models that allow customers to engage
                                directly with products, significantly increasing conversion rates.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        {/* PROJECT 2: Library Platform */}
                        <div className="project" ref={libraryRef}>
                            <a href="https://cocktail-landing-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <div className="image-wrapper clickable-card bg-[#FFEFDB]">
                                    <img
                                        src="/images/cocktail.png"
                                        alt="Library Management Platform"
                                    />
                                </div>
                            </a>
                            <h2>Cocktail Bar Website</h2>
                        </div>

                        {/* PROJECT 3: YC Directory */}
                        <div className="project" ref={ycDirectoryRef}>
                            {/*<a href="https://your-yc-link.vercel.app" target="_blank" rel="noopener noreferrer">*/}
                                <div className="image-wrapper clickable-card bg-[#FFE7EB]">
                                    <img src="/images/project3.png" alt="YC Directory App" />
                                </div>
                            {/*</a>*/}
                            <h2>YC Directory - A Startup Showcase App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;