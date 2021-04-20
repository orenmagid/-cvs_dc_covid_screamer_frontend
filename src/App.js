import Status from "./components/Status"

function App() {
  return (
    <section style={{ padding: "0 1rem" }}>
      <header style={{ textAlign: "center" }}>
        <h1>CVS DC COVID Vaccine Availability Screamer</h1>
        Made by <a href="https://github.com/orenmagid">Oren Magid</a>
      </header>
      <main>
        <p>
          This application will scream at you if there are vaccine appointments
          available at a CVS in DC. When I created it, this was likely to happen
          in the middle of the night and I needed something to wake me up when
          appointments became available. Now, they seem to be available during
          the day more often and this is less necessary.
        </p>{" "}
        <p>
          But if for some reason you still need this to wake you up, or scare
          you silly, when appointments become available, here's what I suggest:
          when you are ready to go to sleep, turn off other notifications on
          your computer and leave this open in your browser. Turn "screaming"
          on. Make sure your computer's volume is high enough to wake you up
          (test it below), and{" "}
          <a href="https://wedflow.zendesk.com/hc/en-us/articles/360037926892-How-to-prevent-your-computer-from-going-to-sleep-during-large-uploads-">
            make sure your computer won't go to sleep when you do.
          </a>{" "}
          Feel free to try something similar with your phone—I haven't tried it,
          and I'd suggest using your computer, if you can.
        </p>
        <p>
          When there's availability, go{" "}
          <a
            href="https://www.cvs.com/immunizations/covid-19-vaccine"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          to sign up. Click the "District of Columbia" link. In the modal that
          opens up, you should see a "Schedule an appointment now" link. Click
          that and follow the instructions to sign up for an appointment.
        </p>
        <p>
          Be warned that CVS's website is very buggy, and you may have to try
          again and again after encountering the following error:{" "}
          <strong>
            "We can't continue due to a technical glitch. Please try again
            later."
          </strong>{" "}
          I must have filled out the form about ten times only to get that
          message when trying to choose the location of my first dose.
          Eventually, it worked.
        </p>
        <Status />
      </main>
    </section>
  )
}

export default App
