// src/app/about/page.tsx

import React from 'react'

const AboutPage = () => {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-pink-600">About Me</h1>
                <p className="mt-4 text-lg">
                    Hi, I'm Tegegn. I’m passionate about helping students access global education opportunities. Through this platform, I provide information on scholarships, one-on-one counseling, and payment services to make studying abroad easier for you.
                </p>
            </header>
            <div className="mt-8">
                <h3 className="text-2xl font-semibold">Why Choose Me?</h3>
                <p>
                    I have a deep understanding of the scholarship landscape, and I’ve helped many students navigate the complexities of applications, essay writing, and securing funding. I believe everyone should have access to quality education, regardless of their background.
                </p>
            </div>
        </div>
    )
}

export default AboutPage
