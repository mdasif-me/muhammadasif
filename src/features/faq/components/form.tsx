"use client"

import React from "react"

import styles from "../styles/faq.module.css"

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
    <div className={styles.formContainer}>
      <h3 className="gradient-text mb-8">Ask Your Question</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            id="name"
            autoComplete="off"
            type="text"
            name="name"
            required={true}
            placeholder="Enter your name"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            autoComplete="off"
            type="email"
            name="email"
            required={true}
            placeholder="Enter your email"
            className={styles.input}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.formGroupTextarea}`}>
          <label htmlFor="question" className={styles.label}>
            Question
          </label>
          <textarea
            id="question"
            autoComplete="off"
            name="question"
            required={true}
            placeholder="Enter your question here..."
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default QuestionForm
