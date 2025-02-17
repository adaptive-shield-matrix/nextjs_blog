import React from "react"
import { globals } from "../globals"

export function Footer() {
  return <div className="footer">
    <p>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
    <a href="/rss.xml">
      <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30"/>
    </a>
  </div>
}
