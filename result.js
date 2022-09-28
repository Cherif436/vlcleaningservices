import Link from 'next/link'
import React from 'react'

export default function result() {
  return (
    <div>
      <br />
      <h1>Email envoyé</h1>
      <br />
      <Link href="/">
        <a>Envoyer plus d'e-mails</a>
      </Link>
    </div>
  )
}
