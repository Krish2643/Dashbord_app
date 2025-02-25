import React from "react"
import Cards from "../cards/Cards"
import Charts from "../charts/Charts"

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container'>
          <div className='heading flexSB'>
            <h3>DashBoard</h3>
          </div>
          <Cards />
          <Charts />
        </div>
      </section>
    </>
  )
}

export default Home
