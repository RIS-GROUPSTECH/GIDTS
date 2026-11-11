const outcomes = [
  { number: '01', title: 'Build your foundation', description: 'Understand how websites are structured and how the web works.' },
  { number: '02', title: 'Bring ideas to life', description: 'Use HTML, CSS and JavaScript to create interactive web experiences.' },
  { number: '03', title: 'Grow your confidence', description: 'Practise debugging, problem-solving and presenting your work.' },
]

const ProgramOverview = () => (
  <section className="overview-section content-section" id="overview">
    <div className="section-intro">
      <p className="eyebrow">The programme</p>
      <h2>Start with curiosity.<br /><span>Leave with capability.</span></h2>
    </div>
    <div className="overview-content">
      <p className="overview-lead">
        The GHEF International Digital Training Scheme (GDITS) makes digital education more accessible through practical, industry-relevant learning.
      </p>
      <p className="overview-description">
        Across one focused month, you’ll move from the fundamentals of web development to creating and presenting a website project of your own. Learn with guided instruction, hands-on practice and room to experiment.
      </p>
      <div className="outcomes-grid">
        {outcomes.map((outcome) => (
          <article className="outcome-card" key={outcome.number}>
            <span className="outcome-number">{outcome.number}</span>
            <h3>{outcome.title}</h3>
            <p>{outcome.description}</p>
          </article>
        ))}
      </div>
      <div className="topics-row">
        <span>What you’ll explore</span>
        <div className="topic-pills">
          <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Web projects</span><span>Problem-solving</span>
        </div>
      </div>
    </div>
  </section>
)

export default ProgramOverview
