import  { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Star, Coffee, Music, Camera, MapPin, Calendar, Gift, Sparkles, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heartsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation
      gsap.from('.fade-in', {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out'
      });

      // Scroll-triggered animations
      gsap.utils.toArray('.scroll-reveal').forEach((element: any) => {
        gsap.from(element, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Floating animation for background elements
      gsap.to('.float', {
        y: -15,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.8
      });

      // Continuous heart creation
      const createFloatingHeart = () => {
        const hearts = ['💖', '💕', '💗', '💝', '🤍', '💜', '💙', '🧡', '💛'];
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.className = 'absolute text-2xl pointer-events-none select-none opacity-60';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.zIndex = '1';
        
        if (heartsRef.current) {
          heartsRef.current.appendChild(heart);
        }

        gsap.to(heart, {
          y: -window.innerHeight - 100,
          x: (Math.random() - 0.5) * 300,
          rotation: Math.random() * 360,
          opacity: 0,
          duration: 8 + Math.random() * 4,
          ease: 'none',
          onComplete: () => heart.remove()
        });
      };

      const heartInterval = setInterval(createFloatingHeart, 1200);
      
      return () => clearInterval(heartInterval);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleProposal = () => {
    setShowFinalMessage(true);
    
    // Create massive celebration effect
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      const particles = ['💖', '✨', '🎉', '🌟', '💕', '🥳', '🎊', '💜', '🧡'];
      particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
      particle.className = 'absolute text-2xl pointer-events-none z-50';
      particle.style.left = '50%';
      particle.style.top = '50%';
      document.body.appendChild(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 800,
        rotation: Math.random() * 720,
        opacity: 0,
        duration: 3,
        ease: 'power2.out',
        delay: i * 0.03,
        onComplete: () => particle.remove()
      });
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ourMoments = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "The Day We First Met",
      date: "A day I'll never forget",
      description: "I still remember exactly how you looked, what you wore, and how my heart skipped when you smiled at me for the first time.",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Our First Coffee Together",
      date: "The beginning of everything",
      description: "That nervous excitement when we sat across from each other, talking for hours like we'd known each other forever.",
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "When You Shared Your Favorite Song",
      date: "Now it's my favorite too",
      description: "The way your eyes lit up when you played that song for me - it became the soundtrack to my feelings for you.",
      image: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Late Night Conversations",
      date: "When time didn't matter",
      description: "Those endless talks under the stars, sharing dreams and secrets, when I realized you were becoming my everything.",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Every Photo We Took",
      date: "Captured happiness",
      description: "Each picture holds a memory, a laugh, a moment when I fell a little deeper in love with you.",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "All The Places We've Been",
      date: "Adventures together",
      description: "Every place becomes special when I'm with you. You make ordinary moments feel like magic.",
      image: "https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const whyILoveYou = [
    {
      icon: "✨",
      title: "Your Beautiful Smile",
      description: "It lights up every room you enter and makes my heart race every single time."
    },
    {
      icon: "🌟",
      title: "Your Kind Heart",
      description: "The way you care for others and show compassion makes you absolutely incredible."
    },
    {
      icon: "💫",
      title: "Your Amazing Laugh",
      description: "It's the most beautiful sound in the world and I want to hear it every day."
    },
    {
      icon: "🌸",
      title: "Your Unique Personality",
      description: "Everything about you - your quirks, your dreams, your way of seeing the world - is perfect."
    },
    {
      icon: "🦋",
      title: "How You Make Me Feel",
      description: "With you, I feel like the best version of myself. You inspire me to be better every day."
    },
    {
      icon: "🌈",
      title: "Your Beautiful Soul",
      description: "You're not just beautiful on the outside - your soul is the most beautiful thing about you."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Floating hearts container */}
      <div ref={heartsRef} className="fixed inset-0 pointer-events-none z-10" />
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="float absolute top-20 left-10 text-pink-300/30 text-8xl">💕</div>
        <div className="float absolute top-60 right-16 text-purple-300/30 text-6xl">✨</div>
        <div className="float absolute bottom-40 left-16 text-rose-400/30 text-7xl">💖</div>
        <div className="float absolute bottom-20 right-20 text-indigo-300/30 text-5xl">🌟</div>
        <div className="float absolute top-1/3 right-1/3 text-pink-200/20 text-9xl">💝</div>
        <div className="float absolute bottom-1/3 left-1/4 text-purple-200/25 text-6xl">🦋</div>
      </div>

      <div className="relative z-20">
        {!showFinalMessage ? (
          <>
            {/* Header */}
            <header className="fade-in bg-white/20 backdrop-blur-md border-b border-white/30 sticky top-0 z-40">
              <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl animate-pulse">💖</div>
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-dancing">
                      For My Beautiful Jaanum
                    </h1>
                    <div className="text-3xl animate-pulse">💖</div>
                  </div>
                </div>
              </div>
            </header>

            <main className="container mx-auto px-6 py-12">
              {/* Hero Section */}
              <section className="fade-in text-center mb-24">
                <div className="mb-12">
                  <div className="text-8xl mb-6 animate-bounce">💌</div>
                  <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent mb-8 font-dancing leading-tight">
                    Hey Jaanum...
                  </h2>
                  <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                    I made this entire website just for you because some feelings are too big for just words... 
                  </p>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    There's something I've been wanting to tell you for the longest time, and I hope this shows you just how much you mean to me. 💕
                  </p>
                </div>
              </section>

              {/* Why You're Special Section */}
              <section className="scroll-reveal mb-24">
                <div className="text-center mb-16">
                  <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 font-dancing">
                    Why You're So Special, Jaanum
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Let me tell you all the reasons why you make my heart skip a beat...
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {whyILoveYou.map((reason, index) => (
                    <div key={index} className="scroll-reveal bg-white/50 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/60">
                      <div className="text-center">
                        <div className="text-6xl mb-6">{reason.icon}</div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-4 font-dancing">{reason.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>


              {/* Love Letter Section */}
              <section className="scroll-reveal mb-24">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-12 md:p-16 shadow-2xl border border-white/40">
                    <div className="text-center mb-12">
                      <div className="text-7xl mb-6">💝</div>
                      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 font-dancing">
                        A Letter to Your Heart
                      </h3>
                    </div>
                    
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                   <p className="text-xl md:text-2xl font-medium text-center mb-8 text-gray-800">
                      Dear Jaanum,
                    </p>

                    <p className="text-lg md:text-xl">
                      Before you start overthinking this message… relax. This is not a dramatic movie confession scene. No violins, no background music, just me sitting here trying to write something without sounding too serious.
                    </p>

                    <p className="text-lg md:text-xl">
                      Somehow our normal conversations always turn into a full adventure. We start with one simple topic and suddenly we’re laughing about something completely random. And the fact that you laugh at my terrible jokes is honestly still one of my proudest achievements.
                    </p>

                    <p className="text-lg md:text-xl">
                      Also, I’ve noticed something strange… because of you I now check my phone way more than I should. If my productivity in life ever drops, I’m officially blaming you for it.
                    </p>

                    <p className="text-lg md:text-xl">
                      Another funny thing is how sometimes you think I’m secretly planning something suspicious even when I’m being completely normal. Your detective mode is always on. But honestly, that’s part of what makes talking to you so entertaining.
                    </p>

                    <p className="text-lg md:text-xl">
                      Jokes aside, I really admire how passionate you are about the things you care about. You see the world with a kind of curiosity and kindness that’s honestly rare. Being around that kind of energy quietly makes me want to become a slightly better version of myself.
                    </p>

                    <p className="text-lg md:text-xl">
                      Somewhere between all the random talks, the teasing, and the pointless arguments… you somehow became one of the nicest parts of my day. Even if you still think I’m suspicious half the time.
                    </p>

                    <p className="text-xl md:text-2xl font-bold text-center mt-12 text-gray-800">
                      Anyway… thank you for being you. And please continue tolerating me. 🙂
                    </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Big Question */}
              <section className="scroll-reveal mb-24">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-12 md:p-16 shadow-2xl text-white">
                    <div className="text-8xl mb-8">💍</div>
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 font-dancing">
                      Jaanum, Will You Be Mine?
                    </h3>
                    <p className="text-xl md:text-2xl mb-12 leading-relaxed">
                      I want to create a million more beautiful memories with you. I want to be the reason you smile every day. I want to love you with all my heart, today and always.
                    </p>
                    
                    <button
                      onClick={handleProposal}
                      className="group bg-white text-pink-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-pink-50"
                    >
                      <span className="flex items-center space-x-4">
                        <Heart className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
                        <span>Click to See My Heart</span>
                        <Heart className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                </div>
              </section>

              {/* Promise Section */}
              <section className="scroll-reveal mb-24">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 font-dancing">
                      My Promises to You
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
  icon: <Heart className="w-8 h-8" />,
  title: "To Survive Your Mood Swings",
  description: "Even when you randomly decide to be mad at me for reasons I still haven't discovered."
},
{
  icon: <Star className="w-8 h-8" />,
  title: "To Support Your Crazy Ideas",
  description: "Whether your plans are brilliant, questionable, or slightly chaotic… I’ll still be cheering for you."
},
{
  icon: <Sparkles className="w-8 h-8" />,
  title: "To Keep You Smiling",
  description: "Even if it means making terrible jokes or acting a little stupid just to see you laugh."
},
{
  icon: <Gift className="w-8 h-8" />,
  title: "To Enjoy Our Random Moments",
  description: "Because somehow our normal conversations always turn into the most entertaining chaos."
},
{
  icon: <Sparkles className="w-8 h-8" />,
  title: "To Clear My Name",
  description: "One day I will successfully prove that I'm actually innocent of all the things you accuse me of."
}
                    ].map((promise, index) => (
                      <div key={index} className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                            {promise.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3 font-dancing">{promise.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{promise.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </main>
          </>
        ) : (
          /* Final Message */
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 md:p-20 shadow-2xl border border-white/50">
                <div className="text-9xl mb-8 animate-bounce">🎉</div>
                
                <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 font-dancing">
                  Thank You for Reading, Jaanum! 💕
                </h2>
                
                <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
                  You've just experienced something I made entirely for you, with all my love and hope.
                </p>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                  No matter what your answer is, I want you to know that you're absolutely incredible, and I'm grateful for every moment we've shared. You deserve all the love and happiness in the world. ✨
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 border border-pink-200">
                    <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                    <p className="text-pink-800 font-medium">Made with Love</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200">
                    <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-purple-800 font-medium">Crafted with Hope</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 border border-rose-200">
                    <Star className="w-12 h-12 text-rose-600 mx-auto mb-4" />
                    <p className="text-rose-800 font-medium">Delivered with Courage</p>
                  </div>
                </div>
                
                <div className="text-3xl md:text-4xl font-dancing text-gray-700">
                  Forever yours, with all my heart 💖
                </div>

                <button
                  onClick={() => setShowFinalMessage(false)}
                  className="mt-12 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-medium text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Read Again 💕
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        {!showFinalMessage && (
          <footer className="fade-in text-center py-16">
            <div className="max-w-md mx-auto bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50">
              <p className="text-gray-700 font-dancing text-2xl mb-2">
                Made with 💖 just for Jaanum
              </p>
              <p className="text-gray-500 text-lg">
                Because you deserve something as special as you are
              </p>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;