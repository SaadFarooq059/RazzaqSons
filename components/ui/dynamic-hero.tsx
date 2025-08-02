"use client";

import React, { useEffect, useRef, useCallback, useState } from 'react';
import Link from 'next/link';
import { Pill, Play } from 'lucide-react';

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString: string) => {
    if (!colorString) return null;
    const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (match) {
        return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10),
        };
    }
    return null;
};

// Play Icon using Lucide React
const PlayIcon = ({ className = "w-6 h-6" }) => (
    <Play className={className} fill="currentColor" />
);

interface NavItem {
    id: string;
    label: string;
    href?: string;
    target?: string;
    onClick?: () => void;
}

interface HeroSectionProps {
    heading?: string;
    tagline?: string;
    buttonText?: string;
    imageUrl?: string;
    videoUrl?: string;
    navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'how-we-help', label: 'How We Help', href: '/how-we-help' },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'contact', label: 'Contact Us', href: '/contact' },
];

const HeroSection: React.FC<HeroSectionProps> = ({
    heading = "Leading Pharmaceutical Supply Company",
    tagline = "Providing quality medicines and healthcare solutions across Pakistan since 2010. Your trusted partner in pharmaceutical distribution and healthcare excellence.",
    buttonText = "Get Started",
    imageUrl = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    videoUrl,
    navItems = defaultNavItems,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const targetRef = useRef<HTMLButtonElement>(null);
    const mousePosRef = useRef({ x: null as number | null, y: null as number | null });
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(false);

    const resolvedCanvasColorsRef = useRef({
        strokeStyle: { r: 59, g: 130, b: 246 }, // Blue-500 as default
    });

    useEffect(() => {
        const tempElement = document.createElement('div');
        tempElement.style.display = 'none';
        document.body.appendChild(tempElement);

        const updateResolvedColors = () => {
            // Use blue color for the arrow
            resolvedCanvasColorsRef.current.strokeStyle = { r: 59, g: 130, b: 246 }; // Blue-500
        };
        updateResolvedColors();

        return () => {
            if (tempElement.parentNode) {
                tempElement.parentNode.removeChild(tempElement);
            }
        };
    }, []);

    const drawArrow = useCallback(() => {
        if (!canvasRef.current || !targetRef.current || !ctxRef.current) return;

        // Get hero section bounds
        const heroSection = canvasRef.current.closest('.hero-section');
        if (!heroSection) return;
        
        const heroRect = heroSection.getBoundingClientRect();
        const mouse = mousePosRef.current;
        
        // Only draw arrow if mouse is within hero section
        if (mouse.x === null || mouse.y === null || 
            mouse.x < heroRect.left || mouse.x > heroRect.right ||
            mouse.y < heroRect.top || mouse.y > heroRect.bottom) {
            return;
        }

        const targetEl = targetRef.current;
        const ctx = ctxRef.current;

        const x0 = mouse.x;
        const y0 = mouse.y;

        if (x0 === null || y0 === null) return;

        const rect = targetEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const a = Math.atan2(cy - y0, cx - x0);
        const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
        const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

        const midX = (x0 + x1) / 2;
        const midY = (y0 + y1) / 2;
        const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
        const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
        const controlX = midX;
        const controlY = midY + offset * t;
        
        const r = Math.sqrt((x1 - x0)**2 + (y1 - y0)**2);
        const opacity = Math.min(1.0, (r - Math.max(rect.width, rect.height) / 2) / 500); 

        const arrowColor = resolvedCanvasColorsRef.current.strokeStyle;
        ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
        ctx.lineWidth = 2;

        // Draw curve
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(controlX, controlY, x1, y1);
        ctx.setLineDash([10, 5]);
        ctx.stroke();
        ctx.restore();

        // Draw arrowhead
        const angle = Math.atan2(y1 - controlY, x1 - controlX);
        const headLength = 10 * (ctx.lineWidth / 1.5); 
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(
            x1 - headLength * Math.cos(angle - Math.PI / 6),
            y1 - headLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.moveTo(x1, y1);
        ctx.lineTo(
            x1 - headLength * Math.cos(angle + Math.PI / 6),
            y1 - headLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.stroke();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !targetRef.current) return;

        ctxRef.current = canvas.getContext("2d");
        const ctx = ctxRef.current;

        const updateCanvasSize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("mousemove", handleMouseMove);
        updateCanvasSize();

        const animateLoop = () => {
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawArrow();
            }
            animationFrameIdRef.current = requestAnimationFrame(animateLoop);
        };
        
        animateLoop();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [drawArrow]);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement && videoUrl) {
            const handleVideoEnd = () => {
                setShowVideo(false);
                videoElement.currentTime = 0;
            };

            if (showVideo) {
                videoElement.play().catch(error => {
                    console.error("HeroSection: Error playing video:", error);
                    setShowVideo(false);
                });
                videoElement.addEventListener('ended', handleVideoEnd);
            } else {
                videoElement.pause();
            }

            return () => {
                videoElement.removeEventListener('ended', handleVideoEnd);
            };
        }
    }, [showVideo, videoUrl]);

    const handlePlayButtonClick = () => {
        if (videoUrl) {
            setShowVideo(true);
        }
    };

    const handleGetStarted = () => {
        // Scroll to contact section or navigate to contact page
        window.location.href = '/contact';
    };

    return (
        <div className="hero-section bg-white text-foreground min-h-screen flex flex-col">
            <nav className="w-full max-w-screen-lg mx-auto flex flex-wrap justify-between items-center px-4 sm:px-8 py-6">
                <div className="flex items-center space-x-2">
                    <Pill className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold text-gray-900">Razzaq Sons</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2">
                    {navItems.map((item) => {
                        const commonProps = {
                            key: item.id,
                            className: "py-2 px-3 sm:px-4 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-150 ease-in-out whitespace-nowrap text-sm font-medium",
                        };
                        
                        if (item.href) {
                            return (
                                <Link href={item.href} {...commonProps}>
                                    {item.label}
                                </Link>
                            );
                        }
                        
                        return (
                            <button type="button" onClick={item.onClick} {...commonProps}>
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </nav>

            <main className="flex-grow flex flex-col items-center justify-center px-4">
                <div className="mt-12 sm:mt-16 lg:mt-24 flex flex-col items-center text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
                        {heading}
                    </h1>
                    <p className="mt-6 text-gray-600 text-lg sm:text-xl px-4 max-w-3xl leading-relaxed">
                        {tagline}
                    </p>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        ref={targetRef}
                        onClick={handleGetStarted}
                        className="py-3 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
                    >
                        {buttonText}
                    </button>
                </div>

                <div className="mt-12 lg:mt-16 w-full max-w-4xl mx-auto overflow-hidden px-4 sm:px-2">
                    <div className="bg-gray-200 rounded-[2rem] p-[0.25rem] shadow-2xl">
                        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-[1.75rem] bg-white flex items-center justify-center overflow-hidden">
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="Pharmaceutical Supply Chain"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                                        showVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'
                                    }`}
                                />
                            )}
                            {videoUrl && (
                                <video
                                    ref={videoRef}
                                    src={videoUrl}
                                    muted
                                    playsInline
                                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                                        showVideo ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                                />
                            )}
                            {!showVideo && videoUrl && imageUrl && (
                                <button
                                    onClick={handlePlayButtonClick}
                                    className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 p-2 sm:p-3 bg-blue-600/80 hover:bg-blue-700/80 text-white backdrop-blur-sm rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label="Play video"
                                >
                                    <PlayIcon className="w-4 h-4 sm:w-5 sm:h-6" />
                                </button>
                            )}
                            {!imageUrl && !videoUrl && (
                                <div className="text-gray-500 italic">Pharmaceutical Supply Solutions</div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <div className="h-12 sm:h-16 md:h-24"></div>
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10"></canvas>
        </div>
    );
};

export { HeroSection };