const Country = ({countryData}) => {
  const flagStyle = {
    fontSize: '100px'
  }

  return (
    <div>
      <h1>{countryData.name}</h1>
      <p>
        Capital: {countryData.capital}
        <br />
        Area: {countryData.area && countryData.area.toLocaleString()} {' '}
        km<sup>2</sup>
      </p>
      <h2>Languages</h2>
      <ul>
        {countryData.languages &&
          Object.values(countryData.languages).map((l) => <li key={l}>{l}</li>)}
      </ul>
      <div style={flagStyle}>{countryData.flag}</div>
      <h1>Weather</h1>
      <p>Temperature: {countryData.tempCapital} °C</p>
      <img src={countryData.weatherURL} />
      <p>Wind: {countryData.windSpeedCapital} m/s</p>
    </div>
  );
}


const Countries = ({filtered, countryData, onShow}) => {
  
  if (filtered.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (filtered.length === 1) {
    return (
      <Country countryData={countryData} />
    )
  }
  return (
    <>
      <table>
        <tbody>
          {filtered.map(c => {
            return <tr key={c}>
              <td>{c}</td>
              <td>
                <button onClick={() => onShow([c])}>show</button>
              </td>
            </tr>})}
        </tbody>
      </table>
    </>
  )
}

export default Countries