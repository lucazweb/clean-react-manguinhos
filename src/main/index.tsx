import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@/presentation/components"
import "@/main/config/global.css"
import { makeLogin } from "./factories/pages/login/login-factory"

ReactDOM.render(
  <Router makeLogin={makeLogin} />,
  document.getElementById("main")
)
