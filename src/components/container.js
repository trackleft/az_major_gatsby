import React from "react"

export default ({
  children,
  className,
}) => (
  <div
    className={className}
    css={{
      overflow: `hidden`,
      margin: `0 auto`,
      maxWidth: 1024,
    }}
  >
    {children}
  </div>
)
