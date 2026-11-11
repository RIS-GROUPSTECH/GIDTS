const CallToAction = ({ onRegister }) => (
  <section className="closing-section content-section" id="apply">
    <div className="closing-copy">
      <p className="eyebrow">Your next chapter starts here</p>
      <h2>No barriers.<br /><span>Just your first step.</span></h2>
      <p>You don’t need experience to begin. Bring your curiosity, a willingness to practise and the ambition to see what you can create.</p>
      <button className="button-primary" type="button" onClick={onRegister}>
        Register for the bootcamp <span aria-hidden="true">↗</span>
      </button>
    </div>
    <div className="closing-art" aria-hidden="true">
      <span className="art-ring ring-one" />
      <span className="art-ring ring-two" />
      <span className="art-spark spark-one">✳</span>
      <span className="art-spark spark-two">✦</span>
      <span className="art-orb" />
      <span className="art-label">Your future<br />is in motion.</span>
    </div>
  </section>
)

export default CallToAction
