import React, { useState } from "react"
import { getStatus } from "../api"
import { useQuery } from "react-query"
import ReactHowler from "react-howler"
import siren from "../sounds/siren.mp3"

const Status = () => {
  const [testing, setTesting] = useState(false)
  const [notifying, setNotifying] = useState(false)
  const { data, error, isLoading, isError } = useQuery("status", getStatus, {
    refetchInterval: 30000,
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
          playing={(notifying && data.available) || testing}
          loop={true}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setNotifying(!notifying)}>
          {notifying
            ? "Screaming is turned on."
            : "Screaming is turned off. You will not be notified."}
        </button>
      </div>
      <h2>
        <div style={{ textAlign: "center" }}>
          {data.available ? (
            <p>Appointments are available!</p>
          ) : (
            <>
              <p>No appointments available at this time. </p>

              <button
                onClick={() => {
                  setTesting(!testing)
                }}
              >
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
