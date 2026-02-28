export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function validateContactForm(form: ContactForm): FormErrors {
  const errors: FormErrors = {}

  if (!form.name.trim()) {
    errors.name = 'Le nom est requis'
  }

  if (!form.email.trim()) {
    errors.email = "L'email est requis"
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "L'email est invalide"
  }

  if (!form.message.trim()) {
    errors.message = 'Le message est requis'
  }

  return errors
}
