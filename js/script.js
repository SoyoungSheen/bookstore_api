const tl = gsap.timeline({ defaults: { duration: 0.75 } })

tl.fromTo('.introduce', { scale: 0.8, y: 100 }, { scale: 1, y: 0 });
tl.fromTo('.nav-text', '.nav-text2', { opacity: -1 }, { opacity: 1 })