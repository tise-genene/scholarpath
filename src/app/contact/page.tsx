// src/app/contact/page.tsx

'use client';

import React, { useState } from 'react'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission (e.g., API call, email sending)
        console.log(formData)
    }

    return (
        <div className="container mx-auto p-4">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-pink-600">Contact Me</h1>
                <p className="mt-4 text-lg">Have a question or need help? Reach out, and I’ll get back to you as soon as possible.</p>
            </header>

            <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
                <div className="mb-4">
                    <label className="block text-lg">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-lg">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        rows={4}
                        required
                    />
                </div>
                <button type="submit" className="bg-pink-600 text-white py-2 px-4 rounded-lg">Send Message</button>
            </form>
        </div>
    )
}

export default ContactPage
