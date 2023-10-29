"use client"
import { useRef, useState } from 'react'
import { Button, Input, MainContent, SocialButtons, Textarea } from '@/components'
import styles from './contact.module.scss'
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

const Contact = () => {
  const form: any = useRef();
  const [messageIsOk, setMessageIsOk] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, 'must be at least 5 characters long').required(),
      email: Yup.string().email().required(),
      message: Yup.string().min(10, 'must be at least 10 characters long').required()
    }),
    onSubmit: (values) => {
      emailjs.sendForm('service_bdd9be6', 'template_dnzgc5l', form.current, 'PDz_Xfo6EGnneL92q')
      .then((result) => {
        if(result.text === 'OK' || result.status === 200) {
          setMessageIsOk(true);
          formik.resetForm();
          setTimeout(() => {
            setMessageIsOk(false);
          }, 5000);
        }
      }, (error) => {
        console.log(error.text);
      });
    }
  })

  return (
    <MainContent>
      <section className={styles.section}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.content}>
          <p className={styles.subtitle}>Hello👋, thanks for taking the time to reach out. How can I help you today?</p>
          <p>You can contact us through the following contact form. Also through my social networks.</p>
          {!messageIsOk ? (
            <form 
              ref={form}
              onSubmit={formik.handleSubmit}
              className={styles.form}
              autoComplete='off'>
              <div className={styles.name}>
                <Input 
                  type="text"
                  label="Name"
                  name="name"
                  error={{
                    touched: formik.touched.name,
                    message: formik.errors.name
                  }}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.email}>
                <Input 
                  type="email"
                  label="Email"
                  name="email"
                  error={{
                    touched: formik.touched.email,
                    message: formik.errors.email
                  }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.message}>
                <Textarea 
                  label="Message"
                  name="message"
                  error={{
                    touched: formik.touched.message,
                    message: formik.errors.message
                  }}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className={styles.button}>
                <Button type='submit' color='invert' icon='sent' text="Sent message" />
              </div>
            </form>
          )
          : (
            <div className={styles.emailok}>
              <IoCheckmarkDoneOutline />
              <p>Thanks for getting in touch with me! I`&apos;`ve received your message and I`&apos;`ll get back to you as soon as possible.</p>
            </div>
          )}
          <SocialButtons />
        </div>
      </section>
    </MainContent>
  )
}

export default Contact