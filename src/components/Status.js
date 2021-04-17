import React, { useState } from "react"
import { getStatus } from "../api"
import { useQuery } from "react-query"
import ReactHowler from "react-howler"
import siren from "../sounds/siren.mp3"

const Status = () => {
  const [testing, setTesting] = useState(false)
  const [silenced, setSilenced] = useState(false)
  const { data, error, isLoading, isError } = useQuery("status", getStatus, {
    refetchInterval: 5000,
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Something went wrong: {error.message}</h2>
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div>
        <ReactHowler
          src={siren}
          playing={!silenced && (data.available || testing)}
          loop={true}
        />
      </div>

      <h2>
        <div style={{ textAlign: "center" }}>
          {data.available ? (
            <>
              <p>Appointments are available!</p>
              <button onClick={() => setSilenced(!silenced)}>
                {silenced ? "Turn the sound back on" : "Stop the sound"}
              </button>
            </>
          ) : (
            <>
              <p>No appointments available at this time. </p>

              <button onClick={() => setTesting(!testing)}>
                {testing
                  ? "Click me to STOP the notification sound!"
                  : "Click me to test the notification sound!"}
              </button>
            </>
          )}
        </div>
      </h2>
    </div>
  )
}

export default Status
