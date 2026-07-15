const WHATSAPP_NUMBER = '917909375712' // country code + number, no + or spaces
const DEFAULT_MESSAGE =
  "Hi Janak Foundation! I'd like to know more about your work."

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`

  return (
    <a
      href={href}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Janak Foundation on WhatsApp"
    >
      <span className="whatsapp-fab-ping" aria-hidden="true" />
      <i className="bi bi-whatsapp" aria-hidden="true" />
      <span className="whatsapp-fab-tooltip">Chat with us</span>
    </a>
  )
}
