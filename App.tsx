import { Card } from "./components"
import * as Card2  from "./components/Card"
import React from "react"

const App = () => {
  return <>
    {/*
      Go to declaration or Cmd-click on Header doesn't work.
      Go to declaration for Card works, but it goes to the components/index.ts
    */}
    <Card.Header></Card.Header>

    {/*
      If imported directly from "components/Card" it works:
    */}
    <Card2.Header />
  </>
}