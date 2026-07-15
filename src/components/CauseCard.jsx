export default function CauseCard({ icon, title, text }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="cause-card p-4 shadow-sm h-100">
        <div className="icon mb-3">
          <i className={icon} />
        </div>
        <h5 className="fw-semibold mb-2">{title}</h5>
        <p className="text-dark small">{text}</p>
      </div>
    </div>
  )
}
