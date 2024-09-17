const Hello = (props) => {
  return (
    <span>Hello {props.name}</span>
  )
}

const Information = (props) => {
  return (
    <>
      <div>Age: {props.age}</div>
      <div>Height: {props.height}</div>
    </>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const friends = [
    { name: 'Omar', sport:  'football' },
    { name: 'Dawid', sport: 'basketball' },
  ]

  return (
    <>
      <p><Hello />, it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
      <Hello name="Kusay"/>
      <Information age={21} height={176}/>
      <p>{friends[0].name} {friends[0].sport}</p>
      <p>{friends[1].name} {friends[1].sport}</p>
    </>
  )
}

console.log('App component is loaded')

export default App