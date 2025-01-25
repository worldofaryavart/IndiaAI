'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the AshokChakra component with no SSR
const AshokChakra = dynamic(() => import('./AshokChakra'), { ssr: false });

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-1 overflow-hidden ">
                {/* Deep tech-inspired gradient background */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(
                45deg,
                rgba(250, 238, 222, 1) 0%,  // Peach
                rgba(255, 153, 51, 0.6) 50%,  // Saffron
                rgba(18, 136, 18, 0.8) 100%  // India Green
            )`,
                    }}
                    animate={{
                        background: [
                            `linear-gradient(45deg, rgba(250, 238, 222, 1) 0%, rgba(255, 153, 51, 0.6) 50%, rgba(18, 136, 18, 0.8) 100%)`,
                            `linear-gradient(135deg, rgba(250, 238, 222, 1) 0%, rgba(255, 153, 51, 0.6) 50%, rgba(18, 136, 18, 0.8) 100%)`
                        ],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 15,
                        ease: "easeInOut",
                    }}
                />

                {/* Animated tech particles */}
                <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1 }}
                >
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-32 flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1 
                            className="text-5xl md:text-7xl font-extrabold tracking-tight relative overflow-hidden backdrop-blur-sm bg-gray-900 rounded-lg p-6 shadow-lg mb-8"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* Indian Pattern Overlay */}
                            <div 
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 8c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22zm0 4c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18zm0 4c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm0 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 4c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundSize: '60px 60px'
                                }}
                            />
                            {/* Animated Pattern Overlay */}
                            <div 
                                className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 0l20 20-20 20L0 20z M20 8l12 12-12 12L8 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundSize: '40px 40px'
                                }}
                            >
                                <motion.div
                                    className="w-full h-full"
                                    animate={{
                                        backgroundPosition: ['0px 0px', '40px 40px']
                                    }}
                                    transition={{
                                        duration: 20,
                                        ease: "linear",
                                        repeat: Infinity
                                    }}
                                />
                            </div>
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <div className="flex flex-wrap justify-center">
                                    {("INDIA'S LARGEST").split('').map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            className="inline-block bg-clip-text text-transparent bg-[url('/images/hero.webp')] bg-cover bg-center"
                                            style={{
                                                fontSize: '6rem',
                                                lineHeight: '1.1',
                                                fontWeight: '800',
                                                backgroundPosition: `${-50 * index}px center`
                                            }}
                                            initial={{ y: -50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: index * 0.1,
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }}
                                            whileHover={{
                                                scale: 1.2,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {letter === ' ' ? '\u00A0' : letter}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-center">
                                    {"AI COMMUNITY".split('').map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            className="inline-block bg-clip-text text-transparent bg-[url('/images/hero.webp')] bg-cover bg-center"
                                            style={{
                                                fontSize: '6rem',
                                                lineHeight: '1.1',
                                                fontWeight: '800',
                                                backgroundPosition: `${-50 * index}px center`
                                            }}
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: index * 0.1 + 0.5,
                                                duration: 0.5,
                                                ease: "easeOut"
                                            }}
                                            whileHover={{
                                                scale: 1.2,
                                                rotateY: 180,
                                                transition: { duration: 0.3 }
                                            }}
                                        >
                                            {letter === ' ' ? '\u00A0' : letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                delay: 1.2,
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ 
                                    delay: 1.5,
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                Join our thriving community of AI enthusiasts, developers, and innovators.
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ 
                                    delay: 1.8,
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                Together, we're shaping the future of AI in India.
                            </motion.span>
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                        >
                            <button className="group relative px-8 py-4 rounded-full overflow-hidden">
                                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 group-hover:scale-110"></div>
                                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)]"></div>
                                <span className="relative text-white font-semibold text-lg">
                                    Join Community
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Animated background particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: Math.random() * 0.5 + 0.3,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [null, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;