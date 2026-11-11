const learningStages = [
  { number: '01', title: 'Live classes', description: 'Interactive sessions introduce the core ideas, with guided coding and time to practise together.', detail: 'Days 1–3' },
  { number: '02', title: 'Build lab', description: 'Work through a project milestone with instructor support as you assemble, debug and improve your work.', detail: 'Day 4' },
  { number: '03', title: 'Independent practice', description: 'Apply what you’ve learned to an assignment, then submit your project for review and feedback.', detail: 'Keep building' },
]

const LearningPath = () => (
  <section className="journey-section" id="curriculum">
    <div className="journey-heading content-section">
      <div>
        <p className="eyebrow">A learning rhythm that works</p>
        <h2>Learn it. Build it.<br /><span>Make it yours.</span></h2>
      </div>
      <p className="journey-summary">
        Every week combines instructor-led learning with practical work—so new skills move from concept to something you can show.
      </p>
    </div>
    <div className="journey-body">
      <div className="journey-image">
        <img src="/YES2.png" alt="GHEF digital training initiative" />
        <div className="image-stamp"><span>GDITS</span><span>Learn · Create · Share</span></div>
      </div>
      <div className="stage-list">
        {learningStages.map((stage) => (
          <article className="stage-card" key={stage.number}>
            <span className="stage-number">{stage.number}</span>
            <div className="stage-copy">
              <div className="stage-title-row"><h3>{stage.title}</h3><span>{stage.detail}</span></div>
              <p>{stage.description}</p>
            </div>
            <span className="stage-arrow" aria-hidden="true"></span>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default LearningPath
