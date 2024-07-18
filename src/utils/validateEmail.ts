export default function ValidadeEmail(email: string) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }