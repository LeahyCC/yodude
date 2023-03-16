export const GraphQL = () => {
  return (
    <div>
      <a onClick={() => history.back()} className="link">
        Home
      </a>
      <h1>GraphQL</h1>
      <p>
        GraphQL is a query language for APIs and a runtime for fulfilling those
        queries with your existing data.
      </p>
      <p>
        GraphQL provides a complete and understandable description of the data
        in your API, gives clients the power to ask for exactly what they need
        and nothing more, makes it easier to evolve APIs over time, and enables
        powerful developer tools.
      </p>
    </div>
  )
}
