"use client"

import React from "react"

const QuestionForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const name = formData.get("name")?.toString().trim()
    const email = formData.get("email")?.toString().trim()
    const question = formData.get("question")?.toString().trim()

    if (!name || !email || !question) {
      alert("All fields are required.")
      return
    }

    const subject = encodeURIComponent(`Question from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nQuestion:\n${question}`
    )
    const mailtoLink = `mailto:contact@muhammadasif.me?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
    form.reset()
  }

  return (
    <div className="xl:min-w-[600px] card md:p-8 p-3.5 h-full flex flex-col">
      <h3 className="gradient-text !capitalize !font-bold mb-6">
        Ask Your Question
      </h3>

      <form
        onSubmit={handleSubmit}
        action=""
        className="self-stretch flex flex-col items-center gap-2.5 w-full space-y-3.5 flex-1"
      >
        <div className={`space-y-3 w-full flex-1 flex flex-col`}>
          <label htmlFor="name" className={`text-xl font-medium leading-8`}>
            Name
          </label>
          <input
            id="name"
            autoComplete="off"
            type="text"
            name="name"
            required={true}
            placeholder="Enter your name"
            className="bg-background rounded-2xl py-2.5 px-3 h-20 w-full text-lg text-[#6F6F6F] font-normal outline-none"
          />
        </div>
        <div className={`space-y-3 w-full flex-1 flex flex-col`}>
          <label htmlFor="email" className={`text-xl font-medium leading-8`}>
            Email
          </label>
          <input
            id="email"
            autoComplete="off"
            type="email"
            name="email"
            required={true}
            placeholder="Enter your email"
            className="bg-background rounded-2xl py-2.5 px-3 h-20 w-full text-lg text-[#6F6F6F] font-normal outline-none"
          />
        </div>
        <div className={`space-y-3 w-full flex-1 flex flex-col`}>
          <label htmlFor="question" className={`text-xl font-medium leading-8`}>
            Question
          </label>
          <textarea
            id="question"
            autoComplete="off"
            name="question"
            required={true}
            cols={120}
            rows={5}
            placeholder="Enter your Question here...."
            className="bg-background rounded-2xl py-2.5 px-3 w-full text-lg text-[#6F6F6F] font-normal outline-none flex-1 min-h-[200px]"
          />
        </div>
        <button
          type="submit"
          className="mt-6 bg-primary text-[#E1EAE5] w-full py-[18px] px-6 shrink-0 rounded-[12px] uppercase text-lg font-medium leading-7"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default QuestionForm
