import React from 'react'
// できない
const contactForm = () => {
  return (
    <div>
      <iframe>
        <div
          className="formrun-embed"
          data-formrun-form="@nobContact"
        // data-formrun-redirect="true"
        >
        </div>
        <script src="https://sdk.form.run/js/v2/embed.js"></script>
      </iframe>
    </div>
  )
}

export default contactForm
