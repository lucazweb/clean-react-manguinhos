import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Login } from "@/presentation/pages"

type Props = {
  makeLogin: React.FC
}

const Router = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
