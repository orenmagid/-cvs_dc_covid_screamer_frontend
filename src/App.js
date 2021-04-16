import Status from "./components/Status"

function App() {
  return (
    <div>
      <section>
        <header>
          <h1 style={{ textAlign: "center" }}>
            CVS DC COVID Vaccine Availability Screamer
          </h1>
        </header>
        <main>
          <p>
            This application will scream at you if there are vaccine
            appointments available at a CVS in DC. This is likely to happen in
            the middle of the night. I suggest leaving this open in your
            browser, making sure your computer's volume is high enough to wake
            you up (test it below), and{" "}
            <a href="https://wedflow.zendesk.com/hc/en-us/articles/360037926892-How-to-prevent-your-computer-from-going-to-sleep-during-large-uploads-">
              making sure your computer won't go to sleep when you do.
            </a>
          </p>
          <p>
            When there's availability, go{" "}
            <a
              href="https://www.cvs.com/immunizations/covid-19-vaccine"
              target="_blank"
            >
              here
            </a>{" "}
            to sign up.
          </p>
          <p>
            Be warned that CVS's website is very buggy, and you may have to try
            again and again after encountering the following error:{" "}
            <strong>
              "We can't continue due to a technical glitch. Please try again
              later."
            </strong>
          </p>
          <Status />
        </main>
      </section>
    </div>
  )
}

export default App
