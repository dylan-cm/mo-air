import React from 'react'
import styled from '@emotion/styled'
import styles from '../styles/styles'
import chart from '../assets/flowchart v1.png'

const S = {}
S.Splash = styled.div`
  padding: 20px;
  padding-left: 15%;
  padding-right: 15%;
  width: 100%;
  box-sizing: border-box;

  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ol,
  p {
    list-style-position: outside;
    text-align: left;
    margin: 0px;
    margin-left: 16px;
    margin-bottom: 8px;
    line-height: 2rem;
  }

  ol {
    margin-left: 1rem;
  }

  h4 {
    align-self: flex-start;
    margin-bottom: 16px;
    margin-top: 48px;
  }

  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 800;
  }

  img {
    width: 80%;
    margin: 48px;
  }
`

S.JoinBtn = styled.div`
  background: ${styles.light};
  color: #000;
  margin: 24px;
  padding: 16px;
  padding-right: 24px;
  padding-left: 24px;
  border-radius: 100px;

  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  font-size: 2rem;

  &:hover {
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25);
  }
`

function Splash() {
  return (
    <S.Splash>
      <h2>Welcome to the Vent Builders Working Group</h2>
      <h3>We are building ventilators to meet the needs of this national crisis</h3>
      <h4>The Problem</h4>
      <p>
        In the US alone, the COVID-19{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">pandemic</a> may cause ventilator
        shortages on the order of 300,000-700,000 units (
        <a href="https://www.cdc.gov/flu/pandemic-resources/planning-preparedness/national-strategy-planning.html">
          CDC Pandemic Response Plans
        </a>
        ). These could present on a national scale{' '}
        <a href="https://www.statnews.com/2020/03/10/simple-math-alarming-answers-covid-19/">within weeks</a>, and are{' '}
        <a href="https://www.npr.org/sections/health-shots/2020/03/14/815675678/as-the-pandemic-spreads-will-there-be-enough-ventilators">
          already being felt
        </a>{' '}
        in certain areas. An increase in conventional ventilator production is very likely to{' '}
        <a href="https://www.wsj.com/articles/ventilator-makers-ramp-up-production-amid-coronavirus-crunch-11584626858">
          fall short
        </a>{' '}
        and with significant associated{' '}
        <a href="https://www.washingtonpost.com/health/2020/03/18/ventilator-shortage-hospital-icu-coronavirus/">
          cost
        </a>{' '}
        (paywall warning).
      </p>
      <h4>The Solution</h4>
      <p>
        We will create a working group for manufacturing cheap ventilators. With the right people we can help meet the
        needs of the nation. The plan is four steps:
      </p>
      <ol>
        <li>
          A <a href="https://e-vent.mit.edu/">working group at MIT</a> has already started engineering and testing a
          $100 ventilator.{' '}
        </li>
        <li>
          We need to begin sourcing{' '}
          <a href="https://e-vent.mit.edu/controls/electrical-hardware/">materials and parts</a> outlined in the MIT
          E-Vent design.
        </li>
        <li>We must quickly set up assembly lines near areas in most need.</li>
        <li>
          We will utilize the Red Cross and local hospital distribution networks already in place. We get them the vents
          and they will know best how and where to distribute them.
        </li>
      </ol>
      <img src={chart} alt="Flow Chart" />
      <h4>Right Now</h4>
      <p>
        We are filling positions and we are in most need of experts who can set up assembly lines and source parts and
        materials. Please click below to join our working group. After filling out the form, you will receive a link to
        our Slack where all coordination will take place. Let’s save some lives.
      </p>
      <a href="https://forms.gle/aPJ5GycCrXYGCHPT7">
        <S.JoinBtn>Join Us</S.JoinBtn>
      </a>
    </S.Splash>
  )
}

export default Splash
